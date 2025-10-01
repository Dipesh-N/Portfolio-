"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { assets } from '../assets/assets';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%]'>
                <Image src={assets.header_bg_color} alt="" className='w-full' priority />
            </div>

            {/* Main Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 ml-5 mr-5 md:mr-20 mt-10 justify-between flex items-center z-30">
                <Link href="/">
                    <Image src={assets.logo} alt='logo image' className="w-28 cursor-pointer mr-10" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 rounded-full px-5 py-4 bg-white shadow-sm bg-opacity-80 backdrop-blur-sm">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Skills</Link></li>
                    <li><Link href="/work">Project</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                <div className="flex items-center gap-x-5 lg:gap-x-10">
                    <Image src={assets.moon_icon} alt="Theme toggle" className='w-6 cursor-pointer' />

                    <Link href="/contact" className='bg-white shadow-sm h-10 w-30 hidden lg:flex items-center gap-3 rounded-2xl pl-5 pr-2 bg-opacity-80 backdrop-blur-sm'>
                        Contact <Image src={assets.arrow_icon} className="w-2" alt="arrow" />
                    </Link>

                    <button onClick={() => setIsMenuOpen(true)} className='block md:hidden'>
                        <Image src={assets.menu_black} alt="Open menu" className='w-6' />
                    </button>
                </div>
            </nav>

            {/* --- Mobile Sidebar Section --- */}

            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

     
            <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50
                            transform transition-transform duration-300 ease-in-out md:hidden
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
        
                <div className='absolute right-6 top-6'>
                    <button onClick={() => setIsMenuOpen(false)}>
                        <Image src={assets.close_black} alt="Close menu" className='w-6 cursor-pointer' />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <ul className='flex flex-col items-center justify-center h-full gap-5 text-xl'>
                    <li onClick={handleLinkClick}><Link href="/">Home</Link></li>
                    <li onClick={handleLinkClick}><Link href="/about">About me</Link></li>
                    <li onClick={handleLinkClick}><Link href="/services">Services</Link></li>
                    <li onClick={handleLinkClick}><Link href="/work">Work</Link></li>
                    <li onClick={handleLinkClick}><Link href="/contact">Contact me</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;