import React, {useEffect} from 'react';


const Comment = props => {
  const {comment, deleteComment} = props;


  console.log(comment);
  return(
    <div>
      <ol className="post-list"> 
        <div>
          <li>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </li>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      </ol>
    </div>
  );
};

export default Comment;