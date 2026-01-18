# Local Setup Guide

This guide walks you through setting up the project for local development.

## Prerequisites

- **Node.js 20+** (check with `node --version`)
- **npm 9+** (comes with Node.js)
- **Git** (for version control)

## Quick Setup

```bash
# Clone the repository
git clone https://github.com/your-org/autopilot-launch-kit.git
cd autopilot-launch-kit

# Install dependencies
npm ci

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/autopilot-launch-kit.git
cd autopilot-launch-kit
```

### 2. Install Dependencies

```bash
# Use npm ci for reproducible installs
npm ci
```

### 3. Environment Variables (Optional)

The app works with **zero environment variables**. For optional configuration:

```bash
# Copy example file
cp .env.example .env.local

# Edit as needed
nano .env.local
```

### 4. Start Development Server

```bash
npm run dev
```

The server starts at [http://localhost:3000](http://localhost:3000).

### 5. Run Quality Checks

```bash
# Run all checks
npm run validate

# Or run individually:
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm test            # Unit tests
npm run build       # Production build
```

## IDE Setup

### VS Code (Recommended)

Install these extensions for the best experience:

- **ESLint** - Inline linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript Importer** - Auto imports

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

### Other Editors

The project uses standard tooling that works with any editor:
- ESLint config at `eslint.config.mjs`
- Prettier config at `.prettierrc` (if needed)
- TypeScript config at `tsconfig.json`

## Troubleshooting

### "Module not found" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm ci
```

### TypeScript errors after pulling

```bash
# Restart TypeScript server
# VS Code: Cmd+Shift+P > "TypeScript: Restart TS Server"

# Or delete the build cache
rm -rf .next
```

### Port 3000 already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Node version mismatch

```bash
# Check required version
cat .nvmrc

# If using nvm:
nvm use

# Or install the required version:
nvm install 20
```

### ESLint not working

```bash
# Check ESLint config
npm run lint -- --debug

# Reinstall dependencies
rm -rf node_modules
npm ci
```

### Tests failing

```bash
# Run tests with verbose output
npm test -- --reporter=verbose

# Run a specific test file
npm test -- tests/env.test.ts
```

## Development Workflow

### Making Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make your changes

3. Run quality checks:
   ```bash
   npm run validate
   ```

4. Commit with a clear message:
   ```bash
   git commit -m "feat: add new feature"
   ```

5. Push and create PR:
   ```bash
   git push -u origin feature/your-feature
   ```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

### Running E2E Tests Locally

E2E tests require Playwright browsers:

```bash
# Install browsers (first time only)
npx playwright install chromium

# Run E2E tests
npm run test:e2e
```

## Next Steps

- Read [ARCHITECTURE.md](ARCHITECTURE.md) to understand the codebase
- Read [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md) for deployment instructions
- Check the main [README.md](../README.md) for full documentation
