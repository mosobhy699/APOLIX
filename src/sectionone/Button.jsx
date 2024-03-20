import React from 'react'

const Button = ({ title }) => {
  return (
    <button className='rounded-xl text-[#f1f6f9] bg-[#0b2545]  py-6 px-9 hover:scale-105 transition hover:bg-[#f1f6f9] text-xl hover:text-[#0f172a] w-fit text-nowrap'>{title}</button>
  )
}

export default Button