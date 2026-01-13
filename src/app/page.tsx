import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Clock,
  Users,
  Calendar,
  Settings,
  Play,
  TrendingUp,
  Shield,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Respond to leads within seconds, not hours. Never miss a hot prospect again.",
    },
    {
      icon: Target,
      title: "Smart Qualification",
      description: "AI-powered qualification ensures only the best-fit leads reach your calendar.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your autopilot works around the clock, booking calls even when you&apos;re offline.",
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Seamlessly syncs with your existing calendar. No double bookings, ever.",
    },
    {
      icon: Users,
      title: "Team Ready",
      description: "Round-robin distribution ensures even workload across your sales team.",
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor qualification questions, booking flows, and notifications to your needs.",
    },
  ];

  const deliverables = [
    "Custom landing page with embedded booking form",
    "AI-powered lead qualification system",
    "Automated calendar scheduling with conflict detection",
    "Email and SMS notifications for leads and team",
    "Analytics dashboard with conversion tracking",
    "CRM integration and data sync",
    "Ongoing support and optimization",
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small teams getting started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$999",
      description: "For growing teams with higher volume",
      popular: true,
    },
    {
      name: "Managed",
      price: "Custom",
      description: "White-glove service for enterprise teams",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How long does setup take?",
      a: "Most teams are up and running within 48 hours. We handle the technical setup while you focus on defining your qualification criteria.",
    },
    {
      q: "What platforms do you integrate with?",
      a: "We integrate with all major calendars (Google, Outlook, Apple), CRMs (HubSpot, Salesforce, Pipedrive), and lead sources.",
    },
    {
      q: "Can I customize the qualification questions?",
      a: "Absolutely. You have full control over the questions, logic, and scoring that determine lead qualification.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mb-6 animate-scale-in">
              <TrendingUp className="mr-1 h-3 w-3" />
              Trusted by 500+ companies
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Stop losing leads to slow response times. Our automated system qualifies prospects,
              books calls, and gets them on your calendar—all while you sleep.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={siteConfig.primaryCTAUrl}
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Book a Call
              </Button>
              <Button href="/intake" size="lg" variant="outline" className="w-full sm:w-auto">
                Request Setup
              </Button>
              <Button href="/demo" size="lg" variant="ghost" showArrow>
                <Play className="h-5 w-5 mr-1" />
                View Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why teams choose our autopilot
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform your lead process from manual chaos to automated precision
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} hover padding="lg" className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get from setup to booked calls in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Connect Your Tools",
                description:
                  "Link your calendar, CRM, and lead sources. We integrate with all major platforms.",
              },
              {
                step: "2",
                title: "Configure Your Workflow",
                description:
                  "Set your qualification criteria, booking rules, and notification preferences.",
              },
              {
                step: "3",
                title: "Start Converting",
                description:
                  "Watch as qualified leads automatically flow into your calendar, ready to close.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card padding="lg" className="h-full">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="mt-6 text-center text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center text-sm text-gray-600">{item.description}</p>
                </Card>
                {index < 2 && (
                  <div className="absolute right-0 top-8 hidden translate-x-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What You Get Section */}
      <Section padding="lg">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to automate your lead-to-booking process
            </p>
          </div>
          <Card padding="lg" className="mx-auto mt-12 max-w-3xl" shadow="lg">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                  <p className="text-gray-700">{deliverable}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* Pricing Preview Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that fits your volume and needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                padding="lg"
                hover
                shadow={tier.popular ? "lg" : "md"}
                className={`relative ${tier.popular ? "border-2 border-blue-600" : ""}`}
              >
                {tier.popular && (
                  <Badge
                    variant="primary"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                <p className="mt-8 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-sm font-semibold text-gray-600">/month</span>
                  )}
                </p>
                <Button
                  href="/pricing"
                  variant={tier.popular ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Preview Section */}
      <Section padding="lg">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/faq" variant="ghost" showArrow>
              View all FAQs
            </Button>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <Card padding="lg" className="mx-auto max-w-4xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl" border={false}>
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to automate your bookings?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join hundreds of teams already converting more leads on autopilot.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={siteConfig.primaryCTAUrl}
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 sm:w-auto"
                >
                  Book a Call
                </Button>
                <Button
                  href="/intake"
                  size="lg"
                  variant="ghost"
                  className="w-full text-white hover:bg-white/10 sm:w-auto"
                  showArrow
                >
                  Request Setup
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
