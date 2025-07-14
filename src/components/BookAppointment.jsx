import { svg } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';

const BookAppointment = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [formData, setFormData] = useState ({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: 'General Checkup'
    });  

    const services = [
        'General Checkup',
        'Dental Filling',
        'Teeth Whitening',
        'Root Canal Treatment',
        'Orthodontics'
    ];

    const avalibleTimes = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM'
    ];

    const handleTabChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };

    const nextTab = () => setActiveTab(prev => prev + 1);
    const prevTab = () => setActiveTab(prev => prev - 1);
  
        return (
            <div id='book' className='scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 py-12 px-4'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-12'>
                        <h1 className='text-4xl font-bold text-sky-900 mb-3'>
                            Book Your Smile
                        </h1>

                        <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa ab ad ratione doloribus natus.</p>
                    </div>
{/* 
                    <div>
                        <div>
                            <div>

                            </div>

                            <div className=''
                                 style={{width: `${(activeTab - 1) * 50}%`}}>
                            </div>

                            <div>
                                {activeTab > tab ? (
                                    <svg className=''>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M5 1314 4L19 7'
                                        ></path>
                                    </svg>
                                ) : (
                                    tab
                                )}
                            </div>

                            <span>

                            </span>
                        </div>
                    </div> */}
                </div>
            </div>
    )
}

export default BookAppointment
