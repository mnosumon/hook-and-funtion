import React, { useEffect, useRef, useState } from 'react';

const Usestate = () => {
  let [show, setShow] = useState(false)
  // let handleClick = ()=>{
  //   setShow(!show)


  //   // if (show) {
  //   //   setShow(false)
  //   // }else{
  //   //   setShow(true)
  //   // }
  // }

  let inputRef = useRef(null)
  let handleChange = (e)=>{

  }
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  let [count, setCount] = useState(0)
  let handleIncriment =()=>{
    
    // setCount((count)=>count++) // not work
    setCount((count)=>count+1)
  }

  return (
    <>
      <div className="bg-red-700 w-[700px] mx-auto p-20">
        <input onChange={handleChange} ref={inputRef} type={ show ? "text" : "password"} placeholder='Password' className='p-5' />
        <button onClick={()=>setShow(!show)} className='bg-slate-700 text-white p-5 ml-3' type='button'>{show ? "Hide" : "show"}</button>
      </div>
      <div className="bg-blue-700 w-[700px] mx-auto p-20">
      <button onClick={handleIncriment} className='bg-slate-700 text-white p-5 ml-3'>Click</button>
        <h1 className='text-3xl text-white p-5'>{count}</h1>
        <button onClick={()=>setCount((prev)=>prev - 1)} className='bg-slate-700 text-white p-5 ml-3'>Click</button>
      </div>
    </>
  );
};

export default Usestate;
