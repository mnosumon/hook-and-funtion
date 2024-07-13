import React, { useContext } from 'react'
import { UserContext } from './UserContextApi';
const User = ({userItem}) => {
    let {handleDelete} = useContext(UserContext)
    let {id, userName} = userItem;
    let handleUserDelete = (id)=>{
        handleDelete(id)
    }
  return (
    <>
        <div className="bg-slate-300 text-center rounded-lg p-4">
            <h1 className='text-amber-600 text-2xl font-extrabold'>{id}</h1>
            <h1 className='text-amber-600 text-xl my-4 font-bold'>{userName}</h1>
            <button onClick={()=>handleUserDelete(id)} className='bg-red-600 text-white px-4 py-2 rounded-md'>Delete</button>
        </div>
    </>
  )
}

export default User