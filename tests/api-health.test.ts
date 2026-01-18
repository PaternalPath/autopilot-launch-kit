import { describe, it, expect } from "vitest";
import { GET, HEAD } from "@/app/api/health/route";

describe("/api/health endpoint", () => {
  it("GET should return ok: true and timestamp", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("ok", true);
    expect(data).toHaveProperty("timestamp");
    expect(new Date(data.timestamp).toISOString()).toBe(data.timestamp);
  });

  it("GET should return a valid ISO timestamp", async () => {
    const response = await GET();
    const data = await response.json();

    const timestamp = new Date(data.timestamp);
    expect(timestamp).toBeInstanceOf(Date);
    expect(isNaN(timestamp.getTime())).toBe(false);
  });

  it("GET should return version", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data).toHaveProperty("version");
    expect(typeof data.version).toBe("string");
  });

  it("HEAD should return 200 status", async () => {
    const response = await HEAD();

    expect(response.status).toBe(200);
  });
});
