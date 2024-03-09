import React, { useState } from 'react';
import axios from 'axios';
import base_url from "./../api/bootapi";
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base_url}/login`, { username, password }); // Update the URL with your backend endpoint
      if (response.status === 200) {
        navigate('/list-stud');
        console.log('Login successful');
        // Handle successful login, e.g., redirect to dashboard
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
