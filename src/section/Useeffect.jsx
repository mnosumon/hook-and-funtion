import React, { useEffect, useRef, useState } from 'react'
import Video from '../assets/vedio/helo.mp4'

const Useeffect = () => {
    let [count, setCount] = useState(0)
    let [counts, setCounts] = useState(0)

    let vedioRef = useRef(null)
    let playVedio = ()=>{
      vedioRef.current.play();
    }
    let puseVedio = ()=>{
      vedioRef.current.pause();
    }

    useEffect(()=>{
      console.log("asfdasf"); 
    },[count])


  return (
    <>
    <div className="bg-red-700 w-[700px] mx-auto p-20">

        <button onClick={()=>setCount((count)=>count + 1)} className='bg-slate-700 text-white p-5 ml-3' type='button'>hello</button>
        <button onClick={()=>setCounts((counts)=>counts + 1)} className='bg-slate-700 text-white p-5 ml-3' type='button'>hello2</button>

      <video ref={vedioRef} src={Video} controls/>
      <button onClick={playVedio} className='bg-slate-700 text-white p-5 ml-3' type='button'>Play</button>
      <button onClick={puseVedio} className='bg-slate-700 text-white p-5 ml-3' type='button'>puse</button>
        
      </div>
    </>
  )
}

export default Useeffect