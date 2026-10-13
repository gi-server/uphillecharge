"use client";

import { motion } from "framer-motion";
import LocationCard from "./LocationCard";
import { locationData } from "@/data/locationData";

const Locations = () => {
  return (
    <section id="locations" className="bg-[#020625] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#95FF00] font-semibold uppercase tracking-widest mb-4">
            Our Locations
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Charging Stations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationData.map((location) => (
            <LocationCard
              key={location.id}
              id={location.id}
              image={location.image}
              city={location.city}
              place={location.place}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

