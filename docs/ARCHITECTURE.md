# Architecture Documentation

## Overview

This document describes the architecture of the Autopilot Launch Kit, a marketing and intake site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Application Architecture

### Framework Choice

**Next.js 16 with App Router** provides:
- Server-side rendering for SEO
- File-based routing
- Built-in optimization
- Production-ready defaults

### Tech Stack Rationale

- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first styling with minimal config
- **lucide-react** - Lightweight, consistent icon system
- **Zod** - Runtime type validation (ready for form validation expansion)

## Routing Structure

All routes use Next.js App Router conventions:

```
/                 → Landing page (src/app/page.tsx)
/pricing          → Pricing tiers (src/app/pricing/page.tsx)
/intake           → Intake form (src/app/intake/page.tsx)
/demo             → Demo information (src/app/demo/page.tsx)
/faq              → FAQ page (src/app/faq/page.tsx)
/privacy          → Privacy policy (src/app/privacy/page.tsx)
```

### Page Metadata

Each route exports metadata for SEO:

```typescript
export const metadata = {
  title: `Page Title - ${siteConfig.siteName}`,
  description: "Page description",
};
```

## Component Structure

### Layout Components

**Root Layout** (`src/app/layout.tsx`)
- Wraps all pages
- Provides Header and Footer
- Includes ToastProvider for notifications
- Configures fonts and base HTML structure

**Header** (`src/components/Header.tsx`)
- Client component (uses useState for mobile menu)
- Responsive navigation
- Mobile hamburger menu
- Primary CTA button

**Footer** (`src/components/Footer.tsx`)
- Server component (no interactivity)
- Site navigation links
- Legal links
- Copyright notice

### Utility Components

**Toast System** (`src/components/Toast.tsx`)
- Context-based notification system
- Auto-dismiss after 5 seconds
- Success and error variants
- Used for form submissions

## Configuration System

**Location:** `src/lib/config.ts`

Centralized configuration prevents hardcoded values:

```typescript
export const siteConfig = {
  siteName: string,
  tagline: string,
  description: string,
  primaryCTAUrl: string,    // Calendly or booking link
  demoUrl: string,          // Demo environment
  contactEmail: string,
  navigation: Array<{name, href}>,
}
```

**Benefits:**
- Single source of truth
- Easy customization
- Type-safe access
- Prevents URL duplication

## Intake Form Architecture

### Storage Strategy

**Client-side localStorage** approach:

**Pros:**
- No backend required
- Instant persistence
- Privacy-friendly (data never leaves user's browser)
- Simple deployment

**Cons:**
- Limited to ~5MB
- Scoped to single browser
- No cross-device sync

**Data Structure:**

```typescript
interface IntakeFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  monthlyLeadVolume: string;
  biggestBottleneck: string;
  currentTools: string;
  notes: string;
  submittedAt: string;  // ISO 8601 timestamp
}
```

**Storage Format:**

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Example Corp",
    "industry": "SaaS",
    "monthlyLeadVolume": "101-250",
    "biggestBottleneck": "manual-qualification",
    "currentTools": "HubSpot, Calendly",
    "notes": "Looking to scale",
    "submittedAt": "2026-01-11T12:00:00.000Z"
  }
]
```

### Export Functionality

**JSON Download:**
1. Retrieve submissions from localStorage
2. Stringify with pretty-printing (`JSON.stringify(data, null, 2)`)
3. Create Blob with MIME type `application/json`
4. Generate temporary URL
5. Trigger download with dynamic filename
6. Clean up blob URL

**Filename format:** `intake-submissions-YYYY-MM-DD.json`

### Form Flow

1. **Initial State** - Empty form shown
2. **User Input** - Controlled components update state
3. **Validation** - HTML5 required attributes
4. **Submit** - Add timestamp, retrieve existing submissions
5. **Save** - Append to localStorage array
6. **Success** - Show toast, display thank-you screen
7. **Export** - Download JSON on demand
8. **Reset** - Clear state, show form again

## State Management

**Minimal approach** - No global state library needed:

- **Server Components** - Default for static content
- **Client Components** - Only where needed (forms, mobile menu, toasts)
- **React useState** - Local component state
- **React Context** - Toast notifications only

## Styling Approach

**Tailwind CSS utility-first:**

- Inline utilities for all styling
- No custom CSS files (except globals.css for base)
- Responsive modifiers (sm:, md:, lg:)
- Consistent spacing scale
- Blue-600 primary color theme

**Design System:**
- Primary: Blue (bg-blue-600, text-blue-600, etc.)
- Success: Green (bg-green-600, text-green-600)
- Error: Red (bg-red-600, text-red-600)
- Neutral: Gray scale (gray-50 to gray-900)

## Performance Considerations

### Bundle Optimization

- Server components by default (smaller client bundles)
- Dynamic imports not needed (small app)
- Icons from single package (lucide-react)
- No heavy dependencies

### Rendering Strategy

- **Static pages** - Landing, Pricing, Demo, FAQ, Privacy
- **Client pages** - Intake (requires form interactivity)
- **No API routes** - Fully static deployment possible

### Image Optimization

Currently no images except Next.js placeholders. For future images:
- Use Next.js `<Image>` component
- Optimize before commit
- Use appropriate formats (WebP/AVIF)

## Security Considerations

### Client-side Storage

- No sensitive data stored (user choice to submit)
- Data remains local to user's browser
- No authentication required
- No server-side PII

### XSS Prevention

- React escapes all user input by default
- No `dangerouslySetInnerHTML` usage
- Form inputs controlled and typed

### CSRF Protection

Not applicable (no server-side mutations)

## Extensibility Points

### Adding Server-side Storage

To migrate from localStorage to database:

1. Create API route: `src/app/api/intake/route.ts`
2. Update form to POST to API
3. Store in database (Postgres, MongoDB, etc.)
4. Add authentication if needed
5. Update export to fetch from API

### Adding Analytics

Insert tracking code in `src/app/layout.tsx`:

```typescript
<body>
  <GoogleAnalytics />
  <ToastProvider>
    {/* ... */}
  </ToastProvider>
