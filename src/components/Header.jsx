import React, { useState } from 'react'
import { Smile, PhoneCall} from 'lucide-react';
import { Menu, X } from 'lucide-react';

const navList = [
    { name: '#home', label: 'Home'},
    { name: '#services', label: 'Services'},
    { name: '#about', label: 'About'},
    /* { name: '#tips', label: 'Tips'}, */
    { name: '#book', label: 'Book Appointment'},
    { name: '#testimonials', label: 'Testimonials'},
];

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='scroll-mt-20 bg-white shadow-md sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 lg:px-8'>
                <div className='flex items-center space-x-2'>
                    <Smile className='w-8 h-8 text-sky-800'/>
                    <span className='text-xl font-bold text-sky-800'>Smile Dental Clinic</span>
                </div>

                <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
                   {navList.map((link) => (
                    <a 
                        href={link.href}
                        key={link.href}
                        className="hover:text-sky-800 transition cursor-pointer"
                    >
                        {link.label}
                    </a>
                   ))} 
                </nav>

                <div className='hidden md:flex items-center space-x-2'>
                    <PhoneCall className='text-sky-800'/>
                    <a href="#" className='bg-sky-600 text-white px-4 py-2 rounded-xl hover:sky-700 transition text-sm'>
                        Book Appointment
                    </a>
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setIsMenuOpen (!isMenuOpen)}>
                            {isMenuOpen ? <X className='text-gray-700' /> : <Menu className ='text-gray-700' />}
                    </button>
                </div>
            </div>
            
            {
                isMenuOpen && (
                    <div className='md:hidden mg-white border-t border-gray-200 shadow-md px-4 space-y-3'>
                        {navList.map((link) => (
                            <a 
                                href={link.href}
                                key={link.href}
                                className='block text-sky-800 transition text-center cursor-pointer hover:text-sky-600'
                                onClick={() => setIsMenuOpen(false)}>
                                
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
        </header>
      );
    }

export default Header
