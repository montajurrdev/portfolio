import React from 'react'

const Input = ({type,className,placeholder,value,name}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} className={`w-full bg-gray-300 rounded-md ${className}`} required="required"/>
  )
}

export default Input