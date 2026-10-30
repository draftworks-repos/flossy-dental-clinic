import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon-circle';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#347BFF] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5'
  };

  const variantClasses = {
    primary:
      'bg-[#347BFF] hover:bg-[#2468E8] text-white shadow-sm active:scale-[0.98]',
    secondary:
      'bg-[#EAF3FF] hover:bg-[#D8EAFF] text-[#347BFF] active:scale-[0.98]',
    outline:
      'border border-[#E5ECF5] bg-white hover:bg-[#EEF5FF] text-[#101828] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-[#EEF5FF] text-[#101828]',
    'icon-circle':
      'w-10 h-10 rounded-full bg-[#347BFF] hover:bg-[#2468E8] text-white p-0 active:scale-95 shadow-sm'
  };

  if (variant === 'icon-circle') {
    return (
      <button
        className={`${baseClasses} ${variantClasses['icon-circle']} ${className}`}
        disabled={disabled}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};
