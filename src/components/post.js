import React, {useState} from 'react';
import Comments from './comments'

const Post = ({post, userData, incrementCounter}) => {
  const [showComment, setShowComment] = useState(false); 

  const user = userData.find(e => post.userId === e.id);

  function handleShowComment() {
    setShowComment(!showComment);
    incrementCounter();
  }

  return(
    <div>
      <div className="post-entry">
        <li>
          <ul>
            <li><h3>{post.title}</h3></li>
            <li><p>{post.body}</p></li>
            <li>
              <p>Author name: {user.name}</p>
              <p>Author email: {user.email}</p>
            </li>
          </ul>
        </li>
        <button onClick={handleShowComment}>{showComment ? "Hide comment(s)" : "Show comment(s)"}</button>
      </div>
      {showComment && <Comments postId={post.id} incrementCounter={incrementCounter}/>}
    </div>
  );
};

export default Post;