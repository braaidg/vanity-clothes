import { useState, useEffect, createContext, useMemo } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';
// as the cctual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
