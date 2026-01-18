import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

describe("env module", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should return default values when no env vars are set", async () => {
    process.env.NODE_ENV = "test";
    const { env } = await import("@/lib/env");

    expect(env.NODE_ENV).toBe("test");
    expect(env.NEXT_PUBLIC_APP_URL).toBeUndefined();
    expect(env.NEXT_PUBLIC_APP_NAME).toBeUndefined();
    expect(env.NEXT_PUBLIC_ENABLE_ANALYTICS).toBe(false);
  });

  it("should parse NEXT_PUBLIC_ENABLE_ANALYTICS as boolean", async () => {
    process.env.NODE_ENV = "development";
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS = "true";
    const { env } = await import("@/lib/env");

    expect(env.NEXT_PUBLIC_ENABLE_ANALYTICS).toBe(true);
  });

  it("should export isProduction, isDevelopment, isTest helpers", async () => {
    process.env.NODE_ENV = "test";
    const { isProduction, isDevelopment, isTest } = await import("@/lib/env");

    expect(isTest).toBe(true);
    expect(isDevelopment).toBe(false);
    expect(isProduction).toBe(false);
  });
});
