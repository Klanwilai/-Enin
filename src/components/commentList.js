import React, {useEffect} from 'react';


const Comment = ({comments, userId, handleDelete}) => {

  const deleteComment = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments/${index}`, {
      method: 'DELETE',
    });

    handleDelete(index);
  };
  
  return(
    <div>
      <ol className="post-list"> 
        {comments.map((item, idx) =>
          <li key={idx}>
            <p>{idx}</p>
            <h4>{item.email}</h4>
            <p>{item.body}</p>
            <button onClick={() => deleteComment(idx)}>Delete</button>
          </li>
        )}
      </ol>
    </div>
  );
};

export default Comment;