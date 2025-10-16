import React from 'react';
import aboutImg from '../assets/about.png';
import { FaUserMd } from 'react-icons/fa';
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id='about'
      ref={ref}
      className='py-20 scroll-mt-20 bg-sky-100 relative overflow-hidden'
    >
      <div className={`container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Image */}
        <div className='flex justify-center lg:justify-start lg:w-1/2 relative'>
          {/* Background glow */}
          <div className='absolute -z-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl top-10 lg:top-0 right-0 animate-float-slow'></div>

          <img
            src={aboutImg}
            alt="About Our Clinic"
            className='w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-lg animate-float'
          />
        </div>

        {/* Text */}
        <div className='lg:w-1/2 space-y-6 text-center lg:text-left'>
          <div className='flex items-center justify-center lg:justify-start space-x-3'>
            <FaUserMd className='text-sky-600 w-7 h-7' />
            <h2 className='text-3xl sm:text-4xl font-bold text-sky-900'>
              About Our Clinic
            </h2>
          </div>

          <p className='text-gray-800 text-lg leading-relaxed'>
            At our dental clinic, your smile is our top priority. We combine modern technology with gentle, personalized care to ensure every visit is comfortable and effective. From routine check-ups to advanced treatments, our team is here to keep your smile healthy and bright.
          </p>

          <p className='text-gray-800 text-lg leading-relaxed'>
            Our clinic is designed for your comfort and safety, equipped with the latest dental tools and hygiene standards. We believe in building trust with our patients and delivering compassionate care that makes every visit a positive experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
