/**
 * Site configuration
 *
 * This is the single source of truth for site-wide configuration.
 * Update these values when customizing the template for your project.
 */
export const siteConfig = {
  // Basic info
  siteName: "Example Co.",
  tagline: "Lead → Booking Autopilot",
  description:
    "Automated lead qualification and booking system that converts visitors into confirmed calls",

  // URLs - Update these for your deployment
  primaryCTAUrl: "https://calendly.com/example-co/discovery-call",
  demoUrl: "https://demo.example-co.com",
  contactEmail: "hello@example-co.com",

  // Social links (optional - set to empty string to hide)
  social: {
    twitter: "https://twitter.com/example-co",
    linkedin: "https://linkedin.com/company/example-co",
    github: "https://github.com/example-co",
  },

  // Navigation items
  navigation: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/demo" },
    { name: "FAQ", href: "/faq" },
  ],
} as const;

/** Type for navigation items */
export type NavItem = (typeof siteConfig.navigation)[number];