</body>
```

### Adding Email Notifications

1. Create API route for form submission
2. Use email service (SendGrid, Resend, etc.)
3. Send notification on intake submit
4. Return success/error to client

### Multi-language Support

1. Add next-intl or similar
2. Create locale folders
3. Extract strings to translation files
4. Update config for supported locales

## Deployment Architecture

### Vercel (Recommended)

- Automatic deployments from git
- Edge network CDN
- Instant cache invalidation
- Zero config

**Build process:**
1. `npm install` - Install dependencies
2. `npm run build` - Build Next.js app
3. Static analysis and optimization
4. Deploy to edge network

### Alternative Platforms

- **Netlify** - Similar to Vercel
- **Cloudflare Pages** - Edge-based
- **AWS Amplify** - AWS ecosystem
- **Static hosting** - Export as static site if no server features needed

## Testing Strategy

**Current:** Manual testing before deployment

**Recommended additions:**
- Unit tests for utility functions (Vitest)
- Component tests (React Testing Library)
- E2E tests for critical flows (Playwright)
- Accessibility tests (axe-core)

## Monitoring & Observability

**Current:** None (static site)

**Future considerations:**
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Vercel Analytics)
- Uptime monitoring (UptimeRobot)

## Future Enhancements

### Phase 2 Ideas

1. **Server-side storage** - Replace localStorage with database
2. **Admin dashboard** - View all submissions
3. **Email notifications** - Alert on new submissions
4. **Calendar integration** - Direct booking vs. intake form
5. **Lead scoring** - Automatic qualification
6. **A/B testing** - Optimize conversion rates
7. **Live chat** - Real-time support
8. **Testimonials section** - Social proof
9. **Blog/Resources** - Content marketing
10. **Multi-step forms** - Improved UX for long forms

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Prefer function components
- Use async/await over promises
- Keep components small and focused
- Extract reusable logic

### Git Workflow

- Feature branches from main
- Conventional commits (feat:, fix:, docs:, chore:)
- PR reviews before merge
- Squash merge to keep history clean

### Performance Budget

- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lighthouse score > 90
- Bundle size < 200KB (current: ~50KB)

## Conclusion

This architecture prioritizes:
- **Simplicity** - No over-engineering
- **Performance** - Fast loads, minimal JS
- **Maintainability** - Clear structure, good docs
- **Deployability** - Works on any platform
- **Extensibility** - Easy to add features

The result is a production-ready marketing site that converts visitors into leads efficiently.
