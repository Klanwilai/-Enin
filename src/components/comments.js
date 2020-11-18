import React, {useEffect, useState} from 'react';
import CommentList from './commentList';


const Comments = ({postId, incrementCounter}) => {
  const [comments, setComments] = useState(null);
  
  const handleDelete = (target) => {

    setComments(comments.map((e, i) => i === target ? null : e).filter(Boolean));
    incrementCounter();
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(r => r.json()).then(r => setComments(r));
  }, []);
  
  return (
    <div>
      {comments
        ? <CommentList comments={comments} postId={postId} handleDelete={handleDelete}/>
        : <p>Loading</p>
      }
    </div>
  );
};

export default Comments;