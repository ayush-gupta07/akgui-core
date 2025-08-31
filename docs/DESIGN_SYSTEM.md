# AKGUI Design System

> **Complete guide to AKGUI Core's design tokens, theming system, and visual language**

## 🎨 Design Philosophy

AKGUI Core follows **LinkedIn-inspired design principles** with a focus on professional, accessible, and scalable user interfaces. The design system emphasizes clarity, consistency, and user experience.

### Core Principles
- **Professional**: Clean, business-focused aesthetic
- **Accessible**: WCAG 2.1 AA compliant by default
- **Consistent**: Systematic approach to spacing, colors, and typography
- **Scalable**: Design tokens that work across different themes and contexts

## 🎯 Color System

### Primary Palette

```css
:root {
  /* Primary Colors - LinkedIn Blue */
  --akgui-primary: #0a66c2;
  --akgui-primary-hover: #004182;
  --akgui-primary-light: #e1f5fe;
  --akgui-primary-dark: #01579b;
  
  /* Secondary Colors - Professional Gray */
  --akgui-secondary: #666666;
  --akgui-secondary-hover: #333333;
  --akgui-secondary-light: #f3f2ef;
  --akgui-secondary-dark: #000000;
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --akgui-success: #057642;
  --akgui-success-hover: #046639;
  --akgui-success-light: #d1e7dd;
  
  /* Warning */
  --akgui-warning: #915907;
  --akgui-warning-hover: #7a4a06;
  --akgui-warning-light: #fff3cd;
  
  /* Error/Danger */
  --akgui-danger: #cc1016;
  --akgui-danger-hover: #a50d13;
  --akgui-danger-light: #f8d7da;
  
  /* Information */
  --akgui-info: #0c5460;
  --akgui-info-hover: #0a4750;
  --akgui-info-light: #cff4fc;
}
```

### Neutral Palette

```css
:root {
  /* Neutral Colors */
  --akgui-white: #ffffff;
  --akgui-gray-50: #f8f9fa;
  --akgui-gray-100: #f3f2ef;
  --akgui-gray-200: #e9ecef;
  --akgui-gray-300: #dee2e6;
  --akgui-gray-400: #ced4da;
  --akgui-gray-500: #adb5bd;
  --akgui-gray-600: #6c757d;
  --akgui-gray-700: #495057;
  --akgui-gray-800: #343a40;
  --akgui-gray-900: #212529;
  --akgui-black: #000000;
}
```

### Color Usage Guidelines

| Color | Use Case | Example |
|-------|----------|---------|
| `--akgui-primary` | Call-to-action buttons, links, active states | Primary button, navigation links |
| `--akgui-secondary` | Secondary actions, subtle elements | Secondary button, form labels |
| `--akgui-success` | Success messages, positive actions | Success alerts, confirmation buttons |
| `--akgui-warning` | Warnings, caution states | Warning alerts, validation messages |
| `--akgui-danger` | Errors, destructive actions | Error alerts, delete buttons |
| `--akgui-gray-*` | Text, backgrounds, borders | Body text, card backgrounds |

## 📏 Spacing System

### Spacing Scale

```css
:root {
  /* Spacing Scale - 4px base unit */
  --akgui-spacing-xs: 4px;   /* 0.25rem */
  --akgui-spacing-sm: 8px;   /* 0.5rem */
  --akgui-spacing-md: 16px;  /* 1rem */
  --akgui-spacing-lg: 24px;  /* 1.5rem */
  --akgui-spacing-xl: 32px;  /* 2rem */
  --akgui-spacing-2xl: 48px; /* 3rem */
  --akgui-spacing-3xl: 64px; /* 4rem */
}
```

### Component Spacing

```css
:root {
  /* Component-specific spacing */
  --akgui-padding-button-sm: var(--akgui-spacing-xs) var(--akgui-spacing-sm);
  --akgui-padding-button-md: var(--akgui-spacing-sm) var(--akgui-spacing-md);
  --akgui-padding-button-lg: var(--akgui-spacing-md) var(--akgui-spacing-lg);
  
  --akgui-margin-component: var(--akgui-spacing-md);
  --akgui-gap-form: var(--akgui-spacing-md);
}
```

### Spacing Usage

```css
/* Example: Button component spacing */
.button {
  padding: var(--akgui-padding-button-md);
  margin: var(--akgui-spacing-sm);
}

.button--small {
  padding: var(--akgui-padding-button-sm);
}

.button--large {
  padding: var(--akgui-padding-button-lg);
}
```

## 🔤 Typography System

### Font Stack

```css
:root {
  --akgui-font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --akgui-font-family-mono: "SF Mono", Monaco, Inconsolata, "Roboto Mono", Consolas, "Courier New", monospace;
}
```

### Font Weights

