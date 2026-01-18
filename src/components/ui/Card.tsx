import type { HTMLAttributes, ReactNode } from "react";

/**
 * Card props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

/**
 * CardHeader props
 */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * CardTitle props
 */
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * CardDescription props
 */
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

/**
 * CardContent props
 */
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * CardFooter props
 */
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Padding styles
 */
const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Card Component
 *
 * A flexible card component for grouping related content.
 *
 * Features:
 * - Multiple padding options
 * - Optional hover effect
 * - Composable with CardHeader, CardContent, CardFooter
 *
 * Usage:
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>Card Title</CardTitle>
 *       <CardDescription>Card description</CardDescription>
 *     </CardHeader>
 *     <CardContent>Content here</CardContent>
 *     <CardFooter>Footer actions</CardFooter>
 *   </Card>
 */
export function Card({
  children,
  padding = "md",
  hover = false,
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-lg border border-gray-200 bg-white shadow-sm";
  const hoverStyles = hover
    ? "transition-shadow duration-200 hover:shadow-md"
    : "";

  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * CardHeader Component
 *
 * Container for card title and description.
 */
export function CardHeader({ children, className = "", ...props }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * CardTitle Component
 *
 * Title element for cards.
 */
export function CardTitle({
  children,
  as: Component = "h3",
  className = "",
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * CardDescription Component
 *
 * Description text for cards.
 */
export function CardDescription({
  children,
  className = "",
  ...props
}: CardDescriptionProps) {
  return (
    <p className={`mt-1 text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
}

/**
 * CardContent Component
 *
 * Main content area of the card.
 */
export function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

/**
 * CardFooter Component
 *
 * Footer area for actions or additional info.
 */
export function CardFooter({ children, className = "", ...props }: CardFooterProps) {
  return (
    <div
      className={`mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
