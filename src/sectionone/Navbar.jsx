'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import style from "./bar.module.css"
import { FaChevronRight } from "react-icons/fa";

import { AnimatePresence, motion } from 'framer-motion'
import Logo from './components/Logo'
const Navbar = () => {


    const [isopen, setisopen] = useState(false)
    const handleBurger = () => {
        setisopen((perv) => !perv)
    }
    const target = {
        hidden: {
            y: "-100%"
        },
        show: {
            y: "0px",
            transition: {
                duration: .5,
                when: "beforeChildren",
                staggerChildren: 0.1,

            }
        }
    }
    const itemTop = {
        hidden: { y: "-100%" },
        show: { y: "0px" }
    }
    const itemLeft = {
        hidden: { x: "-100%" },
        show: {
            x: "0px", transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,

            }
        }
    }
    const itemleftchild = {
        hidden: { x: "-120%" },
        show: {
            x: "0px", transition: {
                duration: 0.3
            }
        }
    }
    const itemBottom = {
        hidden: { y: "100%" },
        show: {
            y: "0px", transition: {
                duration: 0.5
            }
        }
    }
    return (
        <>
            <nav className=' absolute flex justify-between  top-0 w-full py-9 lg:px-24 md:px-[74px] px-11  items-center' style={{ color: "#f1f6f9" }}>
                <Logo />
                <div className=' left-0 w-full z-50 lg:hidden md:left-3' onClick={handleBurger}>
                    <div className={style.burger} style={isopen ? { border: "2px solid white" } : {}}>
                        <h6 className={style.h1} style={isopen ? { rotate: "45deg", top: "34px" } : {}}></h6>
                        <h6 className={style.h2} style={isopen ? { rotate: "-45deg", top: "34px" } : {}}></h6>
                    </div>
                </div>
                <div className='lg:block hidden '>
                    <Nav />
                </div>
            </nav>
            <div>
                <AnimatePresence>

                    {isopen &&
                        <motion.div
                            variants={target}
                            initial="hidden"
                            animate={isopen ? "show" : ""}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.5 }}
                            className='fixed  top-0 w-full h-full bg-[#0b2545] flex flex-col justify-between lg:hidden overflow-hidden z-40'
                        >
                            <motion.div variants={itemTop} className='p-2 pt-12 md:p-5 md:pt-12' >
                                <Logo />
                            </motion.div>

                            <motion.div variants={itemLeft} className='list-none p-5 text-4xl text-[#f1f6f9] flex-grow w-fit'>

                                <motion.li variants={itemleftchild} className='flex gap-2 items-center cursor-pointer py-2 w-fit'><span className='hover:text-sky-600'>Process Mining</span> <span className='text-2xl text-[#f78da7]'><FaChevronRight /></span></motion.li>

                                <motion.li variants={itemleftchild} className='hover:text-sky-600 cursor-pointer py-2 w-fit'> Solutions</motion.li>

                                <motion.li variants={itemleftchild} className='flex gap-2 items-center cursor-pointer py-2 w-fit'><span className='hover:text-sky-600'>Career</span> <span className='text-2xl text-[#f78da7]' ><FaChevronRight /></span></motion.li>

                                <motion.li variants={itemleftchild} className=' flex gap-2 items-center cursor-pointer py-2 w-fit'> <span className='hover:text-sky-600'>Comapny</span> <span className='text-2xl text-[#f78da7]'><FaChevronRight /></span></motion.li>

                                <motion.li variants={itemleftchild} className=' flex gap-2 items-center cursor-pointer py-2 w-fit'> <span className='hover:text-sky-600'> Resorces</span> <span className='text-2xl text-[#f78da7]'><FaChevronRight /></span></motion.li>
                            </motion.div>
                            <motion.div variants={itemBottom} className='text-[#f1f6f9] p-5'>
                                <h4 className='text-lg'>GET IN TOUCH</h4>
                                <div className='text-2xl mb-5'>
                                    <h2 className='hover:text-sky-600 cursor-pointer '>welcome@apolix.global</h2>
                                    <span className='hover:text-sky-600 cursor-pointer'>+31 10 880 00 80</span>
                                </div>
                                <div className='flex flex-col  text-2xl hover:text-sky-600 cursor-pointer mb-4 ' >
                                    <span>Vasteland 78</span>
                                    <span>3011 BN Rotterdam</span>
                                    <span>The Netherlands</span>
                                </div>
                            </motion.div>

                        </motion.div>

                    }


                </AnimatePresence >
            </div >


        </>
    )
}

export default Navbar