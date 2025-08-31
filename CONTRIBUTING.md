# Contributing to AKGUI Core

Thank you for your interest in contributing to AKGUI Core! We welcome contributions from everyone.

## 🚀 Quick Start

1. **Fork the repository** and clone your fork
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run playground`
4. **Make your changes**
5. **Test your changes**: `npm test && npm run lint`
6. **Submit a pull request**

## 📋 Development Guidelines

### Creating New Components

Use our component generator for consistency:

```bash
npm run create-component MyComponent
```

This automatically creates:
- Component file (`MyComponent.tsx`)
- Styles (`MyComponent.css`)
- Tests (`MyComponent.test.tsx`)
- Demo configuration (`MyComponent.demo.tsx`)
- Registers component in playground

### Code Standards

- **TypeScript**: All code must be written in TypeScript
- **Testing**: New components must include comprehensive tests
- **Documentation**: Update component demos with props documentation
- **Styling**: Use CSS modules and follow existing design tokens
- **Linting**: Run `npm run lint:fix` before submitting

### Component Requirements

Every new component should include:
- ✅ **TypeScript interface** for props
- ✅ **CSS module** for styling  
- ✅ **Unit tests** with React Testing Library
- ✅ **Demo configuration** with examples and documentation
- ✅ **JSDoc comments** for all public APIs
- ✅ **Accessibility** features (ARIA labels, keyboard navigation)

### Commit Message Format

We follow [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

feat(button): add loading state support
fix(input): resolve focus handling issue  
docs(readme): update installation instructions
```

### Pull Request Process

1. **Update documentation** for any new features
2. **Add tests** for new functionality
3. **Run the full test suite**: `npm test`
4. **Check bundle size**: `npm run size`
5. **Update demo** if adding new component features
6. **Request review** from maintainers

### Design System

Follow our design principles:
- **Consistency**: Use existing design tokens and patterns
- **Accessibility**: Ensure WCAG 2.1 AA compliance
- **Performance**: Optimize for bundle size and runtime performance
- **Responsive**: Support mobile-first design approach

## 🐛 Bug Reports

When filing a bug report, please include:
- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Environment details** (browser, Node.js version, etc.)
- **Code example** or playground link

## 💡 Feature Requests

For new features, please:
- **Check existing issues** to avoid duplicates
- **Provide clear use case** and rationale
- **Consider backwards compatibility**
- **Include mockups** or examples if applicable

## 📚 Documentation

Help improve our documentation by:
- Fixing typos or unclear explanations
- Adding more examples to component demos
- Improving accessibility documentation
- Translating content to other languages

## 🎉 Recognition

Contributors will be:
- Listed in our README acknowledgments
- Mentioned in release notes for their contributions
- Invited to join our contributor community

## ❓ Questions

- **General questions**: [GitHub Discussions](https://github.com/ayush-gupta07/akgui-core/discussions)
- **Bug reports**: [GitHub Issues](https://github.com/ayush-gupta07/akgui-core/issues)
- **Feature requests**: [GitHub Issues](https://github.com/ayush-gupta07/akgui-core/issues)

Thank you for contributing to AKGUI Core! 🎉
