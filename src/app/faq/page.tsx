import Link from "next/link";
import { siteConfig } from "@/config";

export const metadata = {
  title: `FAQ - ${siteConfig.siteName}`,
  description: "Frequently asked questions about our lead automation system.",
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How long does setup take?",
        a: "Most teams are up and running within 48 hours. The process includes: initial consultation (1 hour), integration setup (4-8 hours), qualification workflow design (2-4 hours), and testing (2 hours). We handle the technical work while you focus on defining your qualification criteria.",
      },
      {
        q: "What do I need to get started?",
        a: "You'll need: access to your calendar (Google, Outlook, or Apple), your CRM credentials if integrating, a list of qualification questions you want to ask, and clarity on your ideal customer profile. We'll guide you through everything else.",
      },
      {
        q: "Can I try it before committing?",
        a: "Yes! Book a call and we can set up a limited pilot to test the system with a subset of your leads. This lets you see results before making a full commitment.",
      },
    ],
  },
  {
    category: "Integrations",
    questions: [
      {
        q: "What platforms do you integrate with?",
        a: "Calendars: Google Calendar, Outlook, Apple Calendar. CRMs: HubSpot, Salesforce, Pipedrive, Zoho. Lead sources: Website forms, Zapier, webhooks. We can also build custom integrations for enterprise plans.",
      },
      {
        q: "Will this work with my existing tools?",
        a: "Most likely yes. We support the major platforms and can connect via API or Zapier for others. If you use a niche tool, we can explore custom integration options during the consultation.",
      },
      {
        q: "What if I don't have a CRM?",
        a: "No problem! The system works independently and stores lead data. You can export to CSV or use our basic CRM features. We can also help you select and implement a CRM if needed.",
      },
    ],
  },
  {
    category: "Functionality",
    questions: [
      {
        q: "Can I customize the qualification questions?",
        a: "Absolutely. You have full control over the questions, logic, conditional flows, and scoring that determine lead qualification. We help you design an effective workflow during setup.",
      },
      {
        q: "How does the AI qualification work?",
        a: "The AI analyzes lead responses in real-time, scores them based on your criteria, and routes them accordingly. High-quality leads go straight to booking, while others might get alternative resources or follow-up sequences.",
      },
      {
        q: "Can leads book with specific team members?",
        a: "Yes. You can set up round-robin distribution, let leads choose from available team members, or route based on criteria like industry, company size, or location.",
      },
      {
        q: "What happens to unqualified leads?",
        a: "You decide! Options include: sending them resources, adding to a nurture sequence, offering a different meeting type, or simply thanking them with no immediate action.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "What's included in the setup fee?",
        a: "Setup includes: consultation and workflow design, calendar and CRM integration, custom form creation, qualification logic configuration, team training, quality assurance testing, and go-live support.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes, you can upgrade or downgrade anytime. Upgrades are prorated for the current billing period. Downgrades take effect at the next billing cycle.",
      },
      {
        q: "What happens if I exceed my lead limit?",
        a: "We'll notify you when you approach your limit. You can upgrade to the next tier or pay an overage fee of $5 per additional lead. We never stop processing leads without notice.",
      },
      {
        q: "Is there a contract?",
        a: "Starter and Pro plans are month-to-month. Managed plans typically include a 6-month commitment. All plans require 30 days notice to cancel.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "How do you prevent double bookings?",
        a: "We sync with your calendar in real-time, check availability before showing time slots, and lock slots during the booking process. We also respect buffer times and event types you configure.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. We use enterprise-grade encryption (AES-256), SOC 2 compliant infrastructure, and never share your data. You maintain ownership of all lead data and can export it anytime.",
      },
      {
        q: "What about GDPR compliance?",
        a: "Our system is GDPR compliant. We provide features for consent management, data deletion requests, and data portability. Privacy policies and terms can be customized for your business.",
      },
      {
        q: "Do you offer an API?",
        a: "Yes, Pro and Managed plans include API access for custom integrations, data retrieval, and automation triggers.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "What kind of support do you provide?",
        a: "Starter: Email support (24-hour response). Pro: Email + chat support (4-hour response). Managed: Dedicated success manager with phone/video support.",
      },
      {
        q: "Can you help optimize my workflow?",
        a: "Yes! Pro and Managed plans include regular performance reviews. We analyze your data, suggest improvements, and help you refine qualification criteria to improve conversion rates.",
      },
      {
        q: "What if something breaks?",
        a: "We monitor the system 24/7 and typically resolve issues before you notice. If you encounter problems, contact support immediately. Managed plans include an SLA guarantee.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our lead automation system
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-gray-900">{section.category}</h2>
              <div className="mt-6 divide-y divide-gray-200">
                {section.questions.map((faq, qIdx) => (
                  <div key={qIdx} className="py-6">
                    <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
          <p className="mt-4 text-gray-600">
            Schedule a call with our team to discuss your specific situation and needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={siteConfig.primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Book a Call
            </Link>
            <Link
              href="/intake"
              className="text-base font-semibold text-blue-600 hover:text-blue-500"
            >
              Request Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
