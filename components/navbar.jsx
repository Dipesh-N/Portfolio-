"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { assets } from '../assets/assets';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFolder, FaRegEnvelope } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { GrUserWorker } from "react-icons/gr";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [typewriter] = useTypewriter({
        words: ["Developer", "Dipesh"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    })


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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between z-30 px-4 md:px-12 lg:px-15 py-3 transition-colors duration-300 shadow-md ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text mt-3'>{typewriter}<Cursor /></h1>

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

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
                <ul className="hidden md:flex items-center justify-around gap-10 rounded-3xl px-12 py-3 bg-slate-50 backdrop-blur-lg shadow-lg border border-white/30">
                    <li>
                        <Link
                            href="/"
                            className={`flex flex-col items-center text-sm text-slate-700 hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 
                            ${pathname === '/' ? 'transform -translate-y-3 text-purple-600 font-bold' : ''}`}
                        >
                            <IoHomeOutline className="text-2xl" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`flex flex-col items-center text-sm text-slate-700 hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 
                            ${pathname === '/about' ? 'transform -translate-y-3 text-purple-600 font-bold' : ''}`}
                        >
                            <IoInformationCircleOutline className="text-2xl" />
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            className={`flex flex-col items-center text-sm text-slate-700 hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 
                            ${pathname === '/skills' ? 'transform -translate-y-3 text-purple-600 font-bold' : ''}`}
                        >
                            <GrUserWorker className="text-2xl" />
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/project"
                            className={`flex flex-col items-center text-sm text-slate-700 hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 
                             ${pathname === '/project' ? 'transform -translate-y-3 text-purple-600 font-bold' : ''}`}
                        >
                            <FaRegFolder className="text-2xl" />
                            <span>Project</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`flex flex-col items-center text-sm text-slate-700 hover:text-purple-600 hover:-translate-y-2 transition-all duration-300 
                            ${pathname === '/contact' ? 'transform -translate-y-3 text-purple-600 font-bold' : ''}`}
                        >
                            <FaRegEnvelope className="text-2xl" />
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>

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