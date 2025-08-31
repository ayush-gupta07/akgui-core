# AKGUI Core Architecture

> **A deep dive into the technical architecture and design patterns of AKGUI Core**

## 🏗️ Overview

AKGUI Core is built with a **co-located demo pattern** that keeps components, demos, and documentation together for maximum maintainability. The architecture prioritizes developer experience, scalability, and production readiness.

### Core Principles
- **Co-location**: Components, demos, tests, and docs live together
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Tree Shaking**: Optimized for minimal bundle sizes
- **Developer Experience**: Hot reload, automatic registration, easy component creation

## 📁 Project Structure

```
akgui-core/
├── src/                          # Main library source
│   ├── components/               # Component library
│   │   └── Button/               # Example component
│   │       ├── Button.tsx        # Component implementation
│   │       ├── Button.css        # Component styles (CSS modules)
│   │       ├── Button.test.tsx   # Unit tests
│   │       ├── Button.demo.tsx   # Demo configuration
│   │       └── index.ts          # Component exports
│   ├── styles/                   # Global styles & design tokens
│   ├── types/                    # Shared TypeScript definitions
│   └── index.ts                  # Library entry point
├── playground/                   # Interactive demo application
│   └── src/
│       ├── components/           # Playground UI components
│       ├── demos/                # Demo registry system
│       └── types/                # Playground-specific types
├── scripts/                      # Build & utility scripts
└── dist/                         # Built library files
```

## 🧩 Component Architecture

### Co-Located Demo Pattern

Each component follows a consistent structure that keeps everything related together:

```typescript
// Button/Button.tsx - Component implementation
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'small' | 'medium' | 'large'
  // ... other props
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  // ... implementation
}) => {
  // Component logic
}
```

```typescript
// Button/Button.demo.tsx - Demo configuration
import type { ComponentDemo } from '../../types'
import { Button } from './Button'

export const ButtonDemo: ComponentDemo = {
  title: 'Button',
  component: Button,
  examples: [
    // Interactive examples
  ],
  documentation: {
    description: 'Versatile button component...',
    props: [
      // Props documentation
    ]
  }
}
```

## 🔄 End-to-End Component Flow

Here's the complete journey from creating a component to seeing it in the playground:

### 1. Create Component with Generator

```bash
npm run create-component MyButton
```

**What happens:**
- `scripts/create-component.js` runs
- Creates 4 files in `src/components/MyButton/`:
  - `MyButton.tsx` - Component implementation
  - `MyButton.css` - Component styles with design tokens
  - `MyButton.test.tsx` - Unit tests
  - `MyButton.demo.tsx` - Demo configuration with examples + docs

### 2. Component Files Structure

```typescript
// MyButton/MyButton.tsx
export interface MyButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const MyButton: React.FC<MyButtonProps> = ({ 
  variant = 'primary', 
  children 
}) => (
  <button className={styles[`button--${variant}`]}>
    {children}
  </button>
)
```

```typescript
// MyButton/MyButton.demo.tsx
export const MyButtonDemo: ComponentDemo = {
  title: 'MyButton',
  component: MyButton,
  examples: [
    {
      title: 'Primary Button',
      code: '<MyButton variant="primary">Click me</MyButton>',
      component: <MyButton variant="primary">Click me</MyButton>
    }
  ],
  documentation: {
    description: 'A customizable button component',
    props: [
      { name: 'variant', type: 'string', description: 'Button style variant' }
    ]
  }
}
```

### 3. Library Export (Automatic)

```typescript
// src/index.ts - You add this manually
export { MyButton } from './components/MyButton'
export type { MyButtonProps } from './components/MyButton'
```

### 4. Playground Auto-Discovery

```typescript
// playground/src/demos/index.ts - This happens automatically
const demos = import.meta.glob('../../src/components/*/*.demo.tsx', { 
  eager: true 
})

// Finds MyButton.demo.tsx and registers it
export const componentDemos = Object.entries(demos).reduce((acc, [path, module]) => {
  // Creates: { MyButton: MyButtonDemo }
}, {})
```

### 5. Playground Display

**File: `playground/src/components/SimpleComponentDemo/SimpleComponentDemo.tsx`**
- Takes the demo from registry
- Shows **Examples** tab with interactive components
- Shows **Documentation** tab with props and usage
- Provides live code editing

### 6. Playground Routing

**File: `playground/src/routes/componentRoutes.ts`**
- Auto-generates routes: `/components/mybutton`
- Component accessible in sidebar navigation

### 7. Development Flow

```bash
npm run playground  # Start playground dev server
# 1. Playground starts at http://localhost:3001
# 2. Vite alias points 'akgui-core' to '../src/index.ts'  
# 3. Hot reload: changes in src/ → immediate playground update
# 4. MyButton appears in sidebar → click → see examples & docs
```

### Key Playground Files Explained

| File | Purpose |
|------|---------|
| `playground/src/demos/index.ts` | **Auto-discovery engine** - finds all *.demo.tsx files |
| `playground/src/components/SimpleComponentDemo/` | **Demo display component** - shows examples + documentation tabs |
| `playground/src/routes/componentRoutes.ts` | **Route generation** - creates URLs for each component |
| `playground/src/pages/ComponentPage.tsx` | **Individual component page** - renders the demo |
| `playground/vite.config.ts` | **Development setup** - aliases, hot reload, port 3001 |

The beauty of this system: **Create component → Automatic playground integration!** 🚀

## 🔨 Build Architecture

### Multi-Target Builds

The library produces optimized builds for different consumption patterns:

