/**
 * Common TypeScript types used across AKGUI components
 */

import type { CSSProperties } from 'react';

// Common props that most components will extend
export interface BaseProps {
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** HTML id attribute */
  id?: string;
  /** Test id for testing */
  'data-testid'?: string;
}

// Component size variants
export type Size = 'small' | 'medium' | 'large';

// Simple component variants - minimal set
export type Variant = 'primary' | 'secondary' | 'ghost';

export default {};
