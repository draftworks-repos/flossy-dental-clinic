import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Globe, Linkedin, Share2, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { dentistsData, Dentist } from "../data/dentists";

interface DentistsSectionProps {
  onSelectDoctor?: (doctor: Dentist) => void;
}

export const DentistsSection: React.FC<DentistsSectionProps> = ({
  onSelectDoctor,
}) => {
  return (
    <section id="team" className="mb-20 md:mb-28 lg:mb-32">
      <SectionHeading
        title="Skilled Hands, Caring Hearts"
        blueWords={["Hands", "Hearts"]}
        description="At Draftworks, our team of skilled and compassionate dental professionals is dedicated to providing top-quality care."
        action={{
          label: "Our Doctors",
          icon: Users,
          href: "/about#team",
        }}
      />

      {/* 3 Dentist Cards: 2 in first row and 1 in second row on tablet, 1 per row on mobile, 3 in row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {dentistsData.map((doctor) => (
          <div
            key={doctor.id}
            className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#E5ECF5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Portrait Image Container */}
            <div className="relative overflow-hidden rounded-2xl bg-[#EEF5FF] aspect-[4/4.5] mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />

              {/* Floating Social Icons Row matching reference */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl border border-white/40 shadow-xs">
                <a
                  href={doctor.socials.chat || "#"}
                  aria-label={`Chat with ${doctor.name}`}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#667085] hover:text-[#347BFF] hover:bg-[#EEF5FF] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
                <a
                  href={doctor.socials.website || "#"}
                  aria-label={`${doctor.name} profile`}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#667085] hover:text-[#347BFF] hover:bg-[#EEF5FF] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a
                  href={doctor.socials.linkedin || "https://linkedin.com"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${doctor.name} LinkedIn`}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#667085] hover:text-[#347BFF] hover:bg-[#EEF5FF] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: doctor.name,
                        text: doctor.bio,
                        url: window.location.href,
                      });
                    }
                  }}
                  aria-label={`Share ${doctor.name}'s profile`}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#667085] hover:text-[#347BFF] hover:bg-[#EEF5FF] transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="px-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#101828]">
                {doctor.name}
              </h3>
              <p className="text-xs text-[#347BFF] font-medium mt-0.5">
                {doctor.title}
              </p>
              <p className="text-xs text-[#667085] mt-1">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
