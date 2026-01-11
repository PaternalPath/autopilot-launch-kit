"use client";

import { useState, FormEvent } from "react";
import { Download, CheckCircle } from "lucide-react";
import { useToast } from "@/components/Toast";
import { siteConfig } from "@/lib/config";

interface IntakeFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  monthlyLeadVolume: string;
  biggestBottleneck: string;
  currentTools: string;
  notes: string;
  submittedAt: string;
}

const STORAGE_KEY = "intake-submissions";

export default function IntakePage() {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<IntakeFormData>({
    name: "",
    email: "",
    company: "",
    industry: "",
    monthlyLeadVolume: "",
    biggestBottleneck: "",
    currentTools: "",
    notes: "",
    submittedAt: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submission: IntakeFormData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Get existing submissions from localStorage
    const existingSubmissions = localStorage.getItem(STORAGE_KEY);
    const submissions: IntakeFormData[] = existingSubmissions
      ? JSON.parse(existingSubmissions)
      : [];

    // Add new submission
    submissions.push(submission);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

    // Show success toast
    showToast("Your request has been submitted successfully!");

    // Set submitted state
    setSubmitted(true);
  };

  const handleDownloadJSON = () => {
    const existingSubmissions = localStorage.getItem(STORAGE_KEY);
    const submissions: IntakeFormData[] = existingSubmissions
      ? JSON.parse(existingSubmissions)
      : [];

    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `intake-submissions-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("Submissions exported successfully!");
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      monthlyLeadVolume: "",
      biggestBottleneck: "",
      currentTools: "",
      notes: "",
      submittedAt: "",
    });
  };

  if (submitted) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Thank you for your request!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve received your setup request and will be in touch within 24 hours to discuss
              next steps.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleDownloadJSON}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              >
                <Download className="h-5 w-5" />
                Download Submissions (JSON)
              </button>
              <button
                onClick={handleReset}
                className="text-base font-semibold text-blue-600 hover:text-blue-500"
              >
                Submit Another Request
              </button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-600">
                Questions? Email us at{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:text-blue-500">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Request Setup
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your needs and we&apos;ll create a custom proposal for your team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-900">
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-900">
                Industry <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="industry"
                required
                placeholder="e.g., SaaS, E-commerce, Consulting"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="monthlyLeadVolume" className="block text-sm font-medium text-gray-900">
              Monthly Lead Volume <span className="text-red-600">*</span>
            </label>
            <select
              id="monthlyLeadVolume"
              required
              value={formData.monthlyLeadVolume}
              onChange={(e) => setFormData({ ...formData, monthlyLeadVolume: e.target.value })}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select range</option>
              <option value="0-50">0-50 leads/month</option>
              <option value="51-100">51-100 leads/month</option>
              <option value="101-250">101-250 leads/month</option>
              <option value="251-500">251-500 leads/month</option>
              <option value="500+">500+ leads/month</option>
            </select>
          </div>

          <div>
            <label htmlFor="biggestBottleneck" className="block text-sm font-medium text-gray-900">
              Biggest Bottleneck <span className="text-red-600">*</span>
            </label>
            <select
              id="biggestBottleneck"
              required
              value={formData.biggestBottleneck}
              onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select issue</option>
              <option value="slow-response">Slow response times</option>
              <option value="manual-qualification">Manual qualification process</option>
              <option value="calendar-management">Calendar management chaos</option>
              <option value="lead-loss">Leads falling through cracks</option>
              <option value="no-automation">No automation at all</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="currentTools" className="block text-sm font-medium text-gray-900">
              Current Tools
            </label>
            <input
              type="text"
              id="currentTools"
              placeholder="e.g., HubSpot, Calendly, Google Calendar"
              value={formData.currentTools}
              onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-gray-500">List any tools you currently use</p>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-900">
              Additional Notes
            </label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Tell us anything else we should know about your needs..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between pt-6">
            <p className="text-sm text-gray-600">
              <span className="text-red-600">*</span> Required fields
            </p>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
