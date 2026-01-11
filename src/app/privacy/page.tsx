import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Privacy Policy - ${siteConfig.siteName}`,
  description: "Our privacy policy and data practices.",
};

export default function PrivacyPage() {
  const lastUpdated = "January 11, 2026";

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-600">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-gray mt-12 max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="mt-4 text-gray-600">
              {siteConfig.siteName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our lead automation and booking service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Information You Provide to Us
            </h3>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information (company name, industry, size)</li>
              <li>Calendar and scheduling preferences</li>
              <li>Lead qualification responses and form submissions</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Information Collected Automatically
            </h3>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Usage data and analytics</li>
              <li>IP addresses and browser information</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device information and operating system</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Information from Third Parties
            </h3>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Calendar data from integrated calendar services</li>
              <li>CRM data from connected platforms</li>
              <li>Authentication data from SSO providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-600">
              <li>Provide, operate, and maintain our service</li>
              <li>Process bookings and calendar scheduling</li>
              <li>Qualify and route leads according to your criteria</li>
              <li>Send notifications and confirmations</li>
              <li>Improve and optimize our service</li>
              <li>Provide customer support</li>
              <li>Analyze usage patterns and generate insights</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and maintain security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
            <p className="mt-4 text-gray-600">We may share your information with:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who help us operate the
                service (hosting, analytics, payment processing)
              </li>
              <li>
                <strong>Integrated Services:</strong> Platforms you connect (calendar services,
                CRMs) as necessary to provide functionality
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                sale of assets
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            <p className="mt-4 text-gray-600">
              We implement appropriate technical and organizational measures to protect your data,
              including:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Encryption of data in transit and at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication requirements</li>
              <li>SOC 2 Type II compliance</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="mt-4 text-gray-600">
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
            <p className="mt-4 text-gray-600">
              We retain your information for as long as your account is active or as needed to
              provide services. After account closure, we retain data for:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Legal compliance (tax, accounting, audit requirements)</li>
              <li>Dispute resolution</li>
              <li>Fraud prevention</li>
            </ul>
            <p className="mt-4 text-gray-600">
              You may request deletion of your data at any time, subject to legal retention
              requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            <p className="mt-4 text-gray-600">Depending on your location, you may have rights to:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="mt-4 text-gray-600">
              To exercise these rights, contact us at {siteConfig.contactEmail}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
            <p className="mt-4 text-gray-600">
              We use cookies and similar technologies to provide and improve our service. Types of
              cookies we use:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>
                <strong>Essential:</strong> Required for the service to function
              </li>
              <li>
                <strong>Analytics:</strong> Help us understand usage patterns
              </li>
              <li>
                <strong>Functional:</strong> Remember your preferences
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              You can control cookies through your browser settings, but disabling certain cookies
              may limit functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
            <p className="mt-4 text-gray-600">
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place, including:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-600">
              <li>Standard contractual clauses</li>
              <li>Privacy Shield certification (where applicable)</li>
              <li>Adequacy decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Children&apos;s Privacy</h2>
            <p className="mt-4 text-gray-600">
              Our service is not intended for individuals under 18 years of age. We do not
              knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
            <p className="mt-4 text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by email or through the service. Continued use after changes constitutes
              acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <p className="mt-4 text-gray-600">
              Email: {siteConfig.contactEmail}
              <br />
              {siteConfig.siteName}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
