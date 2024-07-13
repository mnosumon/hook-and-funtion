import { createContext, useState } from 'react';

const UserContext = createContext({});

// const UserContextProvider = ({ children }) => {
//  const [count, setCount] = useState(0);

//  return (
//    <userContext.Provider value={{ count, setCount }}>
//      {children}
//    </userContext.Provider>
//  );
// };

export { UserContext };