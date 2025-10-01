'use client'
import React from 'react'
import { skilldata } from '../assets/assets';
import Image from "next/image"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='text-center my-10 md:my-20 px-4'>
            <h1 className='text-4xl md:text-5xl font-bold mb-8 md:mb-10'>About Me</h1>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 mx-auto max-w-4xl'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='w-48 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105'
                >
                    <Image 
                        src="/pp.jpg" 
                        alt="user-image"
                        width={300}
                        height={400} 
                        className="object-cover w-full h-full"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left max-w-lg"
                >
                    <p className="text-base md:text-lg text-gray-70 leading-relaxed">
                        I'm a fourth-year student on a journey to create beautiful,
                        high-performance web experiences. My passion for technology
                        started with a simple "Hello, World!" and has grown into a deep
                        love for building elegant solutions to complex problems.
                    </p>
                </motion.div>
            </div>

            <div className="my-16 md:my-20 px-6 sm:px-8 lg:px-30">
                <h2 className='text-3xl md:text-4xl font-bold mb-8 md:mb-10'>My Skills</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
                    {skilldata.map(({ icon, title }, index) => (
                        <motion.div 
                            key={index}
                            className='flex items-center gap-3 p-3 rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image className='w-8 h-8' src={icon} alt={title} />
                            <h3 className='text-sm md:text-base font-semibold text-grey-70'>{title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;
