# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based Single Page Application showcasing the "NeuroSync" product - an AI-powered brain-computer interface. The application is a static marketing site built with vanilla JavaScript, no framework dependencies.

## Development Commands

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Application Structure

The app uses a **client-side rendering approach** where all HTML is generated dynamically via JavaScript:

1. **Entry Point**: `index.html` contains a single `<div id="app"></div>` mount point
2. **Module Script**: `src/main.js` is loaded as an ES module (`type="module"`)
3. **Initialization**: Code runs immediately (no DOMContentLoaded needed with module scripts)
4. **Rendering**: Five section-builder functions return HTML strings that are injected into the DOM

### Key Functions

- `initializeApp()` - Orchestrates rendering by calling section builders and injecting into `#app`
- `createNavigation()` - Fixed navigation with smooth scroll anchors
- `createHeroSection()` - Hero banner with dark theme
- `createAIFeaturesSection()` - 3-column feature grid (light theme)
- `createTechnologySection()` - Tech specs section (dark theme)
- `createApplicationsSection()` - 6-column use cases grid (light theme)
- `setupScrollEffects()` - Configures scroll behavior, nav effects, and Intersection Observer for animations

### Styling

CSS uses Apple-inspired design system with:
- CSS custom properties for theming (`:root` variables)
- Alternating `.light` and `.dark` section backgrounds
- Responsive grid layouts with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Scroll-triggered animations via Intersection Observer API

## Windows-Specific Notes

**Important**: On Windows, Vite dev server may not display output properly in Git Bash. Use Windows Terminal or CMD instead:

```cmd
cd "E:\YUV_AI Dev\Claude-Code_Course\First_Project"
npm run dev
```
