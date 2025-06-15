import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const ExploreUsers = () => {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUserIds, setLoadingUserIds] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!storedUser || !storedUser.id) return;

    setCurrentUser(storedUser);
    setSubscriptions(storedUser.subscriptions || []);
    fetchUsers(storedUser.id);
  }, []);

  const fetchUsers = async (currentUserId) => {
    try {
      const res = await axios.get('http://localhost:1000/api/users');
      const otherUsers = res.data.filter((u) => u._id !== currentUserId);
      setUsers(otherUsers);
    } catch (err) {
      console.error('Error loading users:', err);
    }
  };

  const toggleSubscription = async (targetUserId) => {
    if (!currentUser || !currentUser.id || targetUserId === currentUser.id) return;

    setLoadingUserIds((prev) => [...prev, targetUserId]);
    try {
      const res = await axios.post(
        `http://localhost:1000/api/users/${targetUserId}/toggle-subscription`,
        { userId: currentUser.id }
      );

      const updatedUser = res.data;
      const updatedId = updatedUser._id || updatedUser.id;
      const updatedLocalUser = {
        id: updatedId,
        username: updatedUser.username,
        email: updatedUser.email,
        avatar: updatedUser.avatar || '',
        subscriptions: updatedUser.subscriptions || [],
        subscribers: updatedUser.subscribers || []
      };

      setCurrentUser(updatedLocalUser);
      setSubscriptions(updatedUser.subscriptions || []);
      localStorage.setItem('currentUser', JSON.stringify(updatedLocalUser));

      await fetchUsers(updatedId);
    } catch (err) {
      console.error('Error while subscribing:', err);
    } finally {
      setLoadingUserIds((prev) => prev.filter((id) => id !== targetUserId));
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: 20 }}>
      <h2>Explore Users</h2>
      {users.length === 0 ? (
        <p>No other users</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            isSubscribed={subscriptions.includes(user._id)}
            onToggle={toggleSubscription}
            disabled={loadingUserIds.includes(user._id)}
          />
        ))
      )}
    </div>
  );
};

export default ExploreUsers;
