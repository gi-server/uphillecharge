"use client";

import { useState } from "react";
import styles from "@/app/instructions/instructions.module.css";
import { HiArrowSmDown, HiOutlineExternalLink } from "react-icons/hi";
import { FiAlertCircle, FiImage } from "react-icons/fi";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function InstructionStep({ step, isPriority = false }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      id={`step-${step.stepNumber}`}
      className={`bg-[#0A0D26]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 ${styles.stepCard} ${styles.scrollTarget}`}
      aria-labelledby={`step-title-${step.stepNumber}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Step Text & Content Column (7 cols on desktop) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {/* Step Number + Title */}
          <div className="flex items-start gap-3.5 sm:gap-4">
            <span
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#95FF00] text-black font-extrabold text-base sm:text-lg flex items-center justify-center shrink-0 ${styles.badgeGlow}`}
              aria-hidden="true"
            >
              {step.stepNumber}
            </span>
            <div>
              <span className="text-xs font-semibold text-[#95FF00] uppercase tracking-wider block">
                Step 0{step.stepNumber}
              </span>
              <h2
                id={`step-title-${step.stepNumber}`}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mt-0.5 leading-snug"
              >
                {step.title}
              </h2>
            </div>
          </div>

          {/* Step Narrative Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal">
            {step.description}
          </p>

          {/* Optional App Store Badges for Step 1 */}
          {step.appLinks && step.appLinks.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2.5">
              {step.appLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold text-white hover:border-[#95FF00] hover:text-[#95FF00] hover:bg-[#95FF00]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#95FF00]"
                >
                  {link.store === "google" && (
                    <FaGooglePlay className="text-sm text-[#95FF00]" aria-hidden="true" />
                  )}
                  {link.store === "apple" && (
                    <FaApple className="text-base text-white" aria-hidden="true" />
                  )}
                  <span>{link.name}</span>
                  <HiOutlineExternalLink className="text-xs text-white/50" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}

          {/* Quick Troubleshooting Jump Link */}
          {step.troubleshooting && (
            <div className="mt-5 pt-4 border-t border-white/10">
              <a
                href={`#${step.troubleshooting.id}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#95FF00] hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#95FF00] rounded-md py-0.5 px-1"
                aria-label={`Troubleshooting help for step ${step.stepNumber}: ${step.troubleshooting.title}`}
              >
                <FiAlertCircle className="text-sm shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">
                  {step.troubleshootingLinkText || "Having issues? See quick fix"}
                </span>
                <HiArrowSmDown className="text-base group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        {/* Media / Animation Column (5 cols on desktop) */}
        <div className="md:col-span-5 w-full flex justify-center">
          <div className={styles.mediaFrame}>
            {!imageError ? (
              <img
                src={step.animation}
                alt={step.alt}
                width={400}
                height={300}
                loading={isPriority ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-contain p-2"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Graceful Missing Media Fallback (Prevents broken-image icon) */
              <div className={styles.fallbackCard}>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#95FF00] mb-2">
                  <FiImage className="text-xl" aria-hidden="true" />
                </div>
                <p className="text-white text-xs font-semibold">
                  Instructional Visual
                </p>
                <p className="text-white/50 text-[11px] mt-0.5">
                  Step 0{step.stepNumber}: {step.title}
                </p>
                <span className="text-[10px] text-[#95FF00]/80 mt-2 font-mono bg-white/5 px-2 py-0.5 rounded">
                  {step.animation}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

