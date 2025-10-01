import React from 'react';
import { assets } from '../assets/assets';
import Image from "next/image";

const Header = () => {
  return (
    
    <section className='py-20 md:py-28 px-4 flex flex-col items-center text-center gap-6'>
      
    
      <div className='mb-2'>
        <Image 
          src={assets.profile_img} 
          alt="profile picture" 
          className="rounded-full w-32 md:w-36 h-32 md:h-36 object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className='flex items-center gap-2 text-xl md:text-2xl font-medium'>
        Hello, I am Dipesh Nihure 
        <Image  
          src={assets.hand_icon} 
          alt="Waving hand emoji" 
          className='w-6 animate-wave' // Animation class added here
        />
      </h3>

      <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-transparent bg-clip-text'>
         Developer
      </h1>

      <p className='max-w-2xl text-lg leading-relaxed'>
        I am a passionate developer and a dedicated student, currently exploring the latest web technologies to build beautiful and functional applications.
      </p>

    </section>
  )
}

export default Header;