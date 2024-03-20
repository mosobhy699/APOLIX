import React, { useEffect, useState } from 'react'
import bo from "../assets/BO.png"
import img2 from "../assets/Van-Oord-V2.png"
import img3 from "../assets/syngenta.png"
import img4 from "../assets/Port-of-Antwerp.png"
import img5 from "../assets/monotype-vector-logo-2022.png"
import img6 from "../assets/layer1.png"
import img7 from "../assets/gemeente-rotterdam.png"
import img8 from "../assets/Flow-Traders.png"
import { motion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa";
import Button from './Button';
import "./dot.css"
const SectionOne = () => {

    const [currentIndex, setcurrentIndex] = useState(0)
    const next = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
    }


    const images = [bo, img2, img3, img4, img5, img6, img7, img8]

    const target = {
        hidden: {
            y: "30%",
            opacity: 0
        },
        show: {
            y: "-140px",
            opacity: 1,
            transition: {
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.5,
            }
        }
    }
    const itembottom = {
        hidden: { y: "30%", opacity: 0 },
        show: {
            y: "0", opacity: 1, transition: {
                duration: 1,

            }
        }
    }
    // const activeDot = (i) => {
    //     setcurrentIndex(i)
    // }

    useEffect(() => {
        setTimeout(() => {
            next()
        }, 1500);
    }, [currentIndex])
    return (
        <motion.div variants={target} initial="hidden" animate="show" className='absolute lg:px-24 md:px-[74px] sm:px-11 px-3 top-2/4 -translate-y-40  2xl:top-96 overflow-hidden '>
            <motion.p variants={itembottom} className='text-3xl 2xl:text-9xl xl:text-6xl lg:text-7xl md:text-6xl sm:text-5xl text-[#f1f6f9] font-medium w-full lg:w-4/5 tracking-normal mb-9 '>Take your processes to the next dimension</motion.p>

            <motion.div variants={itembottom} className='flex gap-16 text-[#f1f6f9]  mb-9 '>
                <a href="#section2" className='sm:flex justify-center items-center w-[58px] h-[58px] p-4 rounded-2xl border-2 border-solid border-[#f1f6f9] cursor-pointer hidden ' ><FaArrowDown className='text-9xl' /></a>
                <p className=' lg:text-2xl  text-xl lg:w-3/12 tracking-wide w-full'>Apolix optimises your processes through data, focusing on simplicity and value creation.</p>
            </motion.div>



            <motion.div variants={itembottom}>
                <div className='flex flex-col sm:pl-[125px] sm:flex-row sm:items-center sm:justify-between gap-6'>

                    <div className='flex flex-col  gap-4 flex-grow w-48 order-1 sm:order-none'>

                        <p className='text-[#f1f6f9] text-xs text-nowrap '>THESE ORGANISATIONS WENT TO THE MOON WITH US</p>

                        <motion.div className='container flex relative w-6/12 overflow-hidden z-20'>
                            <motion.div
                                className='flex relative'

                                animate={{
                                    x: ["0", "-200px", "-400px", "-600px", "-800px", "-1000px", "-1200px", "-1400px", "-1600px", "-1800px", "-2000px", "-2200px", "-2400px", "-2600px"]
                                }}
                                transition={{
                                    duration: 19.1,
                                    type: "keyframes",
                                    times: [0, 0.2, 0.4, 0.6, , 0.8, 1],
                                    repeat: Infinity
                                }}
                            >
                                <motion.div className='image-container flex gap-12 ' >
                                    {images.map((image, index) => {

                                        return (
                                            <div
                                                key={index}
                                                className='w-36'
                                            >
                                                <img src={image} alt="logos" className='w-full' />
                                            </div>
                                        )
                                    })}
                                </motion.div>
                                <div className='image-container flex gap-12 ' >
                                    {images.map((image, index) => {

                                        return (
                                            <div
                                                key={index}
                                                className='w-36'

                                            >
                                                <img src={image} alt="logos" className='w-full' />
                                            </div>
                                        )
                                    })}
                                </div>

                            </motion.div>
                        </motion.div>

                    </div>

                    <Button title="Get on board" />
                </div>
                <div className='flex gap-6 sm:translate-x-[20%] mt-5'>
                    {images.map((_, index) => {

                        return (
                            <span
                                key={index}
                                className={(index == currentIndex) ? "dot active" : "dot"}
                            // onClick={() => setcurrentIndex(index)}
                            >
                            </span>

                        )
                    })}
                </div>

            </motion.div>
        </motion.div >
    )
}

export default SectionOne
// style={!isActive ? { height: "10px", width: "20px", borderRadius: "33px", backgroundColor: "aliceblue", transition: 1 } : { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#e4e8eba2" }