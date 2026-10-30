import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    id: "expert-team",
    title: "Expert & Caring Team",
    description:
      "Our experienced dentists and friendly staff are dedicated to providing top-quality care with a personal touch.",
    image: "/temp/clinic-2.webp",
  },
  {
    id: "advanced-tech",
    title: "Advanced Technology & Treatments",
    description:
      "We use the latest dental technology and modern techniques to provide precise, effective, and painless treatments.",
    image: "/temp/clinic-3.webp",
  },
  {
    id: "patient-centered",
    title: "Patient-Centered Approach",
    description:
      "We create a stress-free environment with personalized treatment plans, and a focus on pain-free dentistry.",
    image: "/temp/clinic-4.webp",
  },
  {
    id: "transparent-pricing",
    title: "Transparent & Honest Pricing",
    description:
      "Clear upfront cost estimates, no hidden fees, and seamless direct insurance processing for your peace of mind.",
    image: "/temp/clinic-5.webp",
  },
];

export const WhyChooseSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % features.length);
  };

  // const visibleFeatures = [
  //   features[startIndex % features.length],
  //   features[(startIndex + 1) % features.length],
  //   features[(startIndex + 2) % features.length]
  // ];
  const visibleFeatures = Array.from(
    { length: features.length },
    (_, i) => features[(startIndex + i) % features.length],
  );

  return (
    <section className="relative mb-20 md:mb-28 lg:mb-32">
      <SectionHeading
        title="Why Choose Draftworks For Your Dental Care?"
        blueWords={["Draftworks"]}
        description="At Draftworks, we go beyond just dental treatments we provide a patient-first experience that ensures comfort, care, and confidence."
        action={{
          label: "Contact Us",
          icon: MessageSquare,
          href: "/contact",
        }}
      />

      {/* Cards Container with Floating Prev/Next Buttons matching reference */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous feature"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#347BFF] hover:bg-[#2468E8] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next feature"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#347BFF] hover:bg-[#2468E8] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Feature Cards Grid: 3 on desktop, 2 on tablet & mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {visibleFeatures.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 0
                  ? "flex"
                  : index === 1
                    ? "hidden sm:flex"
                    : index === 2
                      ? "hidden lg:flex"
                      : "hidden 2xl:flex"
              } bg-[#EAF3FF] rounded-2xl p-5 sm:p-6 border border-[#D5E6FF] flex-col justify-between transition-all duration-300 hover:shadow-sm`}
            >
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#101828] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl bg-white aspect-[4/3] border border-[#D5E6FF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
