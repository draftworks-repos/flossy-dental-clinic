import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Stethoscope } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 text-center max-w-lg mx-auto space-y-5">
      <div className="w-16 h-16 rounded-3xl bg-[#EEF5FF] text-[#347BFF] flex items-center justify-center mx-auto shadow-inner">
        <Stethoscope className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold text-[#101828]">Page Not Found</h1>
      <p className="text-sm text-[#667085]">
        The dental page or article you are searching for might have been moved,
        updated, or does not exist.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
