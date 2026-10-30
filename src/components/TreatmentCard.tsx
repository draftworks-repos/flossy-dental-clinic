import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect?: () => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="group relative overflow-hidden rounded-[24px] bg-slate-900 border border-[#E5ECF5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[410px] sm:h-[440px]">
      {/* Background Image with smooth scale on hover */}
      <img
        src={treatment.image}
        alt={treatment.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Strong bottom-to-top dark to transparent overlay for optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-50% to-transparent pointer-events-none" />

      {/* Top Category Label */}
      <div className="relative z-10 p-5">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-white/95 bg-black/30 backdrop-blur-md border border-white/20 shadow-xs">
          {treatment.category}
        </span>
      </div>

      {/* Spacer to push content to bottom */}
      <div className="flex-1" />

      {/* Bottom text description */}
      <div className="relative z-10 p-5 sm:p-6 text-white">
        <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 leading-snug drop-shadow-xs">
          {treatment.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed drop-shadow-xs">
          {treatment.shortDescription}
        </p>
        <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between">
          <Link
            to={`/services#${treatment.id}`}
            className="group/link text-xs font-semibold text-white hover:text-[#90BAFF] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Learn details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
          <span className="text-[11px] text-slate-300 font-medium">{treatment.duration}</span>
        </div>
      </div>
    </div>
  );
};
