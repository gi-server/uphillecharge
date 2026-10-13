"use client";

import { motion } from "framer-motion";
import Stats from "./Stats";

const About = () => {
  return (
    <section id="about" className="bg-[#020625] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#95FF00] font-semibold mb-6">
            About Uphill Echarge
          </p>

          <h2 className="text-white font-bold text-4xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            Building the Future of
            <br />
            Smart <span className="text-[#95FF00]">EV</span> Charging
            Infrastructure
          </h2>

          <p className="text-white/50 max-w-3xl mx-auto mt-8 leading-relaxed">
            Our mission is to deliver a seamless, reliable, and intelligent
            charging experience. We leverage advanced technology and sustainable
            energy to power a cleaner tomorrow.
          </p>
        </motion.div>

        <Stats />
      </div>
    </section>
  );
};

export default About;

