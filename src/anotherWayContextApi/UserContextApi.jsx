import { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    let [userData, setUserData] = useState([]);

    const handleDelete = (id) => {
      const filteredUsers = userData.filter(userItem => userItem.id !== id);
      setUserData(filteredUsers);
  };


  return (
    <UserContext.Provider value={{ userData, setUserData, handleDelete  }}>
      {children}
    </UserContext.Provider>
  );
};



// import React, { useState } from 'react'
// import { UserContextApi, UserProvider } from './UserContextApi'
// import Users from './Users'
// import NewUser from './NewUser'


// const ContextAPI = () => {

// //   let addUser =(newUser)=>{
// //     setUser((prev)=>[...prev, newUser])
// // }

//   return (
//     <>
//       <UserProvider>
//         <NewUser />
//         <Users />
//       </UserProvider>
//     </>
//   )
// }

// export default ContextAPI

// import { createContext, useState } from "react";

// export const UserContextApi = createContext({})

// export const UserProvider = ({children})=>{
//     let [user, setUser] = useState([])

//     return(
//         <UserContextApi.Provider 
//         value={{
//         user,setUser
//         }}>
//             {children}
//         </UserContextApi.Provider>
//     )
// }