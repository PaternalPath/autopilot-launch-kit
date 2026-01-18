# Fortune-500 Template Transformation Plan

## Current Stack Analysis

| Category | Current State |
|----------|---------------|
| Framework | Next.js 16.1 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| UI | Custom components (Header, Footer, Toast) |
| Icons | lucide-react |
| Validation | Zod (available but underutilized) |
| Linting | ESLint 9 + Next.js config |
| Formatting | Prettier 3.7 |
| Testing | None |
| CI/CD | None |
| Node Version | Not pinned |

### Existing Scripts
- `dev` - Start development server
- `build` - Production build
- `start` - Production server
- `lint` - ESLint

### Existing Structure
```
src/
├── app/           # Next.js pages (6 pages exist)
├── components/    # 3 components (Header, Footer, Toast)
└── lib/
    └── config.ts  # Site configuration
```

---

## Gaps vs Acceptance Criteria

### 1. Scripts & Tooling
| Required | Status |
|----------|--------|
| `npm run lint` | ✅ Exists |
| `npm run typecheck` | ❌ Missing |
| `npm run test` | ❌ Missing |
| Node version pinned | ❌ Missing |

### 2. Project Structure
| Required | Status |
|----------|--------|
| src/app | ✅ Exists |
| src/components | ✅ Exists |
| src/lib | ✅ Exists (has config.ts) |
| src/styles | ❌ Missing (styles in globals.css) |
| src/config | ❌ Missing |
| src/types | ❌ Missing |
| tests/ | ❌ Missing |

### 3. Library Patterns
| Required | Status |
|----------|--------|
| src/lib/env.ts | ❌ Missing |
| src/lib/errors.ts | ❌ Missing |
| src/lib/logger.ts | ❌ Missing |
| src/config/constants.ts | ❌ Missing |

### 4. Demo Feature
| Required | Status |
|----------|--------|
| Demo page with states | ⚠️ Exists but needs loading/error/empty states |
| /api/health route | ❌ Missing |

### 5. UI Baseline
| Required | Status |
|----------|--------|
| Layout with header/footer | ✅ Exists |
| Button component | ❌ Inline styles only |
| Input component | ❌ Inline styles only |
| Card component | ❌ Inline styles only |
| Accessible labels | ⚠️ Partial |
| Focus states | ⚠️ Partial |

### 6. Testing
| Required | Status |
|----------|--------|
| Unit tests (Vitest) | ❌ Missing |
| E2E tests (Playwright) | ❌ Missing |
| Test config | ❌ Missing |

### 7. CI/CD
| Required | Status |
|----------|--------|
| GitHub Actions workflow | ❌ Missing |

### 8. Documentation
| Required | Status |
|----------|--------|
| README (template-ready) | ⚠️ Needs rewrite |
| docs/SETUP.md | ❌ Missing |
| docs/DEPLOY_VERCEL.md | ❌ Missing |
| docs/ARCHITECTURE.md | ✅ Exists (needs minor updates) |

### 9. Repo Maturity
| Required | Status |
|----------|--------|
| LICENSE | ❌ Missing |
| CONTRIBUTING.md | ❌ Missing |
| .env.example | ❌ Missing |
| Issue templates | ❌ Missing |

---

## Implementation Plan

### Task 1: Normalize Scripts & Tooling
- [ ] Add `typecheck` script to package.json
- [ ] Add `test` script placeholder
- [ ] Pin Node version (engines + .nvmrc)
- [ ] Verify lint works

### Task 2: Project Structure Reorganization
- [ ] Create src/config/ and move config.ts
- [ ] Create src/types/ with shared types
- [ ] Create src/styles/ (optional, keep globals.css in app)
- [ ] Update import paths

### Task 3: Library Patterns
- [ ] Create src/lib/env.ts (Zod-based, works with no env vars)
- [ ] Create src/lib/errors.ts (typed error helpers)
- [ ] Create src/lib/logger.ts (simple structured logger)
- [ ] Create src/config/constants.ts (no magic numbers)

### Task 4: Demo Feature Enhancement
- [ ] Create /api/health route
- [ ] Enhance demo page with loading/error/empty states
- [ ] Add state demonstration component

### Task 5: UI Component Baseline
- [ ] Create src/components/ui/Button.tsx
- [ ] Create src/components/ui/Input.tsx
- [ ] Create src/components/ui/Card.tsx
- [ ] Ensure accessibility (labels, focus, ARIA)
- [ ] Update existing pages to use new components

### Task 6: Testing Baseline
- [ ] Install Vitest + React Testing Library
- [ ] Configure vitest.config.ts
- [ ] Write tests for env.ts
- [ ] Write tests for /api/health
- [ ] Install Playwright
- [ ] Write smoke tests (home, demo, health)

### Task 7: CI/CD Setup
- [ ] Create .github/workflows/ci.yml
- [ ] Add lint, typecheck, test, build steps
- [ ] Add Playwright step (conditional)

### Task 8: Documentation
- [ ] Rewrite README.md as template README
- [ ] Create docs/SETUP.md
- [ ] Create docs/DEPLOY_VERCEL.md
- [ ] Update docs/ARCHITECTURE.md

### Task 9: Repo Polish
- [ ] Add LICENSE (MIT)
- [ ] Add CONTRIBUTING.md
- [ ] Add .env.example
- [ ] Add .github/ISSUE_TEMPLATE/bug_report.md
- [ ] Add .github/ISSUE_TEMPLATE/feature_request.md

### Task 10: Final Verification
- [ ] npm ci (clean install)
- [ ] npm run lint (passes)
- [ ] npm run typecheck (passes)
- [ ] npm test (passes)
- [ ] npm run build (passes)
- [ ] Manual verification of demo page
- [ ] Verify Vercel deploy simulation

---

## Success Criteria Checklist

```
[ ] Clean machine: npm ci && npm run lint && npm run typecheck && npm test && npm run build
[ ] Vercel: Deploys with zero env vars
[ ] README: Template features checklist included
[ ] README: Clone and rename instructions
[ ] README: Vercel deployment instructions
[ ] docs/SETUP.md: Complete local setup guide
[ ] docs/DEPLOY_VERCEL.md: Step-by-step Vercel guide
[ ] docs/ARCHITECTURE.md: One-page structure guide
[ ] CI: GitHub Actions workflow passes
[ ] Demo: /api/health returns { ok: true, timestamp }
[ ] Demo: Page shows loading/error/empty states
[ ] UI: Accessible components with focus states
[ ] LICENSE: MIT license present
[ ] CONTRIBUTING.md: Contribution guidelines present
[ ] .env.example: Present (can be empty)
```

---

## Estimated Commit Sequence

1. `chore: add typecheck script and pin node version`
2. `refactor: reorganize project structure`
3. `feat: add env, errors, and logger utilities`
4. `feat: add health API route and enhance demo page`
5. `feat: add accessible UI component library`
6. `test: add vitest and unit tests`
7. `test: add playwright and e2e tests`
8. `ci: add github actions workflow`
9. `docs: add template documentation`
10. `chore: add license, contributing, and issue templates`
