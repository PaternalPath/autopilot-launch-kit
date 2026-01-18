/**
 * Typed error helpers
 *
 * Provides consistent error handling patterns across the application.
 * Use these instead of throwing raw Error objects.
 *
 * Usage:
 *   import { AppError, isAppError } from "@/lib/errors";
 *   throw new AppError("NOT_FOUND", "User not found");
 */

/**
 * Error codes for the application
 *
 * Add new error codes here as needed.
 */
export const ERROR_CODES = {
  // Client errors (4xx)
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  VALIDATION_ERROR: "VALIDATION_ERROR",

  // Server errors (5xx)
  INTERNAL_ERROR: "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",

  // Custom application errors
  RATE_LIMITED: "RATE_LIMITED",
  NETWORK_ERROR: "NETWORK_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

/**
 * HTTP status codes for each error type
 */
const ERROR_STATUS_CODES: Record<ErrorCode, number> = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 422,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  RATE_LIMITED: 429,
  NETWORK_ERROR: 502,
};

/**
 * Application error class
 *
 * Extends Error with additional metadata for consistent handling.
 */
export class AppError extends Error {
  readonly code: ErrorCode;
  readonly statusCode: number;
  readonly isOperational: boolean;

  constructor(
    code: ErrorCode,
    message: string,
    options?: { cause?: unknown; isOperational?: boolean }
  ) {
    super(message, { cause: options?.cause });
    this.name = "AppError";
    this.code = code;
    this.statusCode = ERROR_STATUS_CODES[code];
    // Operational errors are expected (e.g., validation)
    // Non-operational errors are bugs that need fixing
    this.isOperational = options?.isOperational ?? true;

    // Capture stack trace (V8 engines only)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }

  /**
   * Convert to JSON for API responses
   */
  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        statusCode: this.statusCode,
      },
    };
  }
}

/**
 * Type guard to check if an error is an AppError
 */
export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

/**
 * Helper to create common errors
 */
export const Errors = {
  badRequest: (message = "Bad request") =>
    new AppError("BAD_REQUEST", message),

  unauthorized: (message = "Unauthorized") =>
    new AppError("UNAUTHORIZED", message),

  forbidden: (message = "Forbidden") =>
    new AppError("FORBIDDEN", message),

  notFound: (message = "Not found") =>
    new AppError("NOT_FOUND", message),

  validation: (message: string) =>
    new AppError("VALIDATION_ERROR", message),

  internal: (message = "Internal server error", cause?: unknown) =>
    new AppError("INTERNAL_ERROR", message, { cause, isOperational: false }),

  unavailable: (message = "Service temporarily unavailable") =>
    new AppError("SERVICE_UNAVAILABLE", message),

  rateLimited: (message = "Too many requests") =>
    new AppError("RATE_LIMITED", message),

  network: (message = "Network error", cause?: unknown) =>
    new AppError("NETWORK_ERROR", message, { cause }),
} as const;

/**
 * Safely execute an async operation with error handling
 *
 * Usage:
 *   const result = await tryCatch(fetchUser(userId));
 *   if (!result.ok) {
 *     console.error(result.error);
 *   }
 */
export async function tryCatch<T>(
  promise: Promise<T>
): Promise<{ ok: true; data: T } | { ok: false; error: AppError }> {
  try {
    const data = await promise;
    return { ok: true, data };
  } catch (error) {
    if (isAppError(error)) {
      return { ok: false, error };
    }
    return {
      ok: false,
      error: Errors.internal(
        error instanceof Error ? error.message : "Unknown error",
        error
      ),
    };
  }
}

/**
 * Get a user-friendly message for an error
 */
export function getErrorMessage(error: unknown): string {
  if (isAppError(error)) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}
