import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Sparkles,
  Calendar,
  Coffee,
  Headphones,
  Stethoscope,
} from "lucide-react";
import { DentistsSection } from "../components/DentistsSection";
import { Cta } from "../components/Cta";

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-20 md:space-y-28 lg:space-y-32">
      {/* Full-width, proper-heighted Hero Section */}
      <section className="w-full bg-[#EEF5FF] rounded-[24px] md:rounded-[36px] py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border border-[#E5ECF5] text-center flex flex-col items-center justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-[#347BFF] bg-white border border-[#D5E6FF] shadow-2xs mb-4">
          About Draftworks Dental Clinic
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101828] tracking-tight leading-[1.15] max-w-4xl">
          Dedicated To Your <span className="text-[#347BFF]">Smile</span>,{" "}
          <br className="hidden sm:inline" />
          Committed To Your <span className="text-[#347BFF]">Well-Being</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Founded on the principle that dental care should be restorative,
          transparent, and completely anxiety-free. We combine clinical mastery
          with genuine hospitality.
        </p>

        {/* Quick Highlights row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-[#101828]">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-[#347BFF]"></span>
            <span>Est. 2012</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>14,000+ Happy Smiles</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-[#347BFF]"></span>
            <span>Board-Certified Specialists</span>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Two-Column */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wide">
              Our Story & Legacy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] leading-tight mt-1.5">
              Redefining Dental Care Through Compassion & Precision
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
            Draftworks was established in 2012 by Dr. Michael Carter with a
            simple mission: remove the fear from dental visits. What started as
            a boutique family practice has grown into a state-of-the-art
            restorative and aesthetic dental center.
          </p>
          <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
            We believe that every patient deserves tailored, unhurried care.
            Rather than high-volume assembly-line dentistry, we spend ample time
            listening to your concerns, explaining every step on high-definition
            3D screens, and ensuring you are in full control of your treatment.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-[#EAF3FF] p-5 rounded-2xl border border-[#D5E6FF]">
              <div className="text-3xl font-extrabold text-[#347BFF]">
                14,000+
              </div>
              <div className="text-xs font-medium text-[#667085] mt-1">
                Smiles Transformed
              </div>
            </div>
            <div className="bg-[#EAF3FF] p-5 rounded-2xl border border-[#D5E6FF]">
              <div className="text-3xl font-extrabold text-[#347BFF]">
                99.4%
              </div>
              <div className="text-xs font-medium text-[#667085] mt-1">
                Patient Satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#EEF5FF] border border-[#E5ECF5] shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
              alt="Draftworks Dental Clinic staff and facility"
              className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#EEF5FF] rounded-[24px] md:rounded-[32px] p-8 sm:p-12 lg:p-16 border border-[#E5ECF5]">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wide">
            Our Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-1">
            Principles That Guide Every Treatment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-7 rounded-2xl border border-[#E5ECF5] shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#347BFF] flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101828] mb-2.5">
              Empathetic, Gentle Care
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              We never judge past dental history or dental anxiety. Every
              treatment is paced to your comfort with gentle anesthesia
              protocols.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#E5ECF5] shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#347BFF] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101828] mb-2.5">
              Conservative Dentistry
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              We believe in preserving your natural tooth enamel wherever
              possible, prioritizing biomimetic restorations over invasive
              measures.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#E5ECF5] shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#347BFF] flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#101828] mb-2.5">
              Digital Precision
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              From 3D intraoral impressions to low-dose radiograph diagnostics,
              our technology guarantees sub-millimeter clinical accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Comfort Amenities Section */}
      <section
        id="comfort"
        className="border border-[#E5ECF5] rounded-3xl p-8 sm:p-12 lg:p-16 bg-white shadow-2xs"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wide">
            Comfort First
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-1">
            Anxiety-Free Dental Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-2.5">
            Designed to feel more like a wellness retreat than a traditional
            medical office.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#EAF3FF] p-6 rounded-2xl border border-[#D5E6FF]">
            <Headphones className="w-6 h-6 text-[#347BFF] mb-3" />
            <h4 className="font-bold text-base text-[#101828]">
              Noise-Cancelling Audio
            </h4>
            <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
              Bose headphones with your choice of music, podcasts, or streaming
              audio.
            </p>
          </div>
          <div className="bg-[#EAF3FF] p-6 rounded-2xl border border-[#D5E6FF]">
            <Sparkles className="w-6 h-6 text-[#347BFF] mb-3" />
            <h4 className="font-bold text-base text-[#101828]">
              Ceiling TV Entertainment
            </h4>
            <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
              Watch your favorite movies or shows on Netflix during treatment.
            </p>
          </div>
          <div className="bg-[#EAF3FF] p-6 rounded-2xl border border-[#D5E6FF]">
            <Coffee className="w-6 h-6 text-[#347BFF] mb-3" />
            <h4 className="font-bold text-base text-[#101828]">
              Refreshment Lounge
            </h4>
            <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
              Artisanal herbal teas, sparkling water, and comfortable reception
              seating.
            </p>
          </div>
          <div className="bg-[#EAF3FF] p-6 rounded-2xl border border-[#D5E6FF]">
            <Stethoscope className="w-6 h-6 text-[#347BFF] mb-3" />
            <h4 className="font-bold text-base text-[#101828]">
              Needle-Free Buffering
            </h4>
            <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
              Advanced topical anesthetic buffers that eliminate pinch and sting
              sensations.
            </p>
          </div>
        </div>
      </section>

      {/* Dentist Team Section */}
      <DentistsSection />

      {/* Booking CTA Banner */}
      <Cta onOpenBooking={onOpenBooking} />
    </div>
  );
};
