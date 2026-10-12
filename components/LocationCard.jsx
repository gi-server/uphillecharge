"use client";

import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

const LocationCard = ({ id, image, city, place }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      onClick={() => router.push(`/place/${id}`)}
      className="group relative overflow-hidden rounded-[28px] cursor-pointer"
    >
      <img
        src={image}
        alt={city}
        className="h-[350px] w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-[#95FF00] mb-2">
            <IoLocationOutline />
            <span className="text-white text-sm">{place}</span>
          </div>

          <h3 className="text-white text-2xl font-semibold">{city}</h3>
        </div>

        <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center group-hover:bg-[#95FF00] group-hover:text-black transition-all duration-300">
          <HiArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default LocationCard;

