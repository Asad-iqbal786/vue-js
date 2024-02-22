// src/services/authService.js

import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('http://your-api/auth/login', { username, password });
    const { user, token } = response.data;
    return { user, token };
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const logout = async () => {
  // Add logic for logging out on the server if needed
  // For example, send a logout request to invalidate the user's token
};

export const getUserData = async () => {
  try {
    const response = await axios.get('http://your-api/auth/user');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
