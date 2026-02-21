# Cusdis Comments Setup Guide

## Overview
Your blog now uses **Cusdis** - a lightweight, privacy-friendly commenting system with a beautiful modern UI.

## Features
✅ Privacy-first (no tracking, no ads)
✅ Lightweight and fast
✅ Modern, beautiful UI with dark mode support
✅ Lazy loading (comments load only when clicked)
✅ Anonymous comments (no login required)
✅ Responsive design
✅ Tailwind CSS integration

## Setup Instructions

### 1. Get Your Cusdis App ID

**Option A: Use Hosted Cusdis (Recommended)**
1. Visit [https://cusdis.com](https://cusdis.com)
2. Create a free account
3. Create a new website/project
4. Copy your **App ID**

**Option B: Self-Host Cusdis**
1. Follow the [self-hosting guide](https://cusdis.com/doc#/self-host)
2. Get your App ID and host URL

### 2. Configure Environment Variables

Create a `.env` file in the root directory (or edit your existing one):

```bash
# For hosted Cusdis
NEXT_PUBLIC_CUSDIS_APP_ID=your-app-id-here

# Only if self-hosting
NEXT_PUBLIC_CUSDIS_HOST=https://your-cusdis-instance.com
```

### 3. Test Locally

```bash
npm run dev
```

Visit any blog post and you should see the new comment section with a "Load Comments" button.

### 4. Deploy

Make sure to add the environment variables to your deployment platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **GitHub Pages**: Repository Settings → Secrets

## UI Features

### Modern Design
- Beautiful gradient buttons with hover effects
- Smooth transitions and animations
- Bordered comment cards with subtle shadows
- Privacy notice footer

### Dark Mode Support
- Automatically switches with your site theme
- Optimized colors for both light and dark modes

### Lazy Loading
- Comments don't load until user clicks "Load Comments"
- Improves initial page load performance
- Reduces data usage for users who don't read comments

### Responsive
- Looks great on mobile, tablet, and desktop
- Nested replies with proper indentation
- Touch-friendly buttons

## Customization

### Language (i18n)

Cusdis supports multiple languages automatically! The comment widget will use your site's language by default.

**Supported Languages:**
- English (en)
- Chinese Simplified (zh-cn)
- Chinese Traditional (zh-tw)
- Japanese (ja)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)
- Russian (ru)
- Arabic (ar)
- Indonesian (id)
- Korean (ko)
- Turkish (tr)
- Vietnamese (vi)

**Option 1: Use Site Language (Automatic)**

The comment system automatically uses the language from `siteMetadata.language` or `siteMetadata.locale`.

To change your site's language, edit `data/siteMetadata.js`:

```js
language: 'ar', // For Arabic
// or
locale: 'fr-FR', // For French
```

**Option 2: Override Comment Language**

To set a different language just for comments, edit `data/siteMetadata.js`:

```js
comment: {
  provider: 'cusdis',
  cusdisConfig: {
    appId: process.env.NEXT_PUBLIC_CUSDIS_APP_ID,
    host: process.env.NEXT_PUBLIC_CUSDIS_HOST || '',
    lang: 'ar' // Force Arabic for comments only
  }
}
```

### Colors
Edit `/styles/tailwind.css` to change the comment section colors. Look for the `#cusdis_thread` section.

### Layout
Edit `/components/Comments/Cusdis.js` to modify:
- Header text and icons
- Privacy notice
- Loading button design
- Container styling

### Disable Lazy Loading
If you want comments to load immediately, remove the `showComments` state logic in `Cusdis.js`.

## Troubleshooting

### Comments not showing?
1. Check that `NEXT_PUBLIC_CUSDIS_APP_ID` is set correctly
2. Verify the App ID in your Cusdis dashboard
3. Check browser console for any CSP errors

### Styling issues?
1. Clear your browser cache
2. Rebuild the project: `npm run build`
3. Check that tailwind is processing the CSS correctly

### Theme not switching?
1. Ensure your site's theme provider is working
2. Check that `next-themes` is properly configured

## Support

- **Cusdis Docs**: https://cusdis.com/doc
- **Report Issues**: Create an issue in your repository

---

Built with ❤️ using Cusdis
