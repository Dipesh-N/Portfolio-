import { projectsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const Project = () => {
  return (
    <div className="min-h-screen py-12 pb-24">
        <h1 className='text-5xl font-bold text-center p-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>Projects</h1>
        <p className='text-xl text-center text-slate-600 pb-10 max-w-2xl mx-auto'>Here are the list of projects I have worked on</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 mx-4 md:mx-20 lg:mx-60">

                {projectsData.map(({ icon, description, title, techUsed }, index) => (
                    <div key={index} className='bg-white/80 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full'>
                        <h1 className='text-2xl font-bold mb-4 text-gray-800' >{title}</h1>
                        <Image src={icon} alt={title} width={800} height={600} className="w-3/4 mx-auto object-contain rounded-xl mb-6 pb-4 shadow-md" />
                        <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {techUsed.map((tech, index) =>
                            {
                                const colors = [
                                    'bg-blue-100 text-blue-700 border border-blue-200',
                                    'bg-green-100 text-green-700 border border-green-200',
                                    'bg-purple-100 text-purple-700 border border-purple-200',
                                    'bg-pink-100 text-pink-700 border border-pink-200',
                                    'bg-indigo-100 text-indigo-700 border border-indigo-200',
                                    'bg-yellow-100 text-yellow-700 border border-yellow-200',
                                    'bg-red-100 text-red-700 border border-red-200',
                                    'bg-teal-100 text-teal-700 border border-teal-200'
                                ];
                                const colorClass = colors[index % colors.length];
                                
                                return (
                                    <span key={index} className={`${colorClass} px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200`}>
                                        {tech}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                ))}

            </div>
    </div>
  )
}

export default Project
