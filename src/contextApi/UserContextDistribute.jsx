import React, { useState } from 'react'
import NewUser from './ContextNewUser'
import Users from './ContextUsers'
import { UserContext } from './UserContextApi'

const UserContextDistribute = () => {
    let [userData, setUserData] = useState([
        {
            id: 1,
            userName: "Sumon"
        },
        {
            id: 2,
            userName: "Arnob"
        }
    ])
    let handleAddUser = (inputUser)=>{
        let idGenerate = userData.length > 0 ? Math.max(...userData.map((item)=> item.id)) : '0'
        let userAdd = {
            id: idGenerate + 1,
            userName: inputUser
        }
        setUserData((prev)=> [...prev, userAdd]);
    }


  return (
    <>
        <UserContext.Provider 
        value={{userData, setUserData, handleAddUser}}>
            <NewUser />
            <Users />
        </UserContext.Provider>           
    </>
  )
}

export default UserContextDistribute