import React, { useState, useEffect, useCallback } from 'react';
import PostList from './PostList';
import './css/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const addPost = useCallback(() => {
    if (title.trim() !== '' && body.trim() !== '') {
      setPosts((prevPosts) => [
        ...prevPosts,
        {
          id: Date.now(),
          title,
          body,
          verifyPost: false,
          bgColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        },
      ]);
      setTitle('');
      setBody('');
    }
  }, [title, body]);

  const toggleVerify = useCallback((postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div className="App">
      <h1>Timer: {timer}</h1>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
      <input type="text" value={body} onChange={handleBodyChange} placeholder="Body" />
      <button onClick={addPost}>Add Post</button>
      <PostList posts={posts} toggleVerify={toggleVerify} />
    </div>
  );
};

export default App;
