import React, { useState, useContext } from "react";

export const UserNameContext = React.createContext();

const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("Guest User");
  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export const useUserNameContext = () => useContext(UserNameContext);
export default UserNameProvider;
