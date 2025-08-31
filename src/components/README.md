# AKGUI Components

This directory contains all the React components for the AKGUI component library.

## Structure

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx          # Main component file
├── ComponentName.module.css   # Component styles (if needed)
├── ComponentName.test.tsx     # Unit tests
├── index.ts                   # Export file
└── types.ts                   # Component-specific types
```

## Components to be created:

### Foundation (Phase 1)
- [ ] Button
- [ ] Icon
- [ ] Typography
- [ ] Layout (Container, Grid, Stack)

### Form Components (Phase 2)
- [ ] Input
- [ ] Textarea
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Select/Dropdown

### Data Display (Phase 3)
- [ ] Card
- [ ] Table
- [ ] List
- [ ] Avatar
- [ ] Badge
- [ ] Progress

### Navigation (Phase 4)
- [ ] Tabs
- [ ] Breadcrumbs
- [ ] Menu
- [ ] Pagination

### Feedback (Phase 5)
- [ ] Modal/Dialog
- [ ] Toast/Notification
- [ ] Tooltip
- [ ] Loading
- [ ] Empty State

## Component Guidelines

1. **TypeScript First**: All components must be written in TypeScript
2. **Accessible**: Follow WCAG guidelines
3. **Testable**: Include unit tests for all components
4. **Documented**: Create playground demos and documentation
5. **Consistent**: Follow the established patterns
