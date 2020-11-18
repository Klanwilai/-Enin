import React, { useState, useEffect } from 'react';
import PostList from './postList';

const Posts = () => {

  const initalDeleteCount = parseInt(sessionStorage.getItem('deleteCount'));
  const initalToggleCommentCount = parseInt(sessionStorage.getItem('toggleCommentCount'));

  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [toggleCommentCount, setToggleCommentCount] = useState(initalToggleCommentCount ? initalToggleCommentCount : 0);
  const [deleteCount, setDeleteCount] = useState(initalDeleteCount ? initalDeleteCount : 0);

  const handleToggleCommentCount = () => {
    setToggleCommentCount(toggleCommentCount + 1);
  };

  const handleDeleteCount = () => {

    setDeleteCount(deleteCount + 1);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json()).then(r => r.sort((a, b) => b.id - a.id)).then(r => setPostData(r));

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json()).then(r => r.sort((a, b) => b.id - a.id)).then(r => setUserData(r));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem('deleteCount', deleteCount);
      sessionStorage.setItem('toggleCommentCount', toggleCommentCount);
    });
  }, [deleteCount, toggleCommentCount]);

  return (
    <div>
      <div className="counters">
        <h2>Times toggled comments: {toggleCommentCount}</h2>
        <h2>Times deleted comments: {deleteCount}</h2>
      </div>
      {(userData && postData) ? <PostList userData={userData} postData={postData} handleDelete={handleDeleteCount} handleToggle={handleToggleCommentCount}/> : <h2>Loading</h2>}
    </div>
  );
};

export default Posts;