import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Demo - ${siteConfig.siteName}`,
  description: "See our lead automation system in action.",
};

export default function DemoPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See It In Action
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Experience how our autopilot turns leads into booked calls automatically
          </p>
        </div>

        <div className="mt-16">
          {/* Demo Placeholder */}
          <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50">
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Interactive Demo</h3>
              <p className="mt-2 max-w-md text-sm text-gray-600">
                Click the button below to explore our live demo environment and see the full lead
                qualification and booking workflow.
              </p>
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Launch Demo
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* What You'll See */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">What you&apos;ll see in the demo</h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Lead Capture Form</h3>
                <p className="mt-1 text-sm text-gray-600">
                  A branded form that captures essential lead information and begins the
                  qualification process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smart Qualification</h3>
                <p className="mt-1 text-sm text-gray-600">
                  AI-powered questions adapt based on responses to accurately score and qualify
                  each lead.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Instant Scheduling</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Qualified leads immediately see your calendar availability and can book a time
                  that works for both parties.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Automated Notifications</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Both the lead and your team receive instant confirmation and reminder
                  notifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  5
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analytics Dashboard</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Track conversion rates, booking volume, and lead quality metrics in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to get started?</h2>
          <p className="mt-4 text-gray-600">
            After seeing the demo, schedule a call to discuss implementing this for your team.
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
