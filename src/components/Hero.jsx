import React from "react";
import { CalendarCheck } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-sky-100 py-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight">
            Brighten Your Smile <br /> with Expert Dental Care
          </h1>

          <p className="text-gray-700 text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
            repellendus labore quas odio ad eligendi modi sint obcaecati harum.
          </p>

          <a
            href="#appointment"
            className="inline-flex items-center bg-sky-600 text-white px-6 py-3 sm:px-7 sm:py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium cursor-pointer shadow-md hover:shadow-lg"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Appointment
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center relative">
          <div className="absolute -z-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl top-10 right-10"></div>
          <img
            src={hero}
            alt="Dental Clinic"
            className="w-80 lg:w-[430px] rounded-3xl animate-float drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
