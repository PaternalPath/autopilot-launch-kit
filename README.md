# Autopilot Launch Kit

A polished marketing and intake site for the Lead-to-Booking Autopilot system. Built with Next.js, TypeScript, and Tailwind CSS, this site converts visitors into booked calls through automated lead qualification and scheduling.

## Overview

This is a production-ready marketing site that showcases an automated lead qualification and booking system. The site includes comprehensive information pages, an intake form with local storage, and clear CTAs that drive conversions.

## Pages

- **/** - Landing page with hero, benefits, how it works, deliverables, pricing preview, FAQ preview, and CTAs
- **/pricing** - Detailed pricing tiers (Starter, Pro, Managed) with feature comparisons
- **/intake** - Lead intake form with localStorage persistence and JSON export
- **/demo** - Demo information and interactive demo link
- **/faq** - Comprehensive FAQ organized by category
- **/privacy** - Privacy policy and data practices

## Features

- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Toast Notifications** - Clean success/error messaging system
- **Local Storage** - Intake form submissions saved locally with JSON export
- **Configuration System** - Centralized config for easy customization
- **Clean Navigation** - Header with mobile menu and footer with site links
- **No Hardcoded URLs** - All URLs managed through configuration
- **SEO Friendly** - Proper metadata and semantic HTML

## Tech Stack

- **Framework:** Next.js 16.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Validation:** Zod 4
- **Fonts:** Geist Sans & Geist Mono

## Quickstart

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

All site configuration is centralized in `src/lib/config.ts`:

```typescript
export const siteConfig = {
  siteName: "Example Co.",
  tagline: "Lead → Booking Autopilot",
  primaryCTAUrl: "https://calendly.com/example-co/discovery-call",
  demoUrl: "https://demo.example-co.com",
  contactEmail: "hello@example-co.com",
  // ... more config
}
```

**To customize:**

1. Update `src/lib/config.ts` with your details
2. Replace placeholder URLs with real calendar/demo links
3. Update contact email
4. Customize navigation items if needed

## Intake Form Storage

The intake form (`/intake`) uses browser localStorage to store submissions:

- **Storage Key:** `intake-submissions`
- **Format:** JSON array of submission objects
- **Export:** Download all submissions as JSON file
- **Fields:** name, email, company, industry, monthly lead volume, bottleneck, tools, notes, timestamp

To access submissions programmatically:

```javascript
const submissions = JSON.parse(localStorage.getItem('intake-submissions') || '[]');
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Import this repository into Vercel
2. Framework preset: Next.js (auto-detected)
3. No environment variables required for basic deployment
4. Click Deploy

**Optional:** Set up environment variables if you want server-side integrations in the future.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with Header/Footer
│   ├── page.tsx      # Landing page
│   ├── pricing/      # Pricing page
│   ├── intake/       # Intake form page
│   ├── demo/         # Demo page
│   ├── faq/          # FAQ page
│   └── privacy/      # Privacy policy page
├── components/       # React components
│   ├── Header.tsx    # Site header with navigation
│   ├── Footer.tsx    # Site footer
│   └── Toast.tsx     # Toast notification system
└── lib/              # Utilities and configuration
    └── config.ts     # Site configuration
```

## Privacy & Data

- No server-side data collection
- Intake submissions stored locally in browser
- No third-party tracking (add analytics as needed)
- Privacy policy page included
- GDPR-friendly by default

## Customization Tips

1. **Colors:** Update Tailwind classes (currently blue-600 theme)
2. **Fonts:** Modify font imports in `src/app/layout.tsx`
3. **Content:** Update copy in page components
4. **Pricing:** Edit tiers in `src/app/pricing/page.tsx`
5. **FAQs:** Modify questions in `src/app/faq/page.tsx`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT - See LICENSE file for details

## Support

For issues or questions, open an issue in this repository.
