/**
 * Shared type definitions
 *
 * Types used across multiple components/modules.
 * Keep component-specific types in their respective files.
 */

/** API response wrapper for consistent response shapes */
export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

/** Health check response */
export interface HealthResponse {
  ok: boolean;
  timestamp: string;
  version?: string;
}

/** Intake form submission data */
export interface IntakeFormData {
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

/** Generic async state for data fetching */
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };
