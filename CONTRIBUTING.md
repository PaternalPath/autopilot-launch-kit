# Contributing

Thank you for your interest in contributing to this project!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/autopilot-launch-kit.git`
3. Install dependencies: `npm ci`
4. Create a branch: `git checkout -b feature/your-feature`

## Development Workflow

### Before Making Changes

1. Pull the latest changes from `main`
2. Create a feature branch with a descriptive name

### Making Changes

1. Make your changes
2. Run quality checks:
   ```bash
   npm run validate
   ```
3. Add or update tests if needed
4. Update documentation if needed

### Committing

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `refactor:` - Code change that neither fixes a bug nor adds a feature
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve form validation issue"
git commit -m "docs: update setup instructions"
```

### Submitting a Pull Request

1. Push your branch: `git push -u origin feature/your-feature`
2. Open a Pull Request against `main`
3. Fill out the PR template
4. Wait for CI checks to pass
5. Request a review

## Code Standards

### TypeScript

- Use strict mode (already configured)
- Avoid `any` types
- Add proper types for function parameters and return values

### React Components

- Use functional components
- Use TypeScript interfaces for props
- Keep components focused and small
- Use composition over inheritance

### Styling

- Use Tailwind CSS utilities
- Avoid custom CSS classes
- Follow existing color and spacing conventions

### Testing

- Write unit tests for utility functions
- Write integration tests for API routes
- Add E2E tests for critical user flows
- Maintain test coverage

## Project Structure

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed structure information.

Key directories:
- `src/app/` - Pages and API routes
- `src/components/` - React components
- `src/lib/` - Utility functions
- `tests/` - Test files

## Reporting Issues

### Bug Reports

Include:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, Node version, browser)

### Feature Requests

Include:
- Description of the feature
- Use case / problem it solves
- Proposed solution (if any)

## Code of Conduct

- Be respectful and inclusive
- Give and accept constructive feedback
- Focus on what's best for the project
- Be patient with reviewers and contributors

## Questions?

Open an issue with the "question" label or start a discussion.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
