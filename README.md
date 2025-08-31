# 🎨 AKGUI Core

> **A scalable, production-ready React component library with interactive playground**

[![npm version](https://img.shields.io/npm/v/akgui-core?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com/package/akgui-core)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://github.com/your-username/akgui-core)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](./LICENSE)

## ✨ Features

- 🎯 **Modern Architecture** - Built with React 18, TypeScript 5.6, and Vite
- 🧩 **Modular Components** - Tree-shakeable, lightweight components
- 📖 **Interactive Playground** - Live component demos with documentation
- 🎨 **Customizable** - LinkedIn-inspired design system with CSS variables
- 🔧 **Developer Experience** - Hot reload, TypeScript support, comprehensive tooling
- 🚀 **Production Ready** - Optimized builds, tree-shaking, and performance-focused
- 📱 **Responsive** - Mobile-first design approach
- 🧪 **Well Tested** - Comprehensive test coverage with Jest

## 🚀 Quick Start

### Installation

```bash
npm install akgui-core
# or
yarn add akgui-core
# or
pnpm add akgui-core
```

### Basic Usage

```tsx
import React from 'react'
import { Button } from 'akgui-core'
import 'akgui-core/dist/main.css' // Import styles

function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </div>
  )
}
```

## 📚 Components

AKGUI provides a comprehensive collection of production-ready React components:

### 🎯 **Core Components**
- **Button** - Versatile button with variants, sizes, and states
- **Input** - Text inputs with validation and styling *(Coming Soon)*
- **Select** - Dropdown selection component *(Coming Soon)*
- **Checkbox** - Custom styled checkboxes *(Coming Soon)*
- **Radio** - Radio button groups *(Coming Soon)*

### 📝 **Form Components**
- **Form** - Complete form wrapper with validation *(Coming Soon)*
- **TextArea** - Multi-line text inputs *(Coming Soon)*
- **DatePicker** - Date selection component *(Coming Soon)*
- **FileUpload** - File upload with drag & drop *(Coming Soon)*

### 🔔 **Feedback Components**
- **Alert** - Notification messages *(Coming Soon)*
- **Toast** - Temporary notifications *(Coming Soon)*
- **Modal** - Dialog and overlay modals *(Coming Soon)*
- **Loading** - Loading indicators and spinners *(Coming Soon)*

### 🧭 **Navigation Components**
- **Tabs** - Tab navigation component *(Coming Soon)*
- **Breadcrumb** - Navigation breadcrumbs *(Coming Soon)*
- **Pagination** - Data pagination *(Coming Soon)*

### 📊 **Data Display**
- **Table** - Data tables with sorting *(Coming Soon)*
- **Card** - Content containers *(Coming Soon)*
- **Badge** - Status indicators *(Coming Soon)*
- **Avatar** - User profile images *(Coming Soon)*

> **📖 Full Documentation**: Visit our [Interactive Playground](#-interactive-playground) to explore all components with live examples, complete props documentation, and usage guides.

### Quick Example

```tsx
import React from 'react'
import { Button, Card, Alert } from 'akgui-core'
import 'akgui-core/dist/main.css'

function App() {
  return (
    <Card>
      <Alert variant="success">Welcome to AKGUI!</Alert>
      <Button variant="primary" size="large">
        Explore Components
      </Button>
    </Card>
  )
}
```

## 🎮 Interactive Playground & Documentation

**The playground is your complete component reference!** Each component includes:

- 📋 **Live Examples** - Interactive component previews
- 📖 **Full Documentation** - Complete props, types, and descriptions  
- 💻 **Code Snippets** - Copy-paste examples for every use case
- 🎨 **Visual Variants** - See all styling options in action

### Run Locally

```bash
git clone https://github.com/your-username/akgui-core.git
cd akgui-core
npm install
npm run playground
```

### Online Documentation
> 🌐 **Coming Soon**: Live playground at `akgui-core.dev`

Visit `http://localhost:3001` to explore:
- � **Component Browser** - Browse all 50+ components by category
- ⚡ **Live Editing** - Modify props and see changes instantly
- 📚 **Usage Examples** - From basic to advanced implementations
- 🏗️ **Integration Guides** - Step-by-step setup instructions

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/akgui-core.git
cd akgui-core

# Install dependencies
npm install

# Start development
npm run playground

# Build library
npm run build

# Run tests
npm test

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Creating New Components

Use our automatic component generator:

```bash
npm run create-component MyComponent
```

This creates:
- ✅ Component file (`MyComponent.tsx`)
- ✅ Styles (`MyComponent.css`) 
- ✅ Tests (`MyComponent.test.tsx`)
- ✅ Demo configuration (`MyComponent.demo.tsx`)
- ✅ Auto-registers in playground

### Project Structure

```
akgui-core/
├── src/
│   ├── components/           # Component library
│   │   └── Button/           # Example component
│   │       ├── Button.tsx    # Component logic
│   │       ├── Button.css    # Component styles
│   │       ├── Button.test.tsx  # Tests
│   │       ├── Button.demo.tsx  # Playground demo
│   │       └── index.ts      # Exports
│   ├── styles/              # Global styles & design system
│   ├── types/               # TypeScript definitions
│   └── utils/               # Utility functions
├── playground/              # Interactive demo application
│   └── src/
│       ├── components/      # Playground UI components
│       ├── demos/           # Demo registry
│       └── types/           # Playground types
├── scripts/                 # Build & utility scripts
└── dist/                    # Built library files
```

## 🎨 Design System

AKGUI uses a LinkedIn-inspired design system with CSS custom properties:

### Colors
```css
:root {
  --akgui-primary: #0a66c2;
  --akgui-primary-hover: #004182;
  --akgui-gray: #666666;
  --akgui-gray-light: #f3f2ef;
  /* ... */
}
```

### Customization

Override design tokens to match your brand:

```css
:root {
  --akgui-primary: #your-brand-color;
  --akgui-radius: 12px;
  --akgui-shadow: your-custom-shadow;
}
```

## 📦 Build Outputs

The library provides multiple build formats:

- **ESM** (`dist/index.es.js`) - Modern ES modules
- **CommonJS** (`dist/index.cjs.js`) - Node.js compatibility  
- **UMD** (`dist/index.umd.js`) - Browser script tag support
- **Types** (`dist/index.d.ts`) - TypeScript definitions
- **Styles** (`dist/main.css`) - Component styles

## 🧪 Testing

We maintain high test coverage with multiple testing strategies:

```bash
# Unit tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Visual regression tests
npm run test:visual
```

## 📊 Bundle Analysis

Monitor bundle size with:

```bash
npm run size
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Run tests and linting (`npm test && npm run lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📄 License

MIT © [Ayush Gupta](https://github.com/your-username)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with LinkedIn-inspired design principles
- Tested with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
- Type-safe with [TypeScript](https://www.typescriptlang.org/)

---

<div align="center">
  <strong>Made with ❤️ by the AKGUI Team</strong>
  <br />
  <a href="https://github.com/your-username/akgui-core">⭐ Star us on GitHub</a>
</div>
