// AppContext.js
import React, {createContext, useContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = email => {
    // In a real app, you would implement actual authentication logic here
    // For simplicity, let's assume any non-empty email is a successful login
    if (email) {
      setUser({email});
      return true; // Login success
    }
    return false; // Login failed
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{user, login, logout}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
