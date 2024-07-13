import React, { useContext } from 'react'
import User from './ContextUser';
import { UserContext } from './UserContextApi';

const Users = () => {
    let {userData, setUserData} = useContext(UserContext)
    let handleDelete = (id)=>{
        let filterUser = userData.filter((userItem)=>userItem.id !== id);
        setUserData(filterUser);
    }
  return (
    <>  
    <UserContext.Provider 
        value={{ handleDelete}}>
        <div className=" grid grid-cols-4 gap-6 my-5">
        {
            userData.map((userItem, index)=> (
                <User userItem={userItem} key={index}  />
            ))
        }
        </div>
    </UserContext.Provider>   
    </>
  )
}

export default Users