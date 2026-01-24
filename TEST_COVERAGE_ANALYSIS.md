# Test Coverage Analysis

## Executive Summary

The Autopilot Launch Kit has a solid testing infrastructure with Vitest for unit tests and Playwright for E2E tests. However, **only ~11% of the source code has dedicated unit tests**. The current tests cover critical utilities (error handling, environment variables) but leave significant gaps in UI components, page logic, and the logger utility.

## Current Coverage Overview

### What's Tested

| File | Lines | Test Coverage | Quality |
|------|-------|---------------|---------|
| `src/lib/errors.ts` | 174 | Comprehensive | Excellent - 21 test cases covering all error types, helpers, and utilities |
| `src/lib/env.ts` | 100 | Good | Tests default values, boolean parsing, environment helpers |
| `src/app/api/health/route.ts` | 27 | Good | Tests GET/HEAD endpoints, response structure |
| All pages | N/A | E2E only | Basic smoke tests verify pages load |

### What's NOT Tested

| File | Lines | Priority | Risk Level |
|------|-------|----------|------------|
| `src/lib/logger.ts` | 153 | **High** | Medium - Core utility used throughout app |
| `src/components/ui/Button.tsx` | 130 | **High** | Medium - Reusable component with multiple variants |
| `src/components/StateDemo.tsx` | 202 | **High** | Medium - Complex state management logic |
| `src/app/intake/page.tsx` | 302 | **High** | High - Form handling with localStorage |
| `src/components/Header.tsx` | 99 | Medium | Low - UI rendering |
| `src/components/ui/Input.tsx` | ~60 | Medium | Low - Reusable form component |
| `src/components/ui/Card.tsx` | ~40 | Low | Low - Simple presentational component |
| `src/components/Footer.tsx` | 50 | Low | Low - Static content |
| `src/config/site.ts` | 37 | Low | Low - Static configuration |

---

## Recommended Test Improvements

### 1. Logger Utility Tests (Priority: HIGH)

**File:** `src/lib/logger.ts`
**Why:** The logger is a foundational utility with important logic for log level filtering, environment-aware behavior, and structured output formatting.

**Recommended test file:** `tests/logger.test.ts`

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { logger } from "@/lib/logger";

describe("logger", () => {
  describe("shouldLog", () => {
    it("should skip all logs in test environment without LOG_LEVEL");
    it("should respect LOG_LEVEL when set");
    it("should skip debug logs in production");
    it("should log all levels in development");
  });

  describe("formatEntry", () => {
    it("should format entry with timestamp and level");
    it("should include context when provided");
    it("should handle empty context");
  });

  describe("log methods", () => {
    it("should call console.debug for debug level");
    it("should call console.info for info level");
    it("should call console.warn for warn level");
    it("should call console.error for error level");
  });

  describe("child logger", () => {
    it("should merge default context with per-call context");
    it("should preserve all log methods");
  });
});
```

---

### 2. Button Component Tests (Priority: HIGH)

**File:** `src/components/ui/Button.tsx`
**Why:** Reusable component with 5 variants, 3 sizes, loading state, and accessibility attributes. Complex enough to warrant unit tests.

**Recommended test file:** `tests/components/Button.test.tsx`

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  describe("variants", () => {
    it("should render primary variant with correct styles");
    it("should render secondary variant with correct styles");
    it("should render outline variant with correct styles");
    it("should render ghost variant with correct styles");
    it("should render danger variant with correct styles");
  });

  describe("sizes", () => {
    it("should render sm size with correct padding");
    it("should render md size with correct padding");
    it("should render lg size with correct padding");
  });

  describe("loading state", () => {
    it("should show spinner when isLoading is true");
    it("should disable button when isLoading is true");
    it("should set aria-busy when loading");
  });

  describe("fullWidth", () => {
    it("should apply w-full class when fullWidth is true");
  });

  describe("interactions", () => {
    it("should call onClick handler when clicked");
    it("should not call onClick when disabled");
    it("should forward ref correctly");
  });
});
```

---

### 3. StateDemo Component Tests (Priority: HIGH)

**File:** `src/components/StateDemo.tsx`
**Why:** Contains significant async state management logic that could break without warning. Tests verify the state machine works correctly.

**Recommended test file:** `tests/components/StateDemo.test.tsx`

