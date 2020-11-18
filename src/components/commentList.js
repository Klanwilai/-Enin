import React, {useEffect} from 'react';


const Comment = props => {
  const {comments, userId, handleDelete} = props;

  const deleteComment = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments/${index}`, {
    method: 'DELETE',
    });

    handleDelete();
  };


  console.log(comments);
  return(
    <div>
      <ol className="post-list"> 
        {comments.map((item, idx) => {
          return (
            <div key={idx}>
              <p>{idx}</p>
              <li>
                <h4>{item.email}</h4>
                <p>{item.body}</p>
              </li>
              <button onClick={() => deleteComment(idx)}>Delete</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Comment;