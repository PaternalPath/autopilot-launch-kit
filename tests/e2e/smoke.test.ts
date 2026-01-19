import { test, expect } from "@playwright/test";

/**
 * Smoke tests - basic checks that the app is working
 *
 * These tests verify that:
 * 1. The home page loads
 * 2. The demo page loads
 * 3. The health API responds
 */

test.describe("Smoke Tests", () => {
  test("home page loads successfully", async ({ page }) => {
    await page.goto("/");

    // Check that the page has loaded
    await expect(page).toHaveTitle(/Example Co/);

    // Check that the header is visible
    await expect(page.locator("header")).toBeVisible();

    // Check that the main content area exists
    await expect(page.locator("main")).toBeVisible();

    // Check that the footer is visible
    await expect(page.locator("footer")).toBeVisible();
  });

  test("demo page loads successfully", async ({ page }) => {
    await page.goto("/demo");

    // Check that the page has the right title
    await expect(page).toHaveTitle(/Demo/);

    // Check that the main heading is visible
    await expect(
      page.getByRole("heading", { name: /See It In Action/i })
    ).toBeVisible();

    // Check that the developer section (StateDemo) is visible
    await expect(
      page.getByRole("heading", { name: /For Developers/i })
    ).toBeVisible();
  });

  test("health endpoint responds with ok", async ({ request }) => {
    const response = await request.get("/api/health");

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.timestamp).toBeDefined();
    expect(data.version).toBeDefined();
  });

  test("navigation works correctly", async ({ page }) => {
    await page.goto("/");

    // Click on Demo link in navigation
    await page.getByRole("link", { name: "Demo" }).first().click();

    // Verify we're on the demo page
    await expect(page).toHaveURL("/demo");
    await expect(
      page.getByRole("heading", { name: /See It In Action/i })
    ).toBeVisible();
  });

  test("pricing page loads successfully", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page).toHaveTitle(/Pricing/);
    await expect(
      page.getByRole("heading", { name: /Simple, transparent pricing/i })
    ).toBeVisible();
  });

  test("faq page loads successfully", async ({ page }) => {
    await page.goto("/faq");

    await expect(page).toHaveTitle(/FAQ/);
  });

  test("intake page loads successfully", async ({ page }) => {
    await page.goto("/intake");

    // Check the form is present by looking for specific form elements
    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
  });
});