```css
:root {
  --akgui-font-weight-light: 300;
  --akgui-font-weight-normal: 400;
  --akgui-font-weight-medium: 500;
  --akgui-font-weight-semibold: 600;
  --akgui-font-weight-bold: 700;
}
```

### Typography Scale

```css
:root {
  /* Font Sizes */
  --akgui-font-size-xs: 0.75rem;   /* 12px */
  --akgui-font-size-sm: 0.875rem;  /* 14px */
  --akgui-font-size-md: 1rem;      /* 16px */
  --akgui-font-size-lg: 1.125rem;  /* 18px */
  --akgui-font-size-xl: 1.25rem;   /* 20px */
  --akgui-font-size-2xl: 1.5rem;   /* 24px */
  --akgui-font-size-3xl: 1.875rem; /* 30px */
  --akgui-font-size-4xl: 2.25rem;  /* 36px */
  
  /* Line Heights */
  --akgui-line-height-tight: 1.25;
  --akgui-line-height-normal: 1.5;
  --akgui-line-height-relaxed: 1.75;
}
```

### Text Colors

```css
:root {
  --akgui-text-primary: var(--akgui-gray-900);
  --akgui-text-secondary: var(--akgui-gray-700);
  --akgui-text-muted: var(--akgui-gray-500);
  --akgui-text-inverse: var(--akgui-white);
  --akgui-text-link: var(--akgui-primary);
}
```

## 📐 Layout System

### Border Radius

```css
:root {
  --akgui-radius-none: 0px;
  --akgui-radius-sm: 2px;
  --akgui-radius-md: 4px;
  --akgui-radius-lg: 8px;
  --akgui-radius-xl: 12px;
  --akgui-radius-2xl: 16px;
  --akgui-radius-full: 9999px;
}
```

### Shadows

```css
:root {
  /* Shadow System */
  --akgui-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --akgui-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --akgui-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --akgui-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Focus Shadow */
  --akgui-shadow-focus: 0 0 0 3px rgba(10, 102, 194, 0.1);
}
```

### Borders

```css
:root {
  /* Border Widths */
  --akgui-border-width: 1px;
  --akgui-border-width-2: 2px;
  --akgui-border-width-4: 4px;
  
  /* Border Colors */
  --akgui-border-color: var(--akgui-gray-200);
  --akgui-border-color-hover: var(--akgui-gray-300);
  --akgui-border-color-focus: var(--akgui-primary);
  --akgui-border-color-error: var(--akgui-danger);
}
```

## 🎨 Theming System

### Custom Theme Creation

Create custom themes by overriding CSS custom properties:

```css
/* Dark Theme Example */
[data-theme="dark"] {
  --akgui-bg-primary: var(--akgui-gray-900);
  --akgui-bg-secondary: var(--akgui-gray-800);
  --akgui-text-primary: var(--akgui-white);
  --akgui-primary: #4dabf7;
  --akgui-border-color: var(--akgui-gray-700);
}

/* Brand Theme Example */
[data-theme="brand"] {
  --akgui-primary: #ff6b35;
  --akgui-primary-hover: #e55a2b;
}
```

### Apply Themes

```typescript
// Apply theme programmatically
const applyTheme = (theme: 'light' | 'dark' | 'brand') => {
  document.documentElement.setAttribute('data-theme', theme)
}
```

## �️ Usage Examples

### Using Design Tokens

```css
/* Custom component with design tokens */
.my-card {
  background: var(--akgui-bg-primary);
  border: var(--akgui-border-width) solid var(--akgui-border-color);
  border-radius: var(--akgui-radius-lg);
  padding: var(--akgui-spacing-lg);
  color: var(--akgui-text-primary);
}

/* Override specific tokens */
:root {
  --akgui-primary: #your-brand-color;
}
```

## 📊 Design Token Reference

### Quick Reference Table

| Category | Token | Value | Usage |
|----------|-------|-------|-------|
| **Colors** | `--akgui-primary` | `#0a66c2` | Primary actions, links |
| | `--akgui-secondary` | `#666666` | Secondary content |
| | `--akgui-danger` | `#cc1016` | Errors, destructive actions |
| **Spacing** | `--akgui-spacing-md` | `16px` | Standard component padding |
| | `--akgui-spacing-lg` | `24px` | Larger component spacing |
| **Typography** | `--akgui-font-size-md` | `1rem` | Body text |
| | `--akgui-font-weight-medium` | `500` | Emphasis text |
| **Layout** | `--akgui-radius-md` | `4px` | Standard border radius |
| | `--akgui-shadow-md` | `0 4px 6px...` | Card shadows |

---

This design system ensures consistency, accessibility, and maintainability across all AKGUI Core components. The token-based approach makes theming and customization straightforward while maintaining design integrity.
