/**
 * AKGUI Styles - Main export file
 */

// Import global styles
import './globals.css';

// Export simplified design tokens
export const tokens = {
  colors: {
    primary: 'var(--akgui-primary)',
    primaryHover: 'var(--akgui-primary-hover)',
    primaryLight: 'var(--akgui-primary-light)',
    gray: 'var(--akgui-gray)',
    grayLight: 'var(--akgui-gray-light)',
    grayDark: 'var(--akgui-gray-dark)',
    background: 'var(--akgui-background)',
    text: 'var(--akgui-text)',
  },
  spacing: {
    1: 'var(--akgui-spacing-1)',
    2: 'var(--akgui-spacing-2)',
    3: 'var(--akgui-spacing-3)',
    4: 'var(--akgui-spacing-4)',
    6: 'var(--akgui-spacing-6)',
    8: 'var(--akgui-spacing-8)',
  },
  fontSize: {
    sm: 'var(--akgui-font-size-sm)',
    base: 'var(--akgui-font-size-base)',
    lg: 'var(--akgui-font-size-lg)',
  },
  borderRadius: 'var(--akgui-radius)',
  shadow: 'var(--akgui-shadow)',
};
