import React, { forwardRef } from 'react'

const Input = ({placeholder, type}, ref) => {
  
  return (
    <input ref={ref} type={type} placeholder={placeholder}/>
  )
}
let forwardInput = forwardRef(Input)
export default forwardInput