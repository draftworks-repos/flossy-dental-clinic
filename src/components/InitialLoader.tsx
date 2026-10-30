import React, { useEffect, useState } from "react";

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if autostart query param is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("autostart") === "1") {
      onComplete();
      return;
    }

    const duration = 1200; // 1.2s total duration
    const intervalTime = 20; // 20ms steps
    const stepIncrement = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 400); // allow fade transition
          }, 150);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#EEF5FF] transition-opacity duration-400 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Business Name with Brand Icon beside counter */}
        <div className="flex items-center gap-4">
          {/* Logo icon */}
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-[#E5ECF5] flex items-center justify-center text-[#347BFF]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M4 10c0 4.418 3.582 8 8 8s8-3.582 8-8" />
              <path d="M9 13a3 3 0 0 0 6 0" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#101828] tracking-tight">
              Draftworks
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#667085]">
              Dental Clinic
            </span>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-10 bg-[#CBD5E1]/60 mx-1"></div>

          {/* 0% to 100% Counter beside business name */}
          <div className="flex items-baseline">
            <span className="font-heading font-bold text-3xl sm:text-4xl text-[#347BFF] tabular-nums">
              {Math.round(progress)}
            </span>
            <span className="font-heading font-semibold text-lg text-[#347BFF]/75 ml-0.5">
              %
            </span>
          </div>
        </div>

        {/* Subtle sleek progress bar line */}
        <div className="w-64 sm:w-90 h-1.5 bg-[#DCE8FB] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#347BFF] rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
