# Architecture Overview

A concise guide to the codebase structure and conventions.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Testing | Vitest + Playwright |
| CI/CD | GitHub Actions |

## Directory Structure

```
src/
├── app/           # Pages and API routes (Next.js App Router)
├── components/    # React components
│   └── ui/        # Reusable UI primitives
├── config/        # Configuration files
├── lib/           # Utility functions
└── types/         # TypeScript type definitions
```

## Where to Put Code

### Pages and Routes → `src/app/`

```
src/app/
├── page.tsx          # Home page (/)
├── layout.tsx        # Root layout (wraps all pages)
├── demo/page.tsx     # /demo
├── api/
│   └── health/
│       └── route.ts  # /api/health
```

**Convention:** Each folder = route segment. `page.tsx` = page component.

### React Components → `src/components/`

```
src/components/
├── ui/               # Generic, reusable (Button, Input, Card)
├── Header.tsx        # App-specific layout components
├── Footer.tsx
└── StateDemo.tsx     # Feature-specific components
```

**Convention:**
- `ui/` = Design system primitives (no business logic)
- Root level = App-specific components

### Configuration → `src/config/`

```
src/config/
├── site.ts           # Site name, URLs, navigation
├── constants.ts      # App constants (timing, storage keys)
└── index.ts          # Barrel export
```

**Usage:** `import { siteConfig } from "@/config"`

### Utilities → `src/lib/`

```
src/lib/
├── env.ts            # Environment variable parsing
├── errors.ts         # Error handling utilities
├── logger.ts         # Structured logging
└── index.ts          # Barrel export
```

**Usage:** `import { env, logger, Errors } from "@/lib"`

### Types → `src/types/`

```
src/types/
└── index.ts          # Shared type definitions
```

**Convention:** Only types used across multiple files. Keep component-specific types with their components.

## Key Patterns

### Environment Variables

```typescript
// src/lib/env.ts - Zod parsing with defaults
import { env, isDevelopment } from "@/lib/env";

// Works with ZERO env vars - all have defaults
console.log(env.NODE_ENV); // "development"
```

### Error Handling

```typescript
// src/lib/errors.ts - Typed errors
import { Errors, tryCatch, getErrorMessage } from "@/lib/errors";

// Throw typed errors
throw Errors.notFound("User not found");

// Safe async execution
const result = await tryCatch(fetchUser(id));
if (!result.ok) {
  console.error(result.error.message);
}
```

### Logging

```typescript
// src/lib/logger.ts - Structured logging
import { logger } from "@/lib/logger";

logger.info("User signed in", { userId: "123" });
logger.error("Failed to fetch", { error: err.message });
```

### UI Components

```typescript
// src/components/ui/ - Accessible primitives
import { Button, Input, Card } from "@/components/ui";

<Button variant="primary" isLoading={loading}>
  Submit
</Button>

<Input label="Email" error={errors.email} />
```

## Data Flow

```
User Action → Component State → localStorage/API → UI Update
```

**No global state library.** Use:
- `useState` for component state
- `useContext` for shared state (Toast notifications)
- Server components for static content

## Import Conventions

```typescript
// Use path aliases
import { siteConfig } from "@/config";
import { Button } from "@/components/ui";
import { logger } from "@/lib";
import type { HealthResponse } from "@/types";

// NOT relative imports for cross-directory
// ❌ import { siteConfig } from "../../config/site";
```

## Server vs Client Components

| Type | Use Case | Marker |
|------|----------|--------|
| Server (default) | Static content, data fetching | None |
| Client | Interactivity, hooks, browser APIs | `"use client"` |

```typescript
// Server component (default) - no marker needed
export default function Page() {
  return <div>Static content</div>;
}

// Client component - add marker at top
"use client";
export default function Form() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={...} />;
}
```

## Testing

```
tests/
├── e2e/              # Playwright E2E tests
│   └── smoke.test.ts
├── env.test.ts       # Unit tests for lib/env
├── errors.test.ts    # Unit tests for lib/errors
├── api-health.test.ts
└── setup.tsx         # Test setup and mocks
```

**Run tests:**
```bash
npm test          # Unit tests
npm run test:e2e  # E2E tests
```

## API Routes

```typescript
// src/app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
}
```

**Convention:** Use `route.ts` with HTTP method exports (`GET`, `POST`, etc.)

## Styling

Tailwind CSS utilities only. No custom CSS classes.

```tsx
// ✅ Good
<button className="bg-blue-600 px-4 py-2 rounded-md text-white">

// ❌ Avoid
<button className="submit-button">  // custom class
<button style={{ color: 'blue' }}>  // inline styles
```

## Quick Reference

| Task | Location |
|------|----------|
| Add a new page | `src/app/[route]/page.tsx` |
| Add an API endpoint | `src/app/api/[route]/route.ts` |
| Add a UI component | `src/components/ui/ComponentName.tsx` |
| Add a feature component | `src/components/FeatureName.tsx` |
| Add configuration | `src/config/site.ts` or `constants.ts` |
| Add a utility function | `src/lib/[module].ts` |
| Add shared types | `src/types/index.ts` |
| Add a unit test | `tests/[module].test.ts` |
| Add an E2E test | `tests/e2e/[feature].test.ts` |
