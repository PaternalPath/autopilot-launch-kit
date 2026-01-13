import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:shadow-sm",
  secondary:
    "bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md active:shadow-sm",
  outline:
    "bg-white text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
