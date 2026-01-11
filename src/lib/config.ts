export const siteConfig = {
  siteName: "Example Co.",
  tagline: "Lead → Booking Autopilot",
  description: "Automated lead qualification and booking system that converts visitors into confirmed calls",

  // URLs
  primaryCTAUrl: "https://calendly.com/example-co/discovery-call",
  demoUrl: "https://demo.example-co.com",
  contactEmail: "hello@example-co.com",

  // Social (placeholders)
  social: {
    twitter: "https://twitter.com/example-co",
    linkedin: "https://linkedin.com/company/example-co",
    github: "https://github.com/example-co",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/demo" },
    { name: "FAQ", href: "/faq" },
  ],
} as const;
