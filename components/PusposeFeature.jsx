"use client";

import { motion } from "framer-motion";

const PurposeFeature = ({ Icon, title, desc, right = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        flex items-start gap-4 md:gap-5
        w-full
        max-w-full xl:max-w-[320px] 2xl:max-w-[380px]
        mx-auto
        ${right ? "xl:flex-row-reverse xl:text-right" : ""}
      `}
    >
      {/* Icon */}
      <div
        className="
          w-14 h-14
          sm:w-16 sm:h-16
          md:w-20 md:h-20
          rounded-full
          border-2 border-white/20
          bg-white/[0.03]
          backdrop-blur-sm
          flex items-center justify-center
          shrink-0
        "
      >
        <Icon size={24} className="text-[#95FF00] md:text-[30px]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className="
            text-white
            text-base sm:text-lg md:text-xl
            font-semibold
            mb-2 md:mb-3
          "
        >
          {title}
        </h3>

        <p
          className="
            text-white/60
            text-sm sm:text-base
            leading-relaxed
          "
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default PurposeFeature;

