import React from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#EEF5FF] rounded-[24px] md:rounded-[32px] pt-10 sm:pt-14 md:pt-18 pb-4 sm:pb-0 px-4 sm:px-8 border border-[#E5ECF5] mb-16 md:mb-24 lg:mb-28">
      {/* Background Image with faded blue overlay for whole hero section */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('/temp/clinic-1.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF5FF]/85 via-[#EEF5FF]/92 to-[#EEF5FF00] pointer-events-none " />

      {/* Hero Headline & Intro */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#101828] tracking-tight leading-[1.15]">
          Creating Beautiful Smiles <br className="hidden sm:inline" />
          With <span className="text-[#347BFF]">Expert Care</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed">
          At Draftworks, we believe in providing healthy, confident smiles with
          expert care and advanced technology.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Get Started</span>
          </button>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#101828] bg-white border border-[#E5ECF5] hover:bg-[#F8FAFC] shadow-2xs transition-all duration-200 active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-[#347BFF]" />
            <span>Our Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Center Portrait & Flanking Cards */}
      <div className="relative z-10 max-w-4xl mx-auto mt-4 sm:mt-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center relative">
          {/* Left Floating Info Card */}
          <div className="w-full md:w-60 bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-sm border border-[#E5ECF5] mb-4 md:mb-10 md:-mr-8 z-20 flex items-center justify-between gap-3 transition-all hover:shadow-md">
            <div>
              <h3 className="font-heading font-bold text-sm text-[#101828]">
                Book Appointment
              </h3>
              <p className="text-xs text-[#667085] mt-0.5">
                Ready for a Healthier Smile?
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              aria-label="Book appointment"
              className="w-8 h-8 rounded-full bg-[#347BFF] hover:bg-[#2468E8] text-white flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-transform hover:scale-105"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Central Smiling Dentist Portrait: rounded border on mobile, flush bottom on sm+ */}
          <div className="relative z-10 w-64 sm:w-80 md:w-96 overflow-hidden rounded-2xl sm:rounded-b-none sm:rounded-t-[32px] md:rounded-t-[40px] flex items-end">
            <img
              src="/temp/hero-girl.png"
              alt="Lead Dentist at Draftworks Clinic"
              className="w-full h-auto object-cover object-top max-h-[360px] sm:max-h-[440px] block drop-shadow-md align-bottom"
              loading="eager"
            />
          </div>

          {/* Right Floating Info Card */}
          <div className="w-full md:w-60 bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-sm border border-[#E5ECF5] mt-4 md:mt-0 md:mb-10 md:-ml-8 z-20 flex items-center justify-between gap-3 transition-all hover:shadow-md">
            <div>
              <h3 className="font-heading font-bold text-sm text-[#101828]">
                Patient Comfort
              </h3>
              <p className="text-xs text-[#667085] mt-0.5">
                Painless treatments.
              </p>
            </div>
            <Link
              to="/about#comfort"
              aria-label="Learn about patient comfort"
              className="w-8 h-8 rounded-full bg-[#347BFF] hover:bg-[#2468E8] text-white flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-transform hover:scale-105"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
