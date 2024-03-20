import React from 'react'
import a from "../../assets/a.png"
import p from "../../assets/p.png"
import o from "../../assets/o.png"
import l from "../../assets/l.png"
import i from "../../assets/i.png"
import x from "../../assets/x.png"
import "./logo.css"

const Logo = () => {
  const logo = [a, p, o, l, i, x]

  return (
    <div className='flex  items-center  '>
      <a href='/' className='cursor-pointer  flex  items-center logo'>
        {logo.map((letter, index) => {
          return (
            <img src={letter} alt="L O G O" className="logoimg " key={index} />
          )

        })}
      </a>
    </div>
  )
}

export default Logo