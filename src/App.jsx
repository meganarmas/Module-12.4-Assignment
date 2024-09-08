import React, { useState, useEffect, } from 'react';
import PostContent from './Componet/PostContent';
import PostList from './Componet/PostList';
import UserSelector from './Componet/UserSelector';
import './App.css'

const App = ()  => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPosts, setSelectedPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postsData = await postsResponse.json();
      const usersData = await usersResponse.json();

      setPosts(postsData)
      setUsers(usersData)
    };

    fetchData();
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setSelectedPosts(null);
  };

  const handlePostSelect = (post) => {
    setSelectedPosts(post);
  };

  return (
    <div>
      <PostContent content={selectedPosts} />
      <UserSelector users={users} onUserSelect={handleUserSelect} />

      <PostList
      posts={posts}
      selectedUserId={selectedUserId}
      handlePostSelect={handlePostSelect}
      />
    </div>
  );
};

export default App;
