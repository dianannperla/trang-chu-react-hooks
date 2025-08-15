import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app">
      <h1>Thông Tin Người Dùng</h1>
      <input 
        type="text" 
        name="name" 
        value={userInfo.name} 
        onChange={handleChange} 
        placeholder="Tên của bạn" 
      />
      <input 
        type="email" 
        name="email" 
        value={userInfo.email} 
        onChange={handleChange} 
        placeholder="Email của bạn" 
      />
      <h2>Tên: {userInfo.name}</h2>
      <h2>Email: {userInfo.email}</h2>
    </div>
  );
};

export default App;