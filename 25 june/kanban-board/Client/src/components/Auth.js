import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Auth = ({ isLogin }) => {
  const { login, register } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isLogin) {
      await login(form.username, form.password);
    } else {
      await register(form.username, form.password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default Auth;
