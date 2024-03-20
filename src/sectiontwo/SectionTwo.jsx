import React, { useRef } from 'react'
import Button from '../sectionone/Button'
import rocket from '../assets/Group-1904.svg'
import man from '../assets/Explorer-644x750.jpg'
import shpere from '../assets/sphere-white.png'
import Box from './Box'
import { motion, useScroll, useTransform } from "framer-motion"

const SectionTwo = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const divtext = useTransform(scrollYProgress, [0, 1], ["5%", "30%"])
    const divbox = useTransform(scrollYProgress, [0, 1], ["5%", "45%"])
    const moony = useTransform(scrollYProgress, [0, 1], ["0", "-230px"])

    const manborderraduis = useTransform(scrollYProgress, [0, 1], ["0", "400px"])

    const manscale = useTransform(scrollYProgress, [0, 1], ["100%", "170%"])

    const manheight = useTransform(scrollYProgress, [0, 1], ["200px", "400px"])


    return (
        <div className=' p-14 lg:px-24 xl:px-44 2xl:px-64 py-14 lg:translate-x-28 w-full h-full xl:translate-y-0 lg:-translate-y-11 md:-translate-y-20 max-sm:-translate-y-24 sm:-translate-y-24' ref={ref}>
            <motion.div className='flex flex-col items-center gap-24 lg:gap-52 lg:flex-row ' >

                <motion.div className='relative flex-grow '>
                    <motion.div className='absolute -z-30  sm:w-[300px] top-60 left-14' style={{ y: moony }} >
                        <img src={shpere} alt="moon" />
                    </motion.div>
                    <motion.div className='absolute -z-10 sm:w-[300px] top-60 -left-24 ' style={{ scale: manscale }}>
                        <motion.img src={man} alt="manonland" style={{ borderRadius: manborderraduis, height: manheight }} />
                    </motion.div>
                    <motion.div
                        style={{ y: divbox }}

                        initial={{ x: "100px" }}
                        whileInView={{
                            x: "0px", transition: {
                                duration: 0.8,
                            }
                        }}
                        className='flex flex-col gap-3 justify-center relative sm:left-32'>
                        <Box customer='CUSTOMERS GIVE US AN' num='8.8' rank='OUT OF 10' />
                        <Box customer='MORE THAN' num='€ 12 mil.' rank='VALUE REALISED' />
                        <Box customer='MORE THAN' num='110' rank='PROCESS IMPLEMENTATIONS' />
                    </motion.div>

                </motion.div>
                <motion.div
                    style={{ y: divtext }}

                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{
                        y: "130px", opacity: 1, transition: {
                            duration: 1,
                            delay: .5
                        }
                    }}
                    className='relative sm:mr-12 '>

                    <button className='bg-[#0b2545] text-[#f1f6f9] px-4 py-1 rounded-full mb-8 '>About Us</button>
                    <h1 className='  text-3xl sm:text-5xl font-semibold text-[#0b2545] mb-8'> We reveal and fix invisible process
                        <span className='flex items-center gap-3 w-fit'> <p> inefficiencies</p>  <img src={rocket} alt="" className='w-12 h-12' />
                        </span>
                    </h1>
                    <p className='mb-8 text-[#0b2545] text-lg sm:text-2xl font-light'>Organisations run their processes through hundreds of IT-systems.<br /> This leaves space for many inefficiencies. Inefficiencies that hurt your business.  Through process mining we identify and fix those inefficiencies. Apolix is your one-stop shop for process improvement.</p>
                    <div className='flex gap-3'>
                        <button className='rounded-xl text-[#f1f6f9] bg-blue-700 text-nowrap py-6 px-9 hover:scale-105 transition hover:bg-[#f1f6f9] text-xl hover:text-[#0f172a] w-fit'>More About Us</button>

                        <Button title='Career' />

                    </div>

                </motion.div>
            </motion.div>
        </div >
    )
}

export default SectionTwo