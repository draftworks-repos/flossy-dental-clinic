import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  DollarSign,
  Handshake,
} from "lucide-react";
import { treatmentsData } from "../data/treatments";
import { faqsData } from "../data/faqs";
import { Cta } from "../components/Cta";

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(faqsData[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-20 md:space-y-28 lg:space-y-32">
      {/* Full-width, proper-heighted Services Hero */}
      <section className="w-full bg-[#EEF5FF] rounded-[24px] md:rounded-[36px] py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border border-[#E5ECF5] text-center flex flex-col items-center justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-[#347BFF] bg-white border border-[#D5E6FF] shadow-2xs mb-4">
          <Handshake className="w-3.5 h-3.5" />
          Clinical Excellence & Aesthetic Mastery
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101828] tracking-tight leading-[1.15] max-w-4xl">
          Specialized Treatments For{" "}
          <span className="text-[#347BFF]">Every Smile</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
          From routine preventive cleanings to advanced cosmetic smile makeovers
          and full-mouth implant restorations, our experienced specialists
          deliver precise, comfortable care.
        </p>

        {/* Treatment Category Quick Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-[#101828]">
          {[
            "Teeth Whitening",
            "Dental Implants",
            "Cosmetic Veneers",
            "Clear Aligners",
            "Pediatric Care",
            "Emergency Relief",
          ].map((tag, i) => (
            <span
              key={i}
              className="bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#D5E6FF] text-[#347BFF]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* All 8 Treatments Detailed Grid */}
      <section className="space-y-10 md:space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wide">
            Treatment Menu
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-1">
            Our Clinical Offerings
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-2">
            Select any service to view details, duration, and transparent
            pricing estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatmentsData.map((treatment) => (
            <div
              key={treatment.id}
              id={treatment.id}
              className="bg-white rounded-3xl border border-[#E5ECF5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#347BFF] border border-white/50 shadow-2xs">
                    {treatment.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#101828] mb-1.5">
                    {treatment.title}
                  </h3>
                  <p className="text-xs font-medium text-[#347BFF] mb-3">
                    {treatment.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-5">
                    {treatment.fullDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-[#F1F5F9]">
                    {treatment.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#475467]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#347BFF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metadata & Booking Action */}
              <div className="p-6 sm:p-7 pt-0 mt-2">
                <div className="bg-[#EEF5FF] rounded-2xl p-4 border border-[#D5E6FF] flex items-center justify-between text-xs mb-4">
                  <div>
                    <span className="text-[#667085] block text-[11px]">
                      Estimate
                    </span>
                    <span className="font-bold text-[#101828] text-sm">
                      {treatment.priceEstimate}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#667085] block text-[11px]">
                      Duration
                    </span>
                    <span className="font-semibold text-[#101828]">
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Treatment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance & Transparent Pricing Assurance: single column on tablet & mobile, 3 columns on desktop */}
      <section className="bg-[#EAF3FF] rounded-[24px] md:rounded-[32px] p-8 sm:p-12 lg:p-16 border border-[#D5E6FF]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#347BFF] flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#101828]">
                All Major PPOs Accepted
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                We handle claims directly with Delta Dental, MetLife, Cigna,
                Guardian, and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#347BFF] flex items-center justify-center shrink-0 shadow-2xs">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#101828]">
                0% Interest Financing
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                Split payments into manageable monthly installments with
                CareCredit or Sunbit.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#347BFF] flex items-center justify-center shrink-0 shadow-2xs">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-[#101828]">
                No Surprise Invoicing
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                Receive an itemized printed estimate before any procedure is
                scheduled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section id="faq" className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wide">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-2">
            Everything you need to know about dental visits, treatments, and
            insurance.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5ECF5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#EEF5FF]/50 transition-colors cursor-pointer"
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-[#101828]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#347BFF] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#475467] leading-relaxed border-t border-[#F1F5F9] pt-3.5 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <Cta onOpenBooking={onOpenBooking} />
    </div>
  );
};
