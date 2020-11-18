import React from 'react';
import Post from './post';


const PostList = ({postData, userData, incrementCounter}) => (
  <div>
    <ol className="post-list"> 
      {postData.map((item, idx) => 
        <Post key={item.id} post={item} userData={userData} incrementCounter={incrementCounter}/>
      )}
    </ol>
  </div>
);

export default PostList;