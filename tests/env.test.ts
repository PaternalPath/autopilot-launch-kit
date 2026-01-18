import { describe, it, expect, beforeEach, vi } from "vitest";

describe("env module", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("should return default values when no env vars are set", async () => {
    vi.stubEnv("NODE_ENV", "test");
    const { env } = await import("@/lib/env");

    expect(env.NODE_ENV).toBe("test");
    expect(env.NEXT_PUBLIC_APP_URL).toBeUndefined();
    expect(env.NEXT_PUBLIC_APP_NAME).toBeUndefined();
    expect(env.NEXT_PUBLIC_ENABLE_ANALYTICS).toBe(false);

    vi.unstubAllEnvs();
  });

  it("should parse NEXT_PUBLIC_ENABLE_ANALYTICS as boolean", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("NEXT_PUBLIC_ENABLE_ANALYTICS", "true");
    const { env } = await import("@/lib/env");

    expect(env.NEXT_PUBLIC_ENABLE_ANALYTICS).toBe(true);

    vi.unstubAllEnvs();
  });

  it("should export isProduction, isDevelopment, isTest helpers", async () => {
    vi.stubEnv("NODE_ENV", "test");
    const { isProduction, isDevelopment, isTest } = await import("@/lib/env");

    expect(isTest).toBe(true);
    expect(isDevelopment).toBe(false);
    expect(isProduction).toBe(false);

    vi.unstubAllEnvs();
  });
});
