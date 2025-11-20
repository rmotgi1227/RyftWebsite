# Google Analytics Setup

## Overview
Google Analytics is now integrated into the RYFT landing page to track user interactions, page views, and form submissions.

## Setup Steps

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get your tracking ID (looks like `G-XXXXXXXXXX`)

### 2. Add Tracking ID to Environment Variables
Add the tracking ID to your `.env.local` file:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Deploy Changes
The analytics code is already integrated. Once you add the tracking ID and deploy, analytics will start working.

## What's Being Tracked

### Automatic Tracking
- Page views on all pages
- Session data
- User demographics
- Traffic sources

### Custom Events
- Contact form submissions (success/failure)
- Button clicks (can be added)
- Demo requests (can be added)

## Usage in Components

### Track Form Submissions
```typescript
import useAnalytics from '@/hooks/useAnalytics';

const { trackFormSubmission } = useAnalytics();

// On successful form submit
trackFormSubmission('contact', true);

// On form error
trackFormSubmission('contact', false);
```

### Track Button Clicks
```typescript
import useAnalytics from '@/hooks/useAnalytics';

const { trackButtonClick } = useAnalytics();

// Track CTA button clicks
trackButtonClick('Get Started', 'hero-section');
```

### Track Custom Events
```typescript
import useAnalytics from '@/hooks/useAnalytics';

const { trackEvent } = useAnalytics();

// Custom event tracking
trackEvent('video_play', 'engagement', 'product-demo');
```

## Files Added
- `/src/lib/gtag.ts` - Google Analytics utility functions
- `/src/components/GoogleAnalytics.tsx` - GA script component
- `/src/components/Analytics.tsx` - Analytics wrapper component
- `/src/hooks/usePageView.ts` - Page view tracking hook
- `/src/hooks/useAnalytics.ts` - Event tracking hook

## Data Privacy
- Analytics only loads if tracking ID is provided
- No personal data is tracked beyond standard GA metrics
- Consider adding cookie consent if needed for GDPR compliance