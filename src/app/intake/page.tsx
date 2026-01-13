"use client";

import { useState, FormEvent } from "react";
import { Download, CheckCircle, ArrowRight, ArrowLeft, Building, Mail, User, TrendingUp } from "lucide-react";
import { useToast } from "@/components/Toast";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Input, Textarea, Select } from "@/components/ui/Input";

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

const steps = [
  { id: 1, name: "Contact Info", description: "Basic information" },
  { id: 2, name: "Company Details", description: "About your business" },
  { id: 3, name: "Requirements", description: "Your needs" },
];

export default function IntakePage() {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (step === 2) {
      if (!formData.company.trim()) newErrors.company = "Company name is required";
      if (!formData.industry.trim()) newErrors.industry = "Industry is required";
      if (!formData.monthlyLeadVolume) newErrors.monthlyLeadVolume = "Please select a range";
    }

    if (step === 3) {
      if (!formData.biggestBottleneck) newErrors.biggestBottleneck = "Please select an option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    const submission: IntakeFormData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    const existingSubmissions = localStorage.getItem(STORAGE_KEY);
    const submissions: IntakeFormData[] = existingSubmissions
      ? JSON.parse(existingSubmissions)
      : [];

    submissions.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

    showToast("Your request has been submitted successfully!");
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
    setCurrentStep(1);
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
      <Section padding="lg">
        <Container size="md">
          <Card padding="lg" className="mx-auto max-w-2xl text-center animate-scale-in">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Thank you for your request!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve received your setup request and will be in touch within 24 hours to discuss
              next steps.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button onClick={handleDownloadJSON} variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="h-5 w-5" />
                Download Submissions (JSON)
              </Button>
              <Button onClick={handleReset} variant="ghost">
                Submit Another Request
              </Button>
            </div>
            <div className="mt-8 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                Questions? Email us at{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-blue-600 hover:text-blue-700">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section padding="lg">
      <Container size="md">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request Setup
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your needs and we&apos;ll create a custom proposal for your team.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mt-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all ${
                        currentStep === step.id
                          ? "border-blue-600 bg-blue-600 text-white"
                          : currentStep > step.id
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}
                    >
                      {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-medium text-gray-900">{step.name}</p>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-4 h-0.5 flex-1 transition-all ${
                        currentStep > step.id ? "bg-green-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12">
            <Card padding="lg">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <User className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                  </div>
                  <Input
                    id="name"
                    label="Full Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                    placeholder="John Doe"
                  />
                  <Input
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    placeholder="john@example.com"
                    icon={<Mail className="h-5 w-5" />}
                  />
                </div>
              )}

              {/* Step 2: Company Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Company Details</h2>
                  </div>
                  <Input
                    id="company"
                    label="Company Name"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    error={errors.company}
                    placeholder="Acme Corp"
                  />
                  <Input
                    id="industry"
                    label="Industry"
                    type="text"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    error={errors.industry}
                    placeholder="e.g., SaaS, E-commerce, Consulting"
                  />
                  <Select
                    id="monthlyLeadVolume"
                    label="Monthly Lead Volume"
                    required
                    value={formData.monthlyLeadVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyLeadVolume: e.target.value })}
                    error={errors.monthlyLeadVolume}
                    options={[
                      { value: "", label: "Select range" },
                      { value: "0-50", label: "0-50 leads/month" },
                      { value: "51-100", label: "51-100 leads/month" },
                      { value: "101-250", label: "101-250 leads/month" },
                      { value: "251-500", label: "251-500 leads/month" },
                      { value: "500+", label: "500+ leads/month" },
                    ]}
                  />
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Your Requirements</h2>
                  </div>
                  <Select
                    id="biggestBottleneck"
                    label="Biggest Bottleneck"
                    required
                    value={formData.biggestBottleneck}
                    onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                    error={errors.biggestBottleneck}
                    options={[
                      { value: "", label: "Select issue" },
                      { value: "slow-response", label: "Slow response times" },
                      { value: "manual-qualification", label: "Manual qualification process" },
                      { value: "calendar-management", label: "Calendar management chaos" },
                      { value: "lead-loss", label: "Leads falling through cracks" },
                      { value: "no-automation", label: "No automation at all" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                  <Input
                    id="currentTools"
                    label="Current Tools"
                    type="text"
                    value={formData.currentTools}
                    onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                    placeholder="e.g., HubSpot, Calendly, Google Calendar"
                    helperText="List any tools you currently use"
                  />
                  <Textarea
                    id="notes"
                    label="Additional Notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us anything else we should know about your needs..."
                  />
                </div>
              )}

              {/* Form Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                {currentStep > 1 ? (
                  <Button type="button" onClick={handlePrevious} variant="ghost">
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}
                {currentStep < 3 ? (
                  <Button type="button" onClick={handleNext} variant="primary">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Submit Request
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          </form>
        </div>
      </Container>
    </Section>
  );
}
