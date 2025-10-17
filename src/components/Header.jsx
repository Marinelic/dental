import React, { useState } from 'react'
import { PhoneCall} from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { RiToothFill } from "react-icons/ri";

const navList = [
    { name: '#home', label: 'Home'},
    { name: '#services', label: 'Services'},
    { name: '#about', label: 'About'},
    { name: '#footer', label: 'Contact'}
];

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header href="#book" className='scroll-mt-20 bg-white shadow-md sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 lg:px-8'>
                <div className='flex items-center space-x-2'>
                    <RiToothFill className='w-8 h-8 text-sky-800'/>
                    <span className='text-xl font-bold text-sky-800'>
                       BlueSky Dental 
                    </span>
                </div>

                <nav className="hidden md:flex space-x-5 text-gray-700 font-medium">
                    {navList.map((link, index) => (
                <a
                    href={link.name}
                    key={link.name}
                    onClick={(e) => {
                    e.preventDefault(); 
                    const section = document.querySelector(link.name);
                    if (section) {
                        const yOffset = -80;
                        const y =
                        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    setIsMenuOpen(false);
                    }}
                    className="relative text-sky-800 font-medium text-lg tracking-wide 
                            transition-all duration-300 hover:text-sky-600
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                            after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {link.label}
                </a>
            ))}
                </nav>


                <div className='hidden md:flex items-center space-x-2'>
                    <PhoneCall className='text-sky-800'/>
                    <a href='#appointment' className='bg-sky-600 text-white px-4 py-2 rounded-xl hover:sky-700 transition text-sm cursor-pointer'>
                        Book Appointment
                    </a>
                </div>

                <div className="md:hidden relative w-8 h-8 flex items-center justify-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-8 h-8 flex flex-col justify-center items-center group"
                    >
                        <span
                        className={`block w-6 h-[2px] bg-sky-800 rounded-sm transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                        }`}
                        ></span>
                        <span
                        className={`block w-6 h-[2px] bg-sky-800 rounded-sm my-[4px] transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                        ></span>
                        <span
                        className={`block w-6 h-[2px] bg-sky-800 rounded-sm transition-all duration-300 ease-in-out ${
                            isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                        }`}
                        ></span>
                    </button>
                </div>
            </div>
            
            {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-blue-100/50 text-sky-800 z-50 shadow-md md:hidden rounded-b-lg backdrop-blur-md">
                        <div className="flex flex-col items-center py-4">
                        {navList.map((link, index) => (
                            <a
                            href={link.name}
                            key={link.name}
                            onClick={(e) => {
                                e.preventDefault(); // stop default jump
                                const section = document.querySelector(link.name);
                                if (section) {
                                // smooth scroll with offset for sticky header
                                const yOffset = -80;
                                const y =
                                    section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                                }
                                setIsMenuOpen(false); // close menu
                            }}
                            className="relative text-sky-800 font-medium text-lg tracking-wide
                                        transition-all duration-300 hover:text-sky-600
                                        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                                        after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full mb-3"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            >
                            {link.label}
                            </a>
                        ))}
                        </div>
                    </div>
                )}
        </header>
      );
    }

export default Header
