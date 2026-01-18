/**
 * Application constants
 *
 * Centralized constants to avoid magic numbers and strings.
 * Import from here instead of hardcoding values.
 */

/** API response status codes */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

/** Local storage keys */
export const STORAGE_KEYS = {
  INTAKE_SUBMISSIONS: "intake-submissions",
  THEME_PREFERENCE: "theme-preference",
} as const;

/** UI timing constants (in milliseconds) */
export const TIMING = {
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  TRANSITION_DURATION: 200,
} as const;

/** Breakpoints matching Tailwind defaults */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

/** Form validation limits */
export const VALIDATION = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  EMAIL_MAX_LENGTH: 255,
  MESSAGE_MAX_LENGTH: 5000,
} as const;
