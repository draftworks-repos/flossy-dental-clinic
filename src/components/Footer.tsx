import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Clock,
} from "lucide-react";
import { siteConfig } from "../data/site";

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="mt-12 md:mt-16 bg-[#061A3A] text-white rounded-[28px] md:rounded-[36px] overflow-hidden pt-12 md:pt-16 pb-8 px-6 sm:px-10 lg:px-16 transition-all">
      {/* Top Tagline */}
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
          {siteConfig.fullName} is your trusted dental care partner, dedicated
          to providing exceptional treatments with a patient-first approach.
        </p>
      </div>

      {/* 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12 text-sm">
        {/* Col 1: Contact Us */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#347BFF]"></span>
            Contact Us
          </h4>
          <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#347BFF] shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#347BFF] shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#347BFF] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2: Follow Us */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#347BFF]"></span>
            Follow Us
          </h4>
          <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#347BFF]" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#347BFF]" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Twitter className="w-4 h-4 text-[#347BFF]" />
                <span>X (Twitter)</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Youtube className="w-4 h-4 text-[#347BFF]" />
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Useful Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#347BFF]"></span>
            Useful Links
          </h4>
          <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Treatments & Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Our Clinic
              </Link>
            </li>
            <li>
              <Link
                to="/about#team"
                className="hover:text-white transition-colors"
              >
                Our Dentists
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Dental Insights & Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact & Location
              </Link>
            </li>
            {onOpenBooking && (
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#347BFF] hover:underline font-medium text-left cursor-pointer"
                >
                  Book Appointment Online
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Col 4: Work Hours */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#347BFF]"></span>
            Work Hours
          </h4>
          <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
            <li className="flex justify-between items-center pb-1.5 border-b border-white/10">
              <span>Monday - Friday</span>
              <span className="font-semibold text-white">
                9:00 AM - 6:00 PM
              </span>
            </li>
            <li className="flex justify-between items-center pb-1.5 border-b border-white/10">
              <span>Saturday</span>
              <span className="font-semibold text-white">
                10:00 AM - 4:00 PM
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sunday</span>
              <span className="text-slate-400">Closed (Emergency Only)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-6"></div>

      {/* Giant Responsive Wordmark */}
      <div className="py-4 md:py-8 overflow-hidden text-center">
        <h2 className="font-heading font-extrabold text-[7.5vw] md:text-[7.74vw] tracking-tight text-white/90 select-none hover:text-white transition-colors duration-300">
          DRAFTWORKS DENTAL
        </h2>
      </div>

      {/* Copyright */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <p>© 2026 Draftworks Dental Clinic. All Rights Reserved.</p>
        <p>
          Design & Developed by{" "}
          <a href="https://draftworks.in/" className="text-white">
            draftworks.in
          </a>
        </p>
      </div>
    </footer>
  );
};
