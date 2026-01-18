import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/config";

export const metadata = {
  title: `Pricing - ${siteConfig.siteName}`,
  description: "Choose the plan that fits your team and volume needs.",
};

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: "$499",
    description: "Perfect for small teams getting started with lead automation",
    setupFee: "$999",
    features: [
      "Up to 100 leads/month",
      "Single calendar integration",
      "Basic qualification workflow",
      "Email notifications",
      "Standard support (email)",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    id: "pro",
    price: "$999",
    description: "For growing teams with higher volume and advanced needs",
    setupFee: "$1,499",
    features: [
      "Up to 500 leads/month",
      "Multiple calendar sync (team scheduling)",
      "Advanced qualification with scoring",
      "Email + SMS notifications",
      "Priority support (email + chat)",
      "Weekly analytics dashboard",
      "CRM integration (1 platform)",
      "Custom branding on forms",
      "A/B testing for qualification flows",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Managed",
    id: "managed",
    price: "Custom",
    description: "White-glove service for enterprise teams with complex workflows",
    setupFee: "Custom",
    features: [
      "Unlimited leads",
      "Enterprise calendar features",
      "Custom qualification logic",
      "Multi-channel notifications",
      "Dedicated success manager",
      "Real-time analytics + reporting",
      "Multiple CRM integrations",
      "Full white-label solution",
      "Custom integrations & webhooks",
      "SLA guarantee",
      "Quarterly strategy reviews",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that fits your volume and needs. All plans include a one-time setup fee
            and ongoing monthly service.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ${
                tier.featured
                  ? "bg-blue-600 shadow-2xl ring-2 ring-blue-600"
                  : "bg-white shadow-lg ring-1 ring-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
              </div>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.featured ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    /month
                  </span>
                )}
              </p>
              <p
                className={`mt-2 text-sm ${tier.featured ? "text-blue-100" : "text-gray-600"}`}
              >
                Setup fee: {tier.setupFee}
              </p>

              <Link
                href={tier.id === "managed" ? "/intake" : siteConfig.primaryCTAUrl}
                target={tier.id === "managed" ? undefined : "_blank"}
                rel={tier.id === "managed" ? undefined : "noopener noreferrer"}
                className={`mt-6 block rounded-md px-4 py-2 text-center text-sm font-semibold shadow-sm ${
                  tier.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <CheckCircle
                      className={`h-5 w-5 flex-shrink-0 ${
                        tier.featured ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={`text-sm leading-6 ${
                        tier.featured ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Pricing FAQs</h2>
          <div className="mt-8 divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="font-semibold text-gray-900">What&apos;s included in the setup fee?</h3>
              <p className="mt-2 text-sm text-gray-600">
                The setup fee covers initial configuration, integration with your tools, custom
                qualification workflow design, team training, and quality assurance testing before
                launch.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-semibold text-gray-900">Can I change plans later?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, you&apos;ll be
                charged the difference prorated for the remainder of your billing period.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-semibold text-gray-900">What happens if I exceed my lead limit?</h3>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;ll notify you when you&apos;re approaching your limit. You can either upgrade to the
                next tier or pay an overage fee of $5 per additional lead.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-semibold text-gray-900">Is there a contract or can I cancel?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Starter and Pro plans are month-to-month with no long-term contract. Managed plans
                typically include a 6-month minimum commitment. You can cancel anytime with 30 days
                notice.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-semibold text-gray-900">Do you offer refunds?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Setup fees are non-refundable after work has begun. Monthly subscription fees are
                refundable within the first 14 days if you&apos;re not satisfied with the service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
          <p className="mt-4 text-gray-600">
            Schedule a call with our team to discuss your specific needs and find the right plan.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
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
              className="text-base font-semibold text-gray-900 hover:text-blue-600"
            >
              Request Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
