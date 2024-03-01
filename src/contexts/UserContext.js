import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export function UserContextProvider({children, value}) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
