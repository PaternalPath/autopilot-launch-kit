import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Clock,
  Users,
  Calendar,
  Settings,
} from "lucide-react";
import { siteConfig } from "@/config";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop losing leads to slow response times. Our automated system qualifies prospects,
              books calls, and gets them on your calendar—all while you sleep.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={siteConfig.primaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book a Call
              </Link>
              <Link
                href="/intake"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              >
                Request Setup
              </Link>
              <Link
                href="/demo"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                View Demo <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why teams choose our autopilot
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform your lead process from manual chaos to automated precision
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Response</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Respond to leads within seconds, not hours. Never miss a hot prospect again.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Smart Qualification</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    AI-powered qualification ensures only the best-fit leads reach your calendar.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Your autopilot works around the clock, booking calls even when you&apos;re offline.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Calendar Integration</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Seamlessly syncs with your existing calendar. No double bookings, ever.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Team Ready</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Round-robin distribution ensures even workload across your sales team.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fully Customizable</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Tailor qualification questions, booking flows, and notifications to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get from setup to booked calls in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                  1
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Connect Your Tools</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Link your calendar, CRM, and lead sources. We integrate with all major platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                  2
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  Configure Your Workflow
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Set your qualification criteria, booking rules, and notification preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                  3
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Start Converting</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Watch as qualified leads automatically flow into your calendar, ready to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to automate your lead-to-booking process
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {[
                "Custom landing page with embedded booking form",
                "AI-powered lead qualification system",
                "Automated calendar scheduling with conflict detection",
                "Email and SMS notifications for leads and team",
                "Analytics dashboard with conversion tracking",
                "CRM integration and data sync",
                "Ongoing support and optimization",
              ].map((deliverable, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                  <p className="text-gray-700">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that fits your volume and needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
              <p className="mt-4 text-sm text-gray-600">Perfect for small teams getting started</p>
              <p className="mt-8 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="text-sm font-semibold text-gray-600">/month</span>
              </p>
              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
            <div className="rounded-lg border-2 border-blue-600 bg-white p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  Popular
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600">For growing teams with higher volume</p>
              <p className="mt-8 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-gray-900">$999</span>
                <span className="text-sm font-semibold text-gray-600">/month</span>
              </p>
              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-gray-900">Managed</h3>
              <p className="mt-4 text-sm text-gray-600">
                White-glove service for enterprise teams
              </p>
              <p className="mt-8 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </p>
              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/faq" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
              View all FAQs <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to automate your bookings?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join hundreds of teams already converting more leads on autopilot.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={siteConfig.primaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                Book a Call
              </Link>
              <Link
                href="/intake"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Request Setup <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
