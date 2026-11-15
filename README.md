# Paras AI Innovations — Astro Website

Modern, fast, and maintainable Astro implementation of the Paras AI Innovations portfolio website.

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navbar.astro    # Navigation bar
│   ├── Footer.astro    # Footer
│   └── ProjectCard.astro # Project card component
├── layouts/
│   └── MainLayout.astro # Main page layout with SEO & analytics
├── pages/              # Site pages (auto-routed)
│   ├── index.astro     # / (homepage)
│   ├── work/
│   │   └── index.astro # /work/ (selected work)
│   └── contact/
│       └── index.astro # /contact/ (contact page)
├── data/               # Data sources & configuration
│   ├── projects.ts     # Project data (single source of truth)
│   └── site.ts         # Site configuration & SEO
└── styles/
    └── base.css        # Global styles & design system
public/
├── assets/             # Images, illustrations, team photos
└── robots.txt
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Files

### Data Management
- **src/data/projects.ts** — All portfolio projects. Add new projects here without modifying code.
- **src/data/site.ts** — Site-wide configuration, SEO, and external integrations.

### Styles
- **src/styles/base.css** — Global styles, design system (CSS variables), component library.

### Pages
- **src/pages/index.astro** — Homepage
- **src/pages/work/index.astro** — Selected Work
- **src/pages/contact/index.astro** — Contact page

### Components
- **src/components/Navbar.astro** — Navigation (on all pages)
- **src/components/Footer.astro** — Footer (on all pages)
- **src/components/ProjectCard.astro** — Reusable project card

## Deployment

### Render.com

1. Push to GitHub
2. Connect repository to Render
3. Use `render.yaml` for build configuration

**Build Command:** `npm install && npm run build`  
**Publish Directory:** `dist`

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting
```

## Features

- ✅ Static site generation (fast, secure)
- ✅ SEO-optimized (Open Graph, Twitter Cards, structured data)
- ✅ Google Analytics 4 integration
- ✅ Formspree contact form
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessibility (ARIA, semantic HTML, keyboard navigation)
- ✅ Performance optimized (lazy loading, minimal JavaScript)
- ✅ CSS variables for easy theming

## External Integrations

- **Formspree** - Contact form submission
- **Google Analytics 4** - Analytics (ID: G-WZT14B2Q4F)
- **Google Fonts** - Typography

## Adding a New Project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array with all required fields
3. Save — pages auto-update with the new project

```typescript
{
  id: 'unique-slug',
  name: 'Project Name',
  description: 'Short description',
  categories: ['AI', 'Automation'],
  business_categories: ['Custom AI'],
  tech_stack: ['Technology'],
  image: '/assets/image.png',
  live_url: 'https://demo.com',
  featured: false,
}
```

## Troubleshooting

### Build fails
- Check Node.js version (18+): `node --version`
- Clear cache: `rm -rf node_modules && npm install`
- Check for missing imports in components

### Styles not applying
- Verify CSS is imported in layout
- Check CSS variable names match
- Astro CSS scopes by component — use `:global()` for page-wide styles

### Assets not loading
- Ensure images are in `public/assets/`
- Use path: `/assets/image.png` (not relative)
- Check image file names match in code

## Support & Next Steps

Phase 2 is complete. Proceeding to:
- Phase 3: Full component migration
- Phase 4: Homepage, work, and contact pages
- Phase 5: JavaScript functionality migration
- Phase 6: SEO optimization & deployment config
- Phase 7: Testing & production build

---

**Migration Status:** Phase 2 Complete  
**Original Website:** Still available in `../AI-Portfolio/`
