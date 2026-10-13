"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Locations", href: "#locations" },
  { name: "How to Charge", href: "/instructions" },
  { name: "Partners", href: "#partners" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="bg-[#0A0D26]/80 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="w-10" />
              <h2 className="text-white text-xl font-bold">Uphill Echarge</h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-[#95FF00] transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden mt-3 bg-[#0A0D26] border border-white/10 rounded-3xl p-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-[#95FF00] transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      {showContactOptions && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
          <div className="bg-[#11142D] border border-white/10 rounded-3xl p-8 w-full max-w-md">
            <h2 className="text-white text-2xl font-bold text-center mb-4">
              Contact Us
            </h2>

            <p className="text-white/60 text-center mb-8">
              Choose how you&apos;d like to get in touch with us.
            </p>

            <div className="flex flex-col gap-4">
              {/* Call */}
              <button
                onClick={() => {
                  window.location.href = "tel:+917302357399";
                  setShowContactOptions(false);
                }}
                className="bg-[#95FF00] text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Call Us
              </button>

              {/* Email */}
              <button
                onClick={() => {
                  window.location.href =
                    "mailto:support@uphillecharge.com?subject=General Inquiry";
                  setShowContactOptions(false);
                }}
                className="bg-[#0A66D1] text-white py-4 rounded-xl font-semibold hover:bg-[#0957b3] transition"
              >
                Email Us
              </button>

              {/* Cancel */}
              <button
                onClick={() => setShowContactOptions(false)}
                className="border border-white/10 py-4 rounded-xl text-white hover:bg-white/5 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