```typescript
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StateDemo } from "@/components/StateDemo";

describe("StateDemo", () => {
  describe("initial state", () => {
    it("should render idle state initially");
    it("should show all control buttons enabled");
  });

  describe("loading state", () => {
    it("should show loading indicator when fetching");
    it("should disable buttons during loading");
  });

  describe("success state", () => {
    it("should display loaded items after successful fetch");
    it("should show correct item count");
  });

  describe("empty state", () => {
    it("should show empty state message when no items");
  });

  describe("error state", () => {
    it("should display error message on failure");
    it("should show retry button");
  });

  describe("reset functionality", () => {
    it("should return to idle state when reset is clicked");
  });
});
```

---

### 4. Intake Form Tests (Priority: HIGH)

**File:** `src/app/intake/page.tsx`
**Why:** Critical user-facing form with localStorage persistence, validation, and multiple interaction flows. High risk of regression.

**Recommended test file:** `tests/pages/intake.test.tsx`

```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IntakePage from "@/app/intake/page";

// Mock dependencies
vi.mock("@/components/Toast", () => ({
  useToast: () => ({ showToast: vi.fn() }),
}));

describe("IntakePage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("form rendering", () => {
    it("should render all required fields");
    it("should show required field indicators");
  });

  describe("form validation", () => {
    it("should require name field");
    it("should require email field");
    it("should require company field");
    it("should validate email format");
  });

  describe("form submission", () => {
    it("should save submission to localStorage");
    it("should show success state after submission");
    it("should show toast notification");
  });

  describe("post-submission", () => {
    it("should show download button after submission");
    it("should allow submitting another request");
  });

  describe("JSON download", () => {
    it("should download submissions as JSON file");
  });
});
```

---

### 5. Input Component Tests (Priority: MEDIUM)

**File:** `src/components/ui/Input.tsx`
**Recommended test file:** `tests/components/Input.test.tsx`

Focus areas:
- Error state display
- Label rendering
- Required field indicator
- Forwarding refs
- Disabled state

---

### 6. Header Component Tests (Priority: MEDIUM)

**File:** `src/components/Header.tsx`
**Recommended test file:** `tests/components/Header.test.tsx`

Focus areas:
- Navigation link rendering
- Mobile menu toggle (if applicable)
- Active link highlighting
- Accessibility (navigation landmark)

---

### 7. E2E Test Expansion (Priority: MEDIUM)

The current E2E tests are basic smoke tests. Expand to cover:

```typescript
// tests/e2e/intake-form.test.ts
test.describe("Intake Form E2E", () => {
  test("should complete full form submission flow");
  test("should show validation errors for empty required fields");
  test("should persist data across page reloads");
  test("should allow downloading submissions");
});

// tests/e2e/demo-interactions.test.ts
test.describe("Demo Page Interactions", () => {
  test("should cycle through all async states");
  test("should handle error state and retry");
});
```

---

## Testing Patterns Already Established

The codebase has good testing patterns you should follow:

1. **Vitest with Testing Library** - Use `@testing-library/react` for component tests
2. **Mock setup** - `tests/setup.tsx` mocks `next/navigation` and `next/link`
3. **Describe blocks** - Group related tests with `describe()`
4. **Path aliases** - Use `@/` imports in tests

---

## Test Coverage Metrics Goal

| Metric | Current | Target |
|--------|---------|--------|
| Modules with unit tests | 3/18 | 10/18 |
| UI components with tests | 0/7 | 5/7 |
| Pages with unit tests | 0/6 | 2/6 (critical ones) |
| E2E test scenarios | 8 | 15+ |
| Overall line coverage | ~11% | 60%+ |

---

## Implementation Priorities

### Phase 1: Core Utilities (1-2 days)
1. Add `tests/logger.test.ts`

### Phase 2: Critical Components (2-3 days)
1. Add `tests/components/Button.test.tsx`
2. Add `tests/components/StateDemo.test.tsx`
3. Add `tests/components/Input.test.tsx`

### Phase 3: Page Tests (2-3 days)
1. Add `tests/pages/intake.test.tsx`
2. Expand E2E tests for intake form

### Phase 4: Secondary Components (1-2 days)
1. Add `tests/components/Header.test.tsx`
2. Add `tests/components/Toast.test.tsx`

---

## Quick Wins

These tests would provide immediate value with minimal effort:

1. **Logger tests** - Pure functions, easy to test, high value
2. **Button variant tests** - Snapshot or class assertion tests
3. **E2E form submission** - Catches regressions in critical user flow

---

## Conclusion

The current test suite provides a solid foundation with excellent coverage of error handling utilities. To reach production-grade quality for a "Fortune 500-grade template," focus on:

1. Testing the logger utility (foundational infrastructure)
2. Adding component tests for reusable UI elements
3. Testing form submission logic with mocked localStorage
4. Expanding E2E tests for critical user journeys

This will significantly reduce regression risk and improve maintainability as the template grows.
