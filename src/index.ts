/**
 * AKGUI - Production-ready React Component Library
 * 
 * Main export file for all components, hooks, and utilities
 */

// Components
export { Button } from './components/Button'
export type { ButtonProps } from './components/Button'

export { AppBar } from './components/AppBar'
export type { AppBarProps } from './components/AppBar'

export { Card } from './components/Card'
export type { CardProps } from './components/Card'

// Components will be exported here as we create them
// Example:
// export { Card } from './components/Card/Card';

// Hooks
// export * from './hooks';

// Types
export * from './types';

// Utils
export * from './utils';

// For now, let's export a placeholder to ensure the build works
export const AKGUI_VERSION = '0.0.0';
