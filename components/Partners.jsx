"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const Partners = () => {
  const partners = [
    {
      name: "Reach EV",
      logo: "/reach.png",
      website: "https://reachev.in/",
    },
    {
      name: "Exicom",
      logo: "/exicom.png",
      website: "https://www.exicom.com/",
    },
    {
      name: "PlugEasy",
      logo: "/plugeasy.png",
      website: "https://plugeasy.in/",
    },
  ];

  return (
    <section id="partners" className="py-24 bg-[#020625]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#95FF00] uppercase tracking-widest font-semibold mb-4">
            Trusted Partners
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Powering EV Innovation Together
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            We collaborate with industry-leading charging infrastructure
            providers and technology partners to deliver reliable EV charging
            solutions.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-[#0A0D26]
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                hover:border-[#95FF00]/50
                transition-all
                duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain mb-8"
              />

              <h3 className="text-white text-2xl font-semibold mb-3">
                {partner.name}
              </h3>

              <p className="text-white/60 mb-6">
                Strategic EV charging infrastructure partner.
              </p>

              <div className="flex items-center gap-2 text-[#95FF00] font-medium">
                Visit Website
                <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

