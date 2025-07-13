import React from 'react'
import aboutImg from '../assets/about.png'
import { FaUserMd } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' className='py-20 scroll-mt-20 bg-sky-100'>
      <div className='container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src={aboutImg} alt="About" className='w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-md' />
        </div>

        <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>
          <div className='flex items-center justify-center lg:justify-start space-x-2'>
            <FaUserMd className='text-sky-600 w-7 h-7'/>

            <h2 className='text-3xl font-bold text-sky-900'>
              About Our Clinic
            </h2>
          </div>

          <p className='text-gray-800 text-lg leading-relaxed'>
            Welcome to our clinic! We are dedicated to providing the highest quality healthcare services to our patients. Our team of experienced professionals is committed to ensuring your health and well-being. From routine check-ups to specialized treatments, we are here to support you every step of the way.
          </p>

          <p className='text-gray-800 text-lg leading-relaxed'>
            Our clinic is equipped with state-of-the-art facilities and the latest medical technology. We believe in a patient-centered approach, where your comfort and care are our top priorities. Whether you need a consultation, diagnosis, or treatment, you can trust us to deliver compassionate and effective healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About
