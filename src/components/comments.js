import React, {useEffect, useState} from 'react';
import CommentList from './commentList';


const Comments = ({postId, handleDelete}) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(r => r.json()).then(r => setComments(r));
  }, []);
  
  return (
    <div>
      {comments ? <CommentList comments={comments} postId={postId} handleDelete={handleDelete}/> : <p>Loading</p>}
    </div>
  );
};

export default Comments;