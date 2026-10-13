"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A0D26] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="grid lg:grid-cols-2 gap-16 py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-white text-2xl font-bold">Uphill Echarge</h3>
            </div>

            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              Driving the future of sustainable mobility with smart EV charging
              solutions designed for speed, convenience, and reliability.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61590695810554"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/uphillecharge/"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/uphill-e-charge-private-limited/?viewAsMember=true"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/917302357399"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#95FF00] hover:text-black transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-20">
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:+917302357399"
                className="flex items-start gap-3 group"
              >
                <FiPhone
                  size={20}
                  className="text-[#95FF00] mt-1 shrink-0"
                />
                <span className="text-white/60 group-hover:text-[#95FF00] transition">
                  +91 7302357399
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:admin@uphillecharge.com"
                className="flex items-start gap-3 group"
              >
                <FiMail size={20} className="text-[#95FF00] mt-1 shrink-0" />
                <span className="text-white/60 break-all group-hover:text-[#95FF00] transition">
                  admin@uphillecharge.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917302357399"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <FaWhatsapp
                  size={20}
                  className="text-[#95FF00] mt-1 shrink-0"
                />
                <span className="text-white/60 group-hover:text-[#95FF00] transition">
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2025 Uphill Echarge Private Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

