import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkedAlt, FaPhone, FaRegClock } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaTooth } from 'react-icons/fa';
import { useScrollReveal } from "../hooks/useScrollReveal";

const socialLinks = [
    {icon: <FaInstagram className="text-xl"/>, href: '#'},
    {icon: <FaFacebook className="text-xl"/>, href: '#'},
    {icon: <FaTwitter className="text-xl"/>, href: '#'},
];

const clinicHours = [
    {day: 'Monday - Friday', time: ' - 9 AM - 8 PM'},
    {day: 'Saturday', time: ' - 4 AM - 9 PM'},
    {day: 'Sunday', time: ' - closed'}
];

const contactinfo  = [
  { icon: <FaPhone className='mr-4 text-white/70' />, text: <a href='#' className='hover:text-sky-300 transition-colors'>+1 234 567 890</a> },
  { icon: <MdOutlineMail className='mr-4 text-white/70' />, text: <a href='#' className='hover:text-sky-300 transition-colors'>info@smile.com</a> },
  { icon: <FaMapMarkedAlt className='mr-4 text-white/70' />, text: <span className='hover:text-sky-300 transition-colors'>123 Dental Avenue, City, State</span> }
];

const Footer = () => {
  const [ref1, visible1] = useScrollReveal();
  const [ref2, visible2] = useScrollReveal();
  const [ref3, visible3] = useScrollReveal();

  return (
    <footer className='bg-gradient-to-b from-blue-700 to-blue-900 text-white pt-16 pb-12 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>

          {/* Logo + Social */}
          <div
            ref={ref1}
            className={`flex flex-col items-center mb-14 transition-all duration-1000 ${
              visible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='flex items-center mb-6'>
              <div className='bg-white/20 p-3 rounded-full mr-4'>
                <FaTooth className='text-2xl text-sky-300'/>
              </div>

              <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200'>
                BrightSmile
              </h2>
            </div>

            <div className='flex space-x-6 mb-8'>
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1'>
                        {link.icon}
                    </a>
                ))}
            </div>
          </div>

          {/* Columns */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
            {/* Clinic Hours */}
            <div
              ref={ref2}
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-all duration-1000 ${
                visible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className='text-xl font-semibold mb-5 flex items-center'>
                <FaRegClock  className='mr-3 text-sky-300'/>
                  Clinic Hours
              </h3>

              <ul className='space-y-3'>
                {clinicHours.map((item, index) => (
                    <li key={index} className=''>
                        <span className='text-white/80'>{item.day}</span>
                        <span>{item.time}</span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div
              ref={ref3}
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-all duration-1000 delay-200 ${
                visible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className='text-xl font-semibold mb-5 flex items-center'>
                <FaPhone className='mr-3 text-sky-300'/>
                Contact Us
              </h3>

              <ul className='space-y-4'>
                {contactinfo.map((item, index) => (
                  <li key={index} className='flex items-center'> 
                       {item.icon}
                       {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div
              ref={ref3}
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-all duration-1000 delay-400 ${
                visible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
                <h3 className='text-xl font-semibold mb-5 flex items-center'> 
                    Dental Tips Newsletter
                </h3>

                <p className='text-white/80 mb-5'>
                  Subscribe to receive oral health tips and special offers
                </p>

                <div className='flex'>
                  <input 
                      type='email'
                      placeholder='Your Email Address'
                      className='bg-white/10 border border-white/20 text-white px-5 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300 w-full placeholder:white/50'
                  />

                  <button className='bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors items-center'>
                    Subscribe
                  </button>
                </div>
            </div>
          </div>

          <div>
            <p className='text-center'>
              &copy; {new Date().getFullYear()} Smile Dental Clinic. All rights reserved
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
