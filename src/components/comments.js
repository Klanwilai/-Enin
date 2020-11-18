import React, {useEffect, useState} from 'react';
import CommentList from './commentList';


const Comments = props => {
  const [comments, setComments] = useState(null);
  const {postId, handleDelete} = props;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(r => r.json()).then(r => setComments(r));
    },
  [postId]);
  
  return(
    <div>
      {comments ? <CommentList comments={comments} postId={postId} handleDelete={handleDelete}/> : <p>Loading</p>}
    </div>
  );
};

export default Comments;