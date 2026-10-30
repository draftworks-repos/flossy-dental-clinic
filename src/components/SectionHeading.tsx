import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionHeadingProps {
  title: string;
  blueWords?: string[];
  description?: string;
  action?: {
    label: string;
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
  };
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  blueWords = [],
  description,
  action,
  centered = false,
  className = ''
}) => {
  // Helper to highlight specific phrases in blue
  const renderHighlightedTitle = () => {
    if (!blueWords.length) return title;

    // Create a regex pattern to match any of the blue phrases
    const pattern = new RegExp(`(${blueWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = title.split(pattern);

    return parts.map((part, index) => {
      const isBlue = blueWords.some(w => w.toLowerCase() === part.toLowerCase());
      if (isBlue) {
        return (
          <span key={index} className="text-[#347BFF]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12 ${
        centered ? 'text-center items-center' : ''
      } ${className}`}
    >
      <div className={`max-w-2xl ${centered ? 'mx-auto' : ''}`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight leading-tight">
          {renderHighlightedTitle()}
        </h2>
        {description && (
          <p className="mt-2.5 text-sm sm:text-base text-[#667085] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action.href ? (
            <Link
              to={action.href}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              {action.icon && <action.icon className="w-4 h-4" />}
              <span>{action.label}</span>
            </Link>
          ) : (
            <button
              onClick={action.onClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              {action.icon && <action.icon className="w-4 h-4" />}
              <span>{action.label}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
