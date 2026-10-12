import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function InstructionsHeader() {
  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-[#0A0D26]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#95FF00] rounded-xl p-1"
          aria-label="Uphill Echarge Home"
        >
          <img
            src="/logo.png"
            alt="Uphill Echarge logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-tight">
              Uphill Echarge
            </span>
            <span className="text-xs text-[#95FF00] font-medium tracking-wide">
              Charging Guide
            </span>
          </div>
        </Link>

        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white/90 bg-white/5 border border-white/15 hover:border-[#95FF00]/60 hover:text-[#95FF00] hover:bg-[#95FF00]/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#95FF00]"
        >
          <HiArrowLeft className="text-base" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>
    </header>
  );
}

