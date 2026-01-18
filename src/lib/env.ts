/**
 * Environment variable parsing with Zod
 *
 * This module provides type-safe access to environment variables.
 * All variables have safe defaults, so the app works with ZERO env vars.
 *
 * Usage:
 *   import { env } from "@/lib/env";
 *   console.log(env.NODE_ENV);
 */
import { z } from "zod";

/**
 * Environment variable schema
 *
 * Add new environment variables here with their validation rules.
 * Use .default() to provide fallback values for optional variables.
 */
const envSchema = z.object({
  // Node environment
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // App configuration (all optional with defaults)
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NEXT_PUBLIC_APP_NAME: z.string().optional(),

  // Feature flags (all default to false/disabled)
  NEXT_PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .default("false")
    .transform((val) => val === "true"),

  // API keys (optional - app works without them)
  // Add your API keys here with .optional()
  // Example:
  // STRIPE_SECRET_KEY: z.string().optional(),
  // OPENAI_API_KEY: z.string().optional(),
});

/**
 * Parse and validate environment variables
 *
 * This runs at module load time. If validation fails in development,
 * you'll see a clear error message about what's wrong.
 */
function parseEnv() {
  // In test environment, use minimal defaults
  if (process.env.NODE_ENV === "test") {
    return envSchema.parse({
      NODE_ENV: "test",
    });
  }

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("❌ Invalid environment variables:");
    console.error(parsed.error.flatten().fieldErrors);

    // In production, throw to prevent startup with bad config
    if (process.env.NODE_ENV === "production") {
      throw new Error("Invalid environment variables");
    }

    // In development, return defaults so app can still run
    return envSchema.parse({});
  }

  return parsed.data;
}

/**
 * Validated environment variables
 *
 * Access these throughout your app for type-safe env var usage.
 */
export const env = parseEnv();

/**
 * Type for the environment object
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Check if we're in production
 */
export const isProduction = env.NODE_ENV === "production";

/**
 * Check if we're in development
 */
export const isDevelopment = env.NODE_ENV === "development";

/**
 * Check if we're in test
 */
export const isTest = env.NODE_ENV === "test";
