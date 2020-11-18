import React from 'react';
import Post from './post';


const PostList = props => {
  const {data, handleDelete, handleToggle} = props;
  
  return(
    <div>
      <ol className="post-list"> 
        {data.map((item, idx) => {
          return (<Post key={item.id} post={item} handleDelete={handleDelete} handleToggle={handleToggle}/>);
        })}
      </ol>
    </div>
  );
};

export default PostList;