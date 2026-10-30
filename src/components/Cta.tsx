import React from "react";
import { Calendar } from "lucide-react";

interface CtaProps {
  onOpenBooking: () => void;
}

export const Cta: React.FC<CtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#061A3A] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Ready to Experience the Draftworks Difference?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300">
          Book your comprehensive checkup and personalized consultation today.
          We welcome new patients and accept most major PPO insurances.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book An Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
