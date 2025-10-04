'use client'

import { skilldata } from '../assets/assets';
import Image from "next/image"
import { motion } from 'framer-motion';
import React from 'react'

export default function Skills() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    
    <section id="skills" className="my-16 md:my-24 px-6 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto"> 
        
        <h2 className='text-center text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          My Skills
        </h2>
        <p className='text-center text-lg text-gray-600 mb-12 md:mb-16'>
          Technologies, tools and languages I work with
        </p>

        <motion.div 
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {skilldata.map(({ icon, title }, index) => (
                <motion.div 
                    key={index}
                    className='flex items-center gap-4 p-4 rounded-2xl shadow-sm cursor-pointer 
                                bg-slate-50 border border-transparent 
                                transition-all duration-300 
                                hover:border-blue-500 hover:shadow-lg hover:bg-white hover:-translate-y-1'
                    variants={itemVariants} 
                >
                    <Image className='w-8 h-8' src={icon} alt={title} />
                
                    <h3 className='text-sm md:text-base font-semibold text-gray-700'>{title}</h3>
                </motion.div>
            ))}
        </motion.div>
      </div> 
    </section>
  )
}