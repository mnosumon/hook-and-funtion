import React from 'react'
import User from './User'

const Users = ({userData, setUserData}) => {
    let handleDelete = (id)=>{
        let filterUser = userData.filter((userItem)=>userItem.id !== id);
        setUserData(filterUser);
    }
  return (
    <>  
        <div className=" grid grid-cols-4 gap-6 my-5">
        {
            userData.map((userItem, index)=> (
                <User userItem={userItem} key={index} handleDelete={handleDelete} />
            ))
        }
        </div>
    </>
  )
}

export default Users