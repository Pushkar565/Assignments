// NavigationBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
      <button onClick={() => handleNavigation('/')}>Go Home</button>
    </nav>
  );
};

export default NavigationBar;