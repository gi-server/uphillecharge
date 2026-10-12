import styles from "./instructions.module.css";
import { instructionSteps, instructionPageMeta } from "@/data/instructionData";
import InstructionsHeader from "@/components/instructions/InstructionsHeader";
import InstructionsHero from "@/components/instructions/InstructionsHero";
import InstructionStep from "@/components/instructions/InstructionStep";
import Troubleshooting from "@/components/instructions/Troubleshooting";

export const metadata = {
  title: instructionPageMeta.title,
  description: instructionPageMeta.description,
};

export default function InstructionsPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Dedicated Accessible Header with Logo and Back Link */}
      <InstructionsHeader />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        {/* Hero Banner matching reference screenshot */}
        <InstructionsHero />

        {/* 7 Numbered Step-by-Step Instructions */}
        <section
          aria-label="Step by step charging instructions"
          className="space-y-6 sm:space-y-8 mt-6"
        >
          {instructionSteps.map((step, index) => (
            <InstructionStep
              key={step.id}
              step={step}
              isPriority={index === 0}
            />
          ))}
        </section>

        {/* Dedicated Troubleshooting Guide */}
        <Troubleshooting steps={instructionSteps} />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        <p>© 2025 Uphill Echarge Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

