import styles from "@/app/instructions/instructions.module.css";
import { supportContact } from "@/data/instructionData";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowSmUp } from "react-icons/hi";

export default function Troubleshooting({ steps = [] }) {
  return (
    <section id="troubleshooting" className={`mt-16 sm:mt-24 ${styles.scrollTarget}`}>
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm font-semibold text-[#95FF00] tracking-widest uppercase block mb-2">
          Help &amp; Support
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Troubleshooting
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-white/70 leading-relaxed">
          Quick help for the most common issues people face at each step.
        </p>
      </div>

      {/* Troubleshooting Cards List */}
      <div className="space-y-4 sm:space-y-5">
        {steps.map((step) => {
          const item = step.troubleshooting;
          if (!item) return null;

          return (
            <div
              key={item.id}
              id={item.id}
              className={`bg-[#0A0D26]/80 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-[#95FF00]/40 transition-all ${styles.scrollTarget}`}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Step Indicator Badge */}
                <span
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#95FF00] text-black font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  {step.stepNumber}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    {/* Back to Step link */}
                    <a
                      href={`#step-${step.stepNumber}`}
                      className="inline-flex items-center gap-1 text-xs text-[#95FF00] hover:underline font-medium"
                      aria-label={`Return to step ${step.stepNumber}`}
                    >
                      <span>Step {step.stepNumber}</span>
                      <HiArrowSmUp className="text-sm" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Charging Station Support Card */}
      <div className="mt-10 sm:mt-12 bg-gradient-to-br from-[#11142D] to-[#0A0D26] border border-[#95FF00]/30 rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(149,255,0,0.06)]">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Still having trouble at the station?
        </h3>
        <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg mx-auto">
          Our on-call technical support team is ready to assist you 24/7. Reach out directly via call or WhatsApp.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Call Support */}
          <a
            href={`tel:${supportContact.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#95FF00] text-black text-xs sm:text-sm font-semibold hover:opacity-90 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FiPhone className="text-base" aria-hidden="true" />
            <span>Call {supportContact.phone}</span>
          </a>

          {/* WhatsApp Support */}
          <a
            href={supportContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Email Support */}
          <a
            href={`mailto:${supportContact.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-[#95FF00] hover:text-[#95FF00] transition focus:outline-none focus:ring-2 focus:ring-[#95FF00]"
          >
            <FiMail className="text-base" aria-hidden="true" />
            <span>Email Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}

