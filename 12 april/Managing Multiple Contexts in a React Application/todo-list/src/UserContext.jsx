// UserContext.js

import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, authenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
