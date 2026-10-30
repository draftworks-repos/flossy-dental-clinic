import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, CheckCircle2 } from "lucide-react";

interface SpecialOfferSectionProps {
  onOpenBooking: () => void;
}

export const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="mb-20 md:mb-28 lg:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#347BFF] bg-[#EAF3FF] border border-[#D5E6FF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Limited New Patient Special
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight">
              New To <span className="text-[#347BFF]">Draftworks</span>? Enjoy A
              Special Welcome <span className="text-[#347BFF]">Offer</span>!
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#667085] leading-relaxed">
              At Draftworks, we believe that a healthy smile is the key to
              confidence and well-being. Our expert team of dental professionals
              is dedicated to providing top-quality, patient-centered care in a
              comfortable and friendly environment.
            </p>
          </div>

          {/* Offer Inclusion Highlights */}
          <div className="bg-[#EEF5FF] rounded-2xl p-4 sm:p-5 border border-[#D5E6FF] space-y-2.5">
            <div className="flex items-center justify-between font-heading font-bold text-sm text-[#101828]">
              <span>$99 Complete Welcome Package</span>
              <span className="text-xs bg-[#347BFF] text-white px-2.5 py-0.5 rounded-full font-semibold">
                Save $250
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475467]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#347BFF] shrink-0" />
                <span>Comprehensive oral examination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#347BFF] shrink-0" />
                <span>Full-mouth low-dose digital x-rays</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#347BFF] shrink-0" />
                <span>Gentle ultrasonic cleaning & polish</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#347BFF] shrink-0" />
                <span>Personalized smile treatment roadmap</span>
              </li>
            </ul>
          </div>

          {/* Action & Hand-drawn arrow */}
          <div className="flex items-center gap-6 pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Claim Special Offer</span>
            </button>

            {/* Hand-drawn blue curved arrow matching reference */}
            <svg
              className="w-16 h-10 text-[#347BFF] shrink-0 hidden sm:block animate-pulse"
              viewBox="0 0 70 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 25 C 25 35, 45 35, 55 15" />
              <polyline points="48 10 57 15 54 24" />
            </svg>
          </div>
        </div>

        {/* Right Column: Two smiling male dentists in white coats */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#EEF5FF] border border-[#E5ECF5] shadow-sm group">
            <img
              src="/assets/aistudio/dentist-headshot-1.webp"
              alt="Two smiling lead dentists at Draftworks Clinic"
              className="w-full h-[360px] sm:h-[430px] md:h-[470px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
            {/* Subtle floating discount badge */}
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#D5E6FF] shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold text-[#101828]">
                New Patients Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
