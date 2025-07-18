import React from 'react'
import { FaSmileBeam, FaTooth, FaXRay } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';
import { motion } from 'framer-motion';


const services = [
    {
        icon: < FaTooth className='w-10 h-10 text-sky-500' />,
        title: 'Comprehensive Dental Care',
        description: 'Comprehensive dental care for all ages, including check-ups, cleanings, and preventive treatments.'
    },

    {
        icon: < GiToothbrush className='w-10 h-10 text-green-500' />,
        title: 'Professional Teeth Cleaning',
        description: 'Restorative dentistry services to repair and restore damaged teeth, including fillings, crowns, and bridges.'
    },

    {
        icon: < FaSmileBeam className='w-10 h-10 text-yellow-500' />,
        title: 'Cosmetic Dentistry',
        description: 'Expert cosmetic dentistry services to enhance your smile, including teeth whitening, veneers, and bonding.'
    },

    {
        icon: < FaXRay className='w-10 h-10 text-pink-500' />,
        title: 'Advanced Imaging',
        description: 'Advanced diagnostic imaging services, including digital X-rays and 3D imaging for accurate treatment planning.'
    }
];

const Services = () => {
  return (
    <section id='services' className='scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-100'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-sky-900 mb-4'>
                    Our Dental Services
                </h2>

                <p className='text-gray-700 max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione provident fugit.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-700'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}>

                        <div className='flex items-center justify-center mb-4'>
                            {service.icon}
                        </div>

                        <h3 className='text-lg font-semibold text-sky-800 mb-2 text-center'>
                            {service.title}
                        </h3>

                        <p className='text-gray-700 text-sm text-center'>
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
