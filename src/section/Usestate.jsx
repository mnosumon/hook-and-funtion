import React, { useRef, useState } from 'react';

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
    inputRef.current.style.background = "blue"
  }

  return (
    <>
      <div className="bg-red-700 w-[700px] mx-auto p-20">
        <input onChange={handleChange} ref={inputRef} type={ show ? "text" : "password"} placeholder='Password' className='p-5' />
        <button onClick={()=>setShow(!show)} className='bg-slate-700 text-white p-5 ml-3' type='button'>{show ? "Hide" : "show"}</button>
      </div>
    </>
  );
};

export default Usestate;
