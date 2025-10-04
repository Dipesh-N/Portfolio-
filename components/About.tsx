'use client'
import React from 'react'

import Image from "next/image"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='text-center  pb-12 px-4'>
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

    
        </div>
    )
}

export default About;
