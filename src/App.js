import React, { useState, useEffect } from 'react';
import './style.css';
import Stories from './Stories';

export default function App() {
  // https://jsonplaceholder.typicode.com/posts

  const [showStories, setStories] = useState(false);
  useEffect(() => {
    console.log('effect', showStories);
  }, [showStories]);
  const handleClick = () => {
    setStories(!showStories);
    console.log(showStories);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleClick}>STORIES</button>
      {showStories && <Stories />}
    </div>
  );
}
