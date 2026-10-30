import React from "react";
import { Sparkles, Calendar } from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { TreatmentCard } from "../components/TreatmentCard";
import { AboutPreview } from "../components/AboutPreview";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { SpecialOfferSection } from "../components/SpecialOfferSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { DentistsSection } from "../components/DentistsSection";
// import { BlogPreviewSection } from '../components/BlogPreviewSection';
import { treatmentsData } from "../data/treatments";
import { Cta } from "../components/Cta";

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  // Section 2 treatments: Teeth Whitening, Dental Implants, Cosmetic Dentistry
  const featuredTreatments = treatmentsData.filter((t) => t.isFeaturedHomepage);

  return (
    <div className="space-y-4">
      {/* Section 1: Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* Section 3: Dedicated To Your Smile, Committed To Your Care */}
      <AboutPreview />

      {/* Section 2: Comprehensive Dental Care */}
      <section className="mb-20 md:mb-28 lg:mb-32">
        <SectionHeading
          title="Comprehensive Dental Care For Every Smile"
          blueWords={["Dental Care"]}
          description="At Draftworks, we offer a full range of dental treatments to keep your smile healthy, bright, and confident."
          action={{
            label: "Our Services",
            icon: Sparkles,
            href: "/services",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* Section 6: Why Choose Draftworks For Your Dental Care? */}
      <WhyChooseSection />

      {/* Section 5: New To Draftworks? Enjoy A Special Welcome Offer! */}
      <SpecialOfferSection onOpenBooking={onOpenBooking} />

      {/* Section 7: Skilled Hands, Caring Hearts (Doctors) */}
      <DentistsSection />

      {/* Section 4: What Our Happy Patients Say */}
      <TestimonialsSection />

      {/* Section 8: Insights For A Healthier Smile (Blog) */}
      {/* <BlogPreviewSection /> */}

      {/* Booking CTA Banner */}
      <Cta onOpenBooking={onOpenBooking} />
    </div>
  );
};
