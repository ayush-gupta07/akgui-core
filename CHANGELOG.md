# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-09-01

### Added
- Initial release of AKGUI Core
- **Button Component** - Versatile button with variants (primary, secondary, ghost, danger), sizes, loading states, and icons
- **AppBar Component** - Responsive navigation bar with branding, menu items, and actions
- **Card Component** - Content container with customizable styling
- **Design System** - LinkedIn-inspired design tokens and CSS custom properties
- **TypeScript Support** - Full type definitions and strict type checking
- **Tree Shaking** - Optimized ESM builds for minimal bundle sizes
- **Multiple Build Formats** - ESM, CommonJS, and UMD support
- **Testing Suite** - Comprehensive test coverage with Jest and React Testing Library
- **Development Tools** - Component generator script and interactive playground

### Features
- 🎯 Modern React 18 + TypeScript architecture
- 🧩 Modular, tree-shakeable components
- 📱 Mobile-first responsive design
- 🎨 Customizable design system with CSS variables
- ⚡ Zero runtime dependencies (only clsx for className utilities)
- 🧪 Well-tested components with >70% coverage
- 📦 Bundle size monitoring with size-limit

### Technical Details
- Built with Vite for optimal performance
- ESM-first with CommonJS and UMD fallbacks
- Peer dependencies: React 16.8+ to 18.x
- Bundle size limit: 100KB (gzipped)
- TypeScript 5.8+ support
