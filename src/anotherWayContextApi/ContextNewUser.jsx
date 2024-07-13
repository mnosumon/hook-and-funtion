import React, { useState } from 'react'
import { userHook } from '../hooks/UserHooks'

const NewUser = () => {

    let {userData, setUserData} = userHook()
    let [inputUser, setInputUser] = useState("")

    let handleChange = (e)=> {
        setInputUser(e.target.value);
    }


    let handleAddUser = (e)=>{
        e.preventDefault();
        let idGenerate = userData.length > 0 ? Math.max(...userData.map((item)=> item.id)) : '0'
        let userAdd = {
            id: idGenerate + 1,
            userName: inputUser
        }
        setUserData((prev)=> [...prev, userAdd]);
        setInputUser("")
    }


  return (
    <>
        <h1 className='text-3xl text-yellow-700 py-8 text-center'>Nwe user add</h1>
        <form className='flex flex-col gap-4 items-center' action="">
            <input
            value={inputUser}
             onChange={handleChange}
             className='text-xl py-3 px-6 focus:outline-none border-2 border-orange-500 rounded-md w-[600px]' type="text" />
            <button onClick={handleAddUser} className='bg-violet-600 text-white px-4 py-2 rounded-md'>Add user</button>
        </form>
    </>
  )
}

export default NewUser