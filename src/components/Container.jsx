import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`w-[96%] md:w-[90%] max-w-[1320px] m-auto ${className}`} >{children} </div>
  )
}

export default Container