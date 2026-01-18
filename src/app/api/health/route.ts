import { NextResponse } from "next/server";
import type { HealthResponse } from "@/types";

/**
 * Health check endpoint
 *
 * GET /api/health
 *
 * Returns a simple health check response for monitoring and deployment verification.
 * This endpoint requires no authentication and should always return quickly.
 */
export async function GET(): Promise<NextResponse<HealthResponse>> {
  const response: HealthResponse = {
    ok: true,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? "0.1.0",
  };

  return NextResponse.json(response);
}

/**
 * Support HEAD requests for lightweight health checks
 */
export async function HEAD(): Promise<NextResponse> {
  return new NextResponse(null, { status: 200 });
}
