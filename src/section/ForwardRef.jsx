import React, { useEffect, useRef } from 'react'
import Input from '../components/Input'

const ForwardRef = () => {
    let inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <>
        <Input type="text" ref={inputRef} placeholder="afjkash" />
    </>
  )
}

export default ForwardRef