import React, {useState} from 'react';
import Comments from './comments'

const Post = props => {
  const [showComment, setShowComment] = useState(false);  
  const {post, handleDelete, handleToggle} = props;

  function handleShowComment() {
    setShowComment(!showComment);
    handleToggle();
    console.log("clicked");
  }

  return(
    <div>
      <div className="post-entry">
        <li>
          <ul>
            <li><h3>{post.title}</h3></li>
            <li><p>{post.body}</p></li>
            <li><p>{post.userId}</p></li>
          </ul>
        </li>
        <button onClick={handleShowComment}>{showComment ? "Hide comment(s)" : "Show comment(s)"}</button>
      </div>
      {showComment && <Comments postId={post.id} handleDelete={handleDelete}/>}
    </div>
  );
};

export default Post;