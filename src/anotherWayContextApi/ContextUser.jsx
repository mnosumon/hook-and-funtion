import React from 'react'
import { userHook } from '../hooks/UserHooks';

const User = ({userItem}) => {
    let {id, userName} = userItem;
    let {handleDelete} = userHook()

  return (
    <>
        <div className="bg-slate-300 text-center rounded-lg p-4">
            <h1 className='text-amber-600 text-2xl font-extrabold'>{id}</h1>
            <h1 className='text-amber-600 text-xl my-4 font-bold'>{userName}</h1>
            <button onClick={()=>handleDelete(id)} className='bg-red-600 text-white px-4 py-2 rounded-md'>Delete</button>
        </div>
    </>
  )
}

export default User