'use client';
import React, { use } from 'react';
import { assets } from '../assets/assets';
import Image from "next/image";
import { useTypewriter } from 'react-simple-typewriter';

const Header = () => {

  const [typewriter] = useTypewriter({
    words: [""],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  })

  return (

    <section className='min-h-[85vh] pb-16 px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-center gap-12'>
      <div className='w-full md:w-3/5 flex flex-col gap-4 text-center md:text-left'>

        <h1 className='flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-4xl md:text-6xl font-bold'>
          <span className="text-slate-800">Hey, I am </span>

          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Dipesh Nihure</span>
          <Image src={assets.hand_icon} alt="hand icon" className='w-12 h-12 md:w-16 md:h-16' />
        </h1>

        {/* --- FIXED GRADIENT --- */}
        <h2 className='text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-500 to-lime-400 text-transparent bg-clip-text'>
          {typewriter}
        </h2>

      </div>

      {/* --- RIGHT COLUMN (Profile Image) --- */}
      <div className='w-full md:w-2/5 flex justify-center md:justify-end'>
        <Image
          src={assets.profile_img}
          alt="profile picture"
          // Removed the invalid 'mt-50' class
          className="rounded-full w-48 md:w-64 h-48 md:h-64 object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

    </section>
  )
}

export default Header;