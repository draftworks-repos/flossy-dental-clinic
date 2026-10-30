import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, ArrowRight, UserCheck } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="mb-20 md:mb-28 lg:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Content & Feature Cards */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight">
              Dedicated To Your <span className="text-[#347BFF]">Smile</span>,{" "}
              <br className="hidden sm:inline" />
              Committed To Your <span className="text-[#347BFF]">Care</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#667085] leading-relaxed">
              At Draftworks, we believe that a healthy smile is the key to
              confidence and well-being. Our expert team of dental professionals
              is dedicated to providing top-quality, patient-centered care in a
              comfortable and friendly environment.
            </p>
          </div>

          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              <UserCheck className="w-4 h-4" />
              <span>About Us</span>
            </Link>
          </div>

          {/* Two Small Feature Cards Beneath the Text matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Feature 1: Insurance Support */}
            <div className="bg-[#EAF3FF] p-4 sm:p-5 rounded-2xl border border-[#D8EAFF] flex items-start gap-3.5 transition-all hover:bg-[#E2F0FF]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#347BFF] flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#101828]">
                  Insurance Support
                </h3>
                <p className="text-xs text-[#667085] mt-1 leading-snug">
                  Assistance with dental insurance and financing.
                </p>
              </div>
            </div>

            {/* Feature 2: Experienced Dentists */}
            <div className="bg-[#EAF3FF] p-4 sm:p-5 rounded-2xl border border-[#D8EAFF] flex items-start gap-3.5 transition-all hover:bg-[#E2F0FF]">
              <div className="w-10 h-10 rounded-xl bg-white text-[#347BFF] flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#101828]">
                  Experienced Dentists
                </h3>
                <p className="text-xs text-[#667085] mt-1 leading-snug">
                  Skilled professionals with years of expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Substantial Photograph of Dental Practitioners */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#EEF5FF] border border-[#E5ECF5] shadow-sm group">
            <img
              src="/temp/clinic-1.webp"
              alt="Two caring dental professionals at Draftworks clinic"
              className="w-full h-[360px] sm:h-[440px] md:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
            {/* Subtle decorative edge accent */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[28px] md:rounded-[36px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
