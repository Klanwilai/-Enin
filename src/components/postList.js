import React from 'react';
import Post from './post';


const PostList = props => {
  const {postData, userData, handleDelete, handleToggle} = props;
  
  return(
    <div>
      <ol className="post-list"> 
        {postData.map((item, idx) => {
          return (<Post key={item.id} post={item} handleDelete={handleDelete} handleToggle={handleToggle} userData={userData}/>);
        })}
      </ol>
    </div>
  );
};

export default PostList;