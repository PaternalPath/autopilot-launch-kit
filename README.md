# Autopilot Launch Kit

A Fortune-500-grade Next.js template for building production-ready web applications. Vercel-ready out of the box with **zero secrets required**.

## Template Features

- [x] **Next.js 16** with App Router
- [x] **TypeScript** strict mode
- [x] **Tailwind CSS v4** for styling
- [x] **ESLint + Prettier** for code quality
- [x] **Vitest** for unit testing
- [x] **Playwright** for E2E testing
- [x] **GitHub Actions CI** (lint, typecheck, test, build)
- [x] **Vercel-ready** deployment (zero config)
- [x] **Accessible UI components** (Button, Input, Card)
- [x] **Environment handling** with Zod (works with no env vars)
- [x] **Error handling patterns** (typed errors, tryCatch)
- [x] **Structured logging** (simple logger utility)
- [x] **Demo page** with loading/error/empty state patterns
- [x] **Health check API** (`/api/health`)

## Quickstart

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Open http://localhost:3000
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript check |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run validate` | Run all checks (lint + typecheck + test + build) |

## How to Clone and Rename

1. **Clone or use as template:**
   ```bash
   # Option A: Use GitHub's "Use this template" button
   # Option B: Clone and remove git history
   git clone https://github.com/your-org/autopilot-launch-kit.git my-new-project
   cd my-new-project
   rm -rf .git
   git init
   ```

2. **Update package.json:**
   ```json
   {
     "name": "your-project-name",
     "version": "0.1.0"
   }
   ```

3. **Update site configuration:**
   Edit `src/config/site.ts`:
   ```typescript
   export const siteConfig = {
     siteName: "Your Company",
     tagline: "Your Tagline",
     description: "Your description",
     primaryCTAUrl: "https://your-calendar-link.com",
     // ...
   }
   ```

4. **Update app title:**
   The title is automatically set from `siteConfig` in `src/app/layout.tsx`.

5. **Update this README:**
   Replace template content with your project-specific documentation.

6. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial commit from template"
   git push -u origin main
   ```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI workflow
├── docs/
│   ├── ARCHITECTURE.md      # Architecture overview
│   ├── DEPLOY_VERCEL.md     # Vercel deployment guide
│   ├── PLAN.md              # Template transformation plan
│   └── SETUP.md             # Local setup guide
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/
│   │   │   └── health/      # Health check endpoint
│   │   ├── demo/            # Demo page with state patterns
│   │   ├── faq/             # FAQ page
│   │   ├── intake/          # Lead intake form
│   │   ├── pricing/         # Pricing page
│   │   ├── privacy/         # Privacy policy
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── StateDemo.tsx    # State pattern examples
│   │   └── Toast.tsx
│   ├── config/
│   │   ├── constants.ts     # App constants
│   │   ├── site.ts          # Site configuration
│   │   └── index.ts
│   ├── lib/
│   │   ├── env.ts           # Environment variable parsing
│   │   ├── errors.ts        # Error handling utilities
│   │   ├── logger.ts        # Structured logging
│   │   └── index.ts
│   └── types/
│       └── index.ts         # Shared type definitions
├── tests/
│   ├── e2e/
│   │   └── smoke.test.ts    # Playwright smoke tests
│   ├── api-health.test.ts   # API unit tests
│   ├── env.test.ts          # Env module tests
│   ├── errors.test.ts       # Error module tests
│   └── setup.tsx            # Test setup
├── .env.example             # Example environment variables
├── .nvmrc                   # Node version for Vercel
├── playwright.config.ts     # Playwright configuration
├── vitest.config.ts         # Vitest configuration
└── package.json
```

## Deploy to Vercel

**One-click deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Manual deployment:**

1. Import your repository into Vercel
2. Framework preset: Next.js (auto-detected)
3. Build command: `npm run build`
4. Output directory: `.next`
5. No environment variables required

See [docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md) for detailed instructions.

## House Rules

### Coding Standards

- **TypeScript:** Use strict mode, avoid `any`
- **Components:** Functional components with proper props typing
- **Imports:** Use `@/` path aliases
- **Styling:** Tailwind CSS utilities, avoid inline styles
- **State:** React hooks, avoid global state unless necessary

### No Secrets in Code

- Never commit API keys, passwords, or secrets
- Use environment variables for sensitive configuration
- The app must work with ZERO env vars for basic functionality

### Testing Requirements

- Unit tests for utilities and hooks
- E2E tests for critical user flows
- Run `npm run validate` before pushing

## Environment Variables

This template works with **zero environment variables**. All features work out of the box.

For optional configuration, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Available variables:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | No | `development` | Environment mode |
| `NEXT_PUBLIC_APP_URL` | No | - | Public app URL |
| `NEXT_PUBLIC_APP_NAME` | No | - | App name override |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | No | `false` | Enable analytics |

## Documentation

- [Local Setup Guide](docs/SETUP.md)
- [Vercel Deployment](docs/DEPLOY_VERCEL.md)
- [Architecture Overview](docs/ARCHITECTURE.md)

## License

MIT - See [LICENSE](LICENSE) for details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
