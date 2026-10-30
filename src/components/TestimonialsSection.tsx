import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonialsData } from "../data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const featuredReviews = testimonialsData.slice(0, 3);

  return (
    <section className="relative mb-20 md:mb-28 lg:mb-32">
      <SectionHeading
        title="What Our Happy Patients Say"
        blueWords={["Happy"]}
        description="Hear from our satisfied patients about their experiences at Draftworks and how our expert care has transformed their dental health."
        action={{
          label: "Contact Us",
          icon: MessageSquare,
          href: "/contact",
        }}
      />

      {/* Review Cards: 2 in first row, 3rd in 2nd row on tablet; single column on mobile; 3 in row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#EAF3FF] rounded-2xl p-6 sm:p-7 border border-[#D5E6FF] flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
          >
            <div>
              <h3 className="font-heading font-bold text-base text-[#101828] mb-2.5">
                {review.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-6">
                "{review.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#D5E6FF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-2xs"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#101828]">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-0.5 mt-0.5 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-medium text-[#347BFF] bg-white/70 px-2.5 py-1 rounded-full border border-[#D5E6FF]">
                {review.treatment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
