# Vercel Deployment Guide

This guide covers deploying your Next.js application to Vercel.

## Overview

Vercel is the recommended hosting platform for Next.js applications. It offers:

- Zero-configuration deployments
- Automatic preview deployments for PRs
- Global CDN
- Serverless functions
- Edge computing

## Prerequisites

- A Vercel account ([sign up free](https://vercel.com/signup))
- Your code pushed to GitHub, GitLab, or Bitbucket

## Quick Deploy

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Click the button above to deploy instantly.

### Manual Import

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git repository
4. Click "Deploy"

That's it! No configuration required.

## Vercel Settings

When importing, Vercel auto-detects these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm ci` |
| Node.js Version | 20.x (from `.nvmrc`) |

### No Changes Needed

The default settings work out of the box. You don't need to change anything.

## Environment Variables

### Required Variables

**None!** This template works with zero environment variables.

### Optional Variables

If you want to add features, you can configure these in the Vercel dashboard:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Your production URL |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Enable analytics (`true`/`false`) |

### Adding Environment Variables

1. Go to your project on Vercel
2. Navigate to **Settings** > **Environment Variables**
3. Add your variable with:
   - Name: `YOUR_VARIABLE_NAME`
   - Value: `your-value`
   - Environment: Select which environments need it

## Preview Deployments

Vercel automatically creates preview deployments for every PR:

1. Push a branch or create a PR
2. Vercel builds and deploys automatically
3. A unique URL is created (e.g., `your-project-abc123.vercel.app`)
4. Comment with deployment link appears on the PR

### Preview Environment Variables

You can set different values for preview deployments:
- Production: `api.example.com`
- Preview: `api-staging.example.com`

## Custom Domain

### Adding a Domain

1. Go to **Settings** > **Domains**
2. Enter your domain (e.g., `example.com`)
3. Follow DNS configuration instructions

### Recommended DNS Setup

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `cname.vercel-dns.com` |
| A | `@` | `76.76.21.21` |

### SSL Certificate

Vercel automatically provisions and renews SSL certificates via Let's Encrypt.

## Build Optimization

### Automatic Optimizations

Vercel applies these automatically:
- Image optimization
- Code splitting
- Asset compression
- Edge caching

### Environment-Specific Builds

The build uses `NODE_ENV=production` automatically. No configuration needed.

## Monitoring

### Vercel Dashboard

- **Analytics**: Page views, performance metrics
- **Logs**: Function logs and errors
- **Speed Insights**: Core Web Vitals

### Health Endpoint

Monitor your deployment with the built-in health check:

```bash
curl https://your-domain.vercel.app/api/health
# Returns: {"ok":true,"timestamp":"...","version":"0.1.0"}
```

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Try building locally first:
   ```bash
   npm run build
   ```
3. Ensure all dependencies are in `package.json`

### "Module not found" Errors

- Check import paths (use `@/` aliases)
- Ensure the file exists and is committed
- Check for case-sensitivity issues (Linux is case-sensitive)

### Slow Builds

- Check for large dependencies
- Consider using Turbo for monorepos
- Enable build caching (on by default)

### Function Timeout

Default timeout is 10 seconds (Hobby) or 60 seconds (Pro).

To increase (requires Pro plan):
```js
// In your API route
export const config = {
  maxDuration: 30, // 30 seconds
};
```

### Preview Deployment Not Working

1. Check that the branch is pushed to Git
2. Verify GitHub App permissions
3. Check Vercel project settings

## CI/CD Integration

The GitHub Actions workflow runs before Vercel deploys:

1. PR created → CI runs (lint, typecheck, test, build)
2. CI passes → Vercel creates preview deployment
3. PR merged to main → Vercel deploys to production

### Skipping CI

If needed, add `[skip ci]` to your commit message:
```bash
git commit -m "docs: update readme [skip ci]"
```

## Rollbacks

If a deployment causes issues:

1. Go to **Deployments** in Vercel dashboard
2. Find the last working deployment
3. Click **...** > **Promote to Production**

## Cost Optimization

### Hobby Plan (Free)

- Sufficient for most projects
- 100GB bandwidth/month
- Serverless function execution limits

### When to Upgrade

Consider Pro plan if you need:
- Team collaboration
- Higher limits
- Advanced analytics
- Password protection

## Next Steps

- Set up [custom domain](#custom-domain)
- Configure [environment variables](#optional-variables)
- Enable [Vercel Analytics](https://vercel.com/analytics)
- Set up [status page monitoring](https://vercel.com/docs/observability)
