import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  border?: boolean;
  shadow?: "sm" | "md" | "lg" | "none";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  border = true,
  shadow = "sm",
}: CardProps) {
  const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : "";
  const borderClasses = border ? "border border-gray-200" : "";

  return (
    <div
      className={`bg-white rounded-xl ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClasses} ${hoverClasses} transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