```typescript
// vite.lib.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      }
    }
  }
})
```

**Build Outputs:**
- **ESM** (`index.es.js`) - Modern ES modules for bundlers
- **CommonJS** (`index.cjs.js`) - Node.js compatibility
- **UMD** (`index.umd.js`) - Browser script tag support
- **Types** (`index.d.ts`) - TypeScript definitions
- **Styles** (`main.css`) - Extracted component styles

### Build Exclusions

Production builds exclude development-only files:

```json
// tsconfig.lib.json
{
  "exclude": [
    "**/*.test.tsx",
    "**/*.demo.tsx", 
    "playground/**/*"
  ]
}
```

### Tree Shaking Optimization

Components are structured for optimal tree shaking:

```typescript
// Each component has its own export
export { Button } from './components/Button'
export { Input } from './components/Input'  // Future component

// Allows: import { Button } from 'akgui-core' (only Button code included)
```

## 🎨 CSS Architecture

### CSS Modules Pattern

Each component uses CSS Modules for scoped styling:

```css
/* Button.css */
.button {
  /* Base button styles */
  background: var(--akgui-primary);
  color: var(--akgui-white);
}

.button--secondary {
  /* Variant-specific styles */
  background: var(--akgui-secondary);
}
```

```typescript
// Button.tsx
import styles from './Button.css'

const Button = ({ variant = 'primary' }) => (
  <button className={clsx(
    styles.button,
    styles[`button--${variant}`]
  )}>
    {children}
  </button>
)
```

### Design Token Integration

Components use CSS custom properties for theming:

```css
:root {
  --akgui-primary: #0a66c2;
  --akgui-primary-hover: #004182;
  --akgui-spacing-sm: 8px;
  --akgui-spacing-md: 16px;
  --akgui-radius: 4px;
}
```

## 🧪 Testing Architecture

### Multi-Layer Testing Strategy

```typescript
// Component Unit Tests
describe('Button', () => {
  it('renders with correct variant classes', () => {
    render(<Button variant="secondary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('button--secondary')
  })
})
```

**Testing Layers:**
- **Unit Tests**: Component behavior with React Testing Library
- **Type Tests**: TypeScript compilation ensures type safety
- **Visual Tests**: Playwright for UI regression (configured but commented)
- **Integration Tests**: Playground builds verify component integration

## 🚀 Development Architecture

### Component Generator

Automated component creation ensures consistency:

```bash
npm run create-component MyComponent
```

**Generated Files:**
- `MyComponent.tsx` - Component with TypeScript interface
- `MyComponent.css` - CSS module with design tokens
- `MyComponent.test.tsx` - Test suite with common scenarios
- `MyComponent.demo.tsx` - Demo configuration with examples
- Auto-registration in playground

### Hot Reload System

Development server provides instant feedback:

```typescript
// playground/vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      'akgui-core': resolve(__dirname, '../src/index.ts')
    }
  }
  // Changes in src/ immediately reflect in playground
})
```

## 📦 Distribution Architecture

### Package Configuration

```json
// package.json
{
  "main": "dist/index.cjs.js",     // CommonJS entry
  "module": "dist/index.es.js",    // ESM entry  
  "types": "dist/index.d.ts",      // TypeScript definitions
  "files": ["dist", "src"],        // Published files
  "sideEffects": ["*.css"],        // CSS files have side effects
}
```

### Peer Dependencies Strategy

```json
{
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
```

React is a peer dependency to avoid version conflicts in consuming applications.

## 🔄 CI/CD Architecture

### GitHub Actions Pipeline

```yaml
# .github/workflows/ci.yml
jobs:
  test:
    strategy:
      matrix:
        node-version: [18.x, 20.x]  # Multi-version testing
    steps:
      - Lint code quality
      - Type check with TypeScript
      - Run unit tests with coverage
      - Build library bundles
      - Check bundle size limits
```

### Quality Gates

- **Linting**: ESLint with React and accessibility rules
- **Type Checking**: Strict TypeScript configuration
- **Testing**: Jest with React Testing Library
- **Bundle Size**: Size-limit prevents bundle bloat
- **Coverage**: Codecov integration for test coverage tracking

## 🎯 Performance Architecture

### Bundle Optimization

- **Tree Shaking**: Individual component exports
- **CSS Extraction**: Separate CSS file for optimal caching
- **Peer Dependencies**: React externalized to prevent duplication
- **Size Monitoring**: Bundle size limits enforced in CI

### Runtime Performance

- **CSS Modules**: Scoped styles with minimal runtime overhead
- **Type Safety**: Compile-time type checking prevents runtime errors
- **Event Handling**: Optimized event delegation patterns

## 🔮 Key Architectural Decisions

### ✅ **Why These Patterns Work**

1. **Co-located Demos**: Component + demo + tests together = always in sync
2. **CSS Modules**: Scoped styles, no conflicts, great DX 
3. **Auto-Discovery**: Add *.demo.tsx → automatically in playground
4. **TypeScript First**: Catch errors early, great IntelliSense
5. **Design Tokens**: CSS variables = easy theming and consistency

### 🚀 **Benefits You Get**

- **Fast Development**: Generator creates everything needed
- **Always Updated**: Demos can't get out of sync with components  
- **Type Safety**: Full TypeScript coverage prevents runtime errors
- **Great DX**: Hot reload, automatic registration, clear patterns
- **Production Ready**: Tree-shakeable builds, optimized bundles

---

This architecture scales beautifully as you add components while keeping everything maintainable! 🎯
