"use client";

import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/herobg.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Blur Overlay */}
      <div
        className="
          absolute
          left-[-150px]
          top-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          bg-[#020625]
          opacity-80
          blur-[180px]
          rounded-full
          z-[1]
        "
      />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020625] z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-[#95FF00] text-2xl font-semibold mb-5">
            Charging The Future. Powering a
          </p>

          <h1 className="text-white font-bold leading-tight text-5xl md:text-7xl">
            <span className="text-[#95FF00]">Greener</span> Tomorrow
          </h1>

          <p className="text-white text-xl md:text-3xl mt-8 leading-relaxed">
            Fast, Reliable, Sustainable EV Chargers
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <button
              onClick={() =>
                document
                  .getElementById("locations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#95FF00] text-black px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition duration-300"
            >
              Find a Charger
              <IoLocationOutline />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-[#95FF00] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#95FF00] hover:text-black transition duration-300"
            >
              Contact Us
              <HiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

