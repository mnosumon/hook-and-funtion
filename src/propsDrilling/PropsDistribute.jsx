import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'

const PropsDistribute = () => {
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
    <NewUser setUserData={setUserData} handleAddUser={handleAddUser} />
    <Users userData={userData} setUserData={setUserData} />
              
    </>
  )
}

export default PropsDistribute