#!/usr/bin/env node

/**
 * Component generator script
 * Creates a new component with all the necessary files
 * 
 * Usage: npm run create-component ComponentName
 */

import fs from 'fs'
import path from 'path'

const componentName = process.argv[2]

if (!componentName) {
  console.error('❌ Please provide a component name')
  console.log('Usage: npm run create-component ComponentName')
  process.exit(1)
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Component name must be in PascalCase (e.g., Button, InputField)')
  process.exit(1)
}

const componentDir = path.join(__dirname, '../src/components', componentName)

// Check if component already exists
if (fs.existsSync(componentDir)) {
  console.error(`❌ Component ${componentName} already exists`)
  process.exit(1)
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true })

// Component template
const componentTemplate = `import React from 'react'
import { cn } from '@/utils'
import { BaseProps } from '@/types'
import './${componentName}.css'

export interface ${componentName}Props extends BaseProps {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'akgui-${componentName.toLowerCase()}',
        \`akgui-${componentName.toLowerCase()}--\${variant}\`,
        \`akgui-${componentName.toLowerCase()}--\${size}\`,
        disabled && 'akgui-${componentName.toLowerCase()}--disabled',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ${componentName}
`

// Index template  
const indexTemplate = `export { ${componentName} } from './${componentName}'
export type { ${componentName}Props } from './${componentName}'
`

// CSS template
const cssTemplate = `.akgui-${componentName.toLowerCase()} {
  /* Base styles */
  display: inline-block;
  font-family: var(--akgui-font-family, inherit);
  transition: all 0.2s ease;
}

/* Variants */
.akgui-${componentName.toLowerCase()}--primary {
  background-color: var(--akgui-primary);
  color: white;
  border: 1px solid var(--akgui-primary);
}

.akgui-${componentName.toLowerCase()}--primary:hover {
  background-color: var(--akgui-primary-hover);
  border-color: var(--akgui-primary-hover);
}

.akgui-${componentName.toLowerCase()}--secondary {
  background-color: var(--akgui-gray-light);
  color: var(--akgui-text);
  border: 1px solid var(--akgui-gray-border);
}

.akgui-${componentName.toLowerCase()}--secondary:hover {
  background-color: var(--akgui-gray-border);
}

.akgui-${componentName.toLowerCase()}--ghost {
  background-color: transparent;
  color: var(--akgui-primary);
  border: 1px solid var(--akgui-primary);
}

.akgui-${componentName.toLowerCase()}--ghost:hover {
  background-color: var(--akgui-primary-light);
}

/* Sizes */
.akgui-${componentName.toLowerCase()}--small {
  padding: var(--akgui-spacing-2) var(--akgui-spacing-3);
  font-size: var(--akgui-font-size-sm);
}

.akgui-${componentName.toLowerCase()}--medium {
  padding: var(--akgui-spacing-3) var(--akgui-spacing-4);
  font-size: var(--akgui-font-size-base);
}

.akgui-${componentName.toLowerCase()}--large {
  padding: var(--akgui-spacing-4) var(--akgui-spacing-6);
  font-size: var(--akgui-font-size-lg);
}

/* States */
.akgui-${componentName.toLowerCase()}--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
`

// Test template
const testTemplate = `import { render, screen } from '../../../tests/test-utils'
import { ${componentName} } from './${componentName}'

describe('${componentName}', () => {
  it('renders correctly', () => {
    render(<${componentName}>Test content</${componentName}>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<${componentName} className="custom-class">Test</${componentName}>)
    expect(screen.getByText('Test')).toHaveClass('custom-class')
  })

  it('supports all variants', () => {
    const variants = ['primary', 'secondary', 'ghost'] as const
    variants.forEach(variant => {
      const { rerender } = render(<${componentName} variant={variant}>Test</${componentName}>)
      expect(screen.getByText('Test')).toHaveClass(\`akgui-${componentName.toLowerCase()}--\${variant}\`)
      rerender(<div />)
    })
  })

  it('supports all sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const
    sizes.forEach(size => {
      const { rerender } = render(<${componentName} size={size}>Test</${componentName}>)
      expect(screen.getByText('Test')).toHaveClass(\`akgui-${componentName.toLowerCase()}--\${size}\`)
      rerender(<div />)
    })
  })

  it('handles disabled state', () => {
    render(<${componentName} disabled>Test</${componentName}>)
    expect(screen.getByText('Test')).toHaveClass(\`akgui-${componentName.toLowerCase()}--disabled\`)
  })
})
`

// Playground demo config template (co-located in component folder)
const playgroundConfigTemplate = `import React from 'react'
import { ${componentName} } from './${componentName}'
import type { ComponentConfig } from '../../../playground/src/types/playground'

export const ${componentName.toLowerCase()}Config: ComponentConfig = {
  name: '${componentName}',
  description: 'A versatile ${componentName.toLowerCase()} component that supports different variants, sizes, and states.',
  category: 'General',
  examples: [
    {
      title: 'Default',
      component: <${componentName}>Click me</${componentName}>,
      code: \`<${componentName}>Click me</${componentName}>\`
    },
    {
      title: 'Variants',
      component: (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <${componentName} variant="primary">Primary</${componentName}>
          <${componentName} variant="secondary">Secondary</${componentName}>
          <${componentName} variant="ghost">Ghost</${componentName}>
        </div>
      ),
      code: \`<${componentName} variant="primary">Primary</${componentName}>
<${componentName} variant="secondary">Secondary</${componentName}>
<${componentName} variant="ghost">Ghost</${componentName}>\`
    },
    {
      title: 'Sizes',
      component: (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <${componentName} size="small">Small</${componentName}>
          <${componentName} size="medium">Medium</${componentName}>
          <${componentName} size="large">Large</${componentName}>
        </div>
      ),
      code: \`<${componentName} size="small">Small</${componentName}>
<${componentName} size="medium">Medium</${componentName}>
<${componentName} size="large">Large</${componentName}>\`
    },
    {
      title: 'Disabled',
      component: <${componentName} disabled>Disabled</${componentName}>,
      code: \`<${componentName} disabled>Disabled</${componentName}>\`
    }
  ],
  documentation: {
    description: 'The ${componentName} component is a foundational UI element that provides [describe the main purpose]. It offers consistent styling and behavior across your application.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'The content to display inside the ${componentName.toLowerCase()}'
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost'",
        default: "'primary'",
        description: 'The visual style variant of the ${componentName.toLowerCase()}'
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'The size of the ${componentName.toLowerCase()}'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the ${componentName.toLowerCase()} is disabled and cannot be interacted with'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply to the ${componentName.toLowerCase()}'
      }
    ],
    usage: {
      installation: 'npm install akgui-core\\n# or\\nyarn add akgui-core',
      basicExample: \`import { ${componentName} } from 'akgui-core'

function App() {
  return (
    <${componentName}>
      Basic ${componentName}
    </${componentName}>
  )
}\`,
      advancedExamples: [
        {
          title: 'Custom Styling',
          description: 'Using the ${componentName} component with custom styling and variants',
          code: \`import { ${componentName} } from 'akgui-core'

function CustomExample() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <${componentName} variant="primary" size="large">
        Primary Large
      </${componentName}>
      <${componentName} variant="secondary" disabled>
        Disabled
      </${componentName}>
    </div>
  )
}\`
        }
      ]
    }
  }
}

export default ${componentName.toLowerCase()}Config
`

// Create component directory
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true })
}

// Write component files
try {
  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTemplate)
  fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssTemplate)
  fs.writeFileSync(path.join(componentDir, `${componentName}.test.tsx`), testTemplate)
  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexTemplate)
  
  // Write co-located demo files in component directory
  fs.writeFileSync(path.join(componentDir, `${componentName}.demo.tsx`), playgroundConfigTemplate)

  // Auto-register in playground demos/index.ts - update to look for co-located demos
  updatePlaygroundRegistry(componentName)

  console.log(`✅ Component ${componentName} created successfully!`)
  console.log(`📁 Component files created:`)
  console.log(`   - src/components/${componentName}/${componentName}.tsx`)
  console.log(`   - src/components/${componentName}/${componentName}.css`)
  console.log(`   - src/components/${componentName}/${componentName}.test.tsx`)
  console.log(`   - src/components/${componentName}/index.ts`)
  console.log(`📱 Co-located demo file created:`)
  console.log(`   - src/components/${componentName}/${componentName}.demo.tsx`)
  console.log(`🔧 Auto-registered in playground registry`)
  console.log()
  console.log(`🔧 Next steps:`)
  console.log(`   1. Add export to src/index.ts:`)
  console.log(`      export { ${componentName} } from './components/${componentName}'`)
  console.log(`   2. Run tests: npm test`)
  console.log(`   3. View in Playground: npm run playground`)
  console.log(`   4. Navigate to: http://localhost:3001/${componentName.toLowerCase()}`)

} catch (error) {
  console.error('❌ Error creating component:', error.message)
  process.exit(1)
}

/**
 * Update playground registry to include the new component
 */
function updatePlaygroundRegistry(componentName) {
  // This will be handled by the auto-discovery logic in playground/src/demos/index.ts
  console.log(`🔄 Playground will auto-discover ${componentName} demo on next startup`)
}
