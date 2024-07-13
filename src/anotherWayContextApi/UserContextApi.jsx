import { createContext, useState } from 'react';

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    let [userData, setUserData] = useState([]);


 return (
   <UserContext.Provider value={{ userData, setUserData  }}>
     {children}
   </UserContext.Provider>
 );
};

export { UserContext, UserContextProvider };