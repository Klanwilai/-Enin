import React, { useState, useEffect } from 'react';
import PostList from './postList';

const Posts = () => {

  const [data, setData] = useState(null);
  const [toggleCommentCount, setToggleCommentCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  const handleToggleCommentCount = () => {
    setToggleCommentCount(toggleCommentCount + 1);
  };

  const handleDeleteCount = () => {
    setDeleteCount(deleteCount + 1);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json()).then(r => r.sort((a, b) => b.id - a.id)).then(r => setData(r));

    console.log(data);
  }, []);

  return (
    <div>
      <div className="counters">
        <h2>Times toggled comments: {toggleCommentCount}</h2>
        <h2>Times deleted comments: {deleteCount}</h2>
      </div>
      {data ? <PostList data={data} handleDelete={handleDeleteCount} handleToggle={handleToggleCommentCount}/> : <h2>Loading</h2>}
    </div>
  );
};

export default Posts;