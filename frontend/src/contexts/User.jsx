import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const handleUser = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default {
  UserContext,
  UserProvider,
};
