import React from 'react'
import { assets, infoList  } from '../assets/assets';
import Image from "next/image"
import tailwindConfig from '@/tailwind.config';




const About = () => {
  return (
    <div>
        <h1 className='text-center text-6xl font-sans'>About Me</h1>

        <div className='flex flex-col lg:flex-row items-center gap-20 my-20 mx-20'>
            <div className='w-64 sm:w-80 rounded-3xl '>
                <Image src = {assets.user_image} alt = " user-image" />
            </div>
            <div className = "flex-1">
                <p>
                    I'm a fourth-year student on a journey to create beautiful, 
                    high-performance web experiences. My passion for technology 
                    started with a simple "Hello, World!" and has grown into a deep 
                    love for building elegant solutions to complex problems.

                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                    {infoList.map(({icon, title, description}, index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover'
                        key = {index}>
                            <Image src = {icon} alt = 'image-icon' />
                            {<h3>{title}</h3>}
                           { <p>{description}</p>}
                        </li>
                    )
                    )}

                </ul>
            </div>
        </div>
    </div>
  )
}

export default About;
