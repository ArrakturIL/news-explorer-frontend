import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
UserContext.displayName = 'User';

export const useInfo = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: '', isLoggedIn: false });

  const signIn = (name) => setCurrentUser({ name, isLoggedIn: true });

  const signOut = () => setCurrentUser({ name: '', isLoggedIn: false });

  return <UserContext.Provider value={{ currentUser, signIn, signOut }}>{children}</UserContext.Provider>;
};