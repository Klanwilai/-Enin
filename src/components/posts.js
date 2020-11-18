import React, { useState, useEffect, useContext } from 'react';
import PostList from './postList';

const Posts = () => {

  const initalCount = parseInt(sessionStorage.getItem('count'));

  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(initalCount ? initalCount : 0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json()).then(r => r.sort((a, b) => b.id - a.id)).then(r => setPostData(r));

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json()).then(r => r.sort((a, b) => b.id - a.id)).then(r => setUserData(r));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => 
      sessionStorage.setItem('count', count)
    );
  }, [count]);

  return (
    <div>
      <div className="counters">
        <h2>Times buttons were clicked: {count}</h2>
      </div>
      {(userData && postData) ? <PostList userData={userData} postData={postData} incrementCounter={incrementCounter}/> : <h2>Loading</h2>}
    </div>
  );
};

export default Posts;