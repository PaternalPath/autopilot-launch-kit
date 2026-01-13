import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl";
  background?: "white" | "gray" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  gradient: "bg-gradient-to-b from-blue-50 via-white to-white",
};

const paddingClasses = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32",
  xl: "py-32 sm:py-40",
};

export function Section({
  children,
  className = "",
  containerSize = "lg",
  background = "white",
  padding = "lg",
}: SectionProps) {
  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
