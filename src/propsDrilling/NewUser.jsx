import React, { useState } from 'react'

const NewUser = ({handleAddUser}) => {
    let [inputUser, setInputUser] = useState("")

    let handleChange = (e)=> {
        setInputUser(e.target.value);
    }
    let handleAdd = (e)=>{
        e.preventDefault();
        handleAddUser(inputUser)
    }
  return (
    <>
        <h1 className='text-3xl text-yellow-700 py-8 text-center'>Nwe user add</h1>
        <form className='flex flex-col gap-4 items-center' action="">
            <input onChange={handleChange} className='text-xl py-3 px-6 focus:outline-none border-2 border-orange-500 rounded-md w-[600px]' type="text" />
            <button onClick={handleAdd} className='bg-violet-600 text-white px-4 py-2 rounded-md'>Add user</button>
        </form>
    </>
  )
}

export default NewUser