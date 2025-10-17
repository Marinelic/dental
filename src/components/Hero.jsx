import React, { useEffect, useRef, useState } from "react";
import { CalendarCheck } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-sky-100 py-20 flex items-center justify-center"
    >
      <div
        className={`container mx-auto px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Text Section */}
        <div className="max-w-lg xl:max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight">
            Brighten Your Smile <br /> with Expert Dental Care
          </h1>

          <p className="text-gray-700 text-base lg:text-lg">
            We provide comprehensive dental services to keep your smile healthy and beautiful. From routine check-ups to advanced treatments, our experienced team is here to care for you.
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
        <div
          className={`flex justify-center relative transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -z-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl top-10 right-10"></div>
          <img
            src={hero}
            alt="Dental Clinic"
            className="w-72 sm:w-80 lg:w-[400px] xl:w-[430px] rounded-3xl animate-float drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
