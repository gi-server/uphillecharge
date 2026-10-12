import { HiLightningBolt } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";

export default function InstructionsHero() {
  return (
    <section className="relative pt-6 pb-8 sm:pt-10 sm:pb-12 px-4 sm:px-6">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#95FF00]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#95FF00]/15 border border-[#95FF00]/30 text-[#95FF00] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
          <HiLightningBolt className="text-sm sm:text-base animate-pulse" aria-hidden="true" />
          <span>How to Charge</span>
        </div>

        {/* Primary Page Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          CHARGE <span className="text-[#95FF00]">YOUR EV</span>
        </h1>

        {/* Subtitle matching reference */}
        <p className="mt-3 text-base sm:text-xl font-medium text-white/80">
          Your step-by-step guide
        </p>

        {/* Concise Description */}
        <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/60 leading-relaxed">
          Follow these 7 simple steps to start charging your electric vehicle quickly, safely, and seamlessly at any Uphill Echarge station.
        </p>

        {/* Quick Nav Anchors */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#step-1"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#95FF00] text-black font-semibold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(149,255,0,0.25)] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Start Step 1</span>
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="#troubleshooting"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-white/90 font-medium text-xs sm:text-sm hover:border-[#95FF00]/50 hover:text-[#95FF00] hover:bg-[#95FF00]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#95FF00]"
          >
            <FiHelpCircle className="text-base" aria-hidden="true" />
            <span>Troubleshooting</span>
          </a>
        </div>
      </div>
    </section>
  );
}

