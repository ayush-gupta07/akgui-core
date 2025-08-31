import React from 'react'
import { Button } from './Button'
import type { ComponentConfig } from '../../../playground/src/types/playground'

export const buttonConfig: ComponentConfig = {
  name: 'Button',
  description: 'A versatile button component that supports different variants, sizes, and states.',
  category: 'General',
  examples: [
    {
      title: 'Default',
      component: <Button>Click me</Button>,
      code: `<Button>Click me</Button>`
    },
    {
      title: 'Variants',
      component: (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      ),
      code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`
    },
    {
      title: 'Sizes',
      component: (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      ),
      code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`
    },
    {
      title: 'States',
      component: (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      ),
      code: `<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`
    },
    {
      title: 'With Icons',
      component: (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button startIcon="⚡">Start Icon</Button>
          <Button endIcon="→">End Icon</Button>
          <Button startIcon="🔥" variant="secondary">Fire</Button>
        </div>
      ),
      code: `<Button startIcon="⚡">Start Icon</Button>
<Button endIcon="→">End Icon</Button>
<Button startIcon="🔥" variant="secondary">Fire</Button>`
    },
    {
      title: 'Full Width',
      component: (
        <div style={{ width: '100%' }}>
          <Button fullWidth>Full Width Button</Button>
        </div>
      ),
      code: `<Button fullWidth>Full Width Button</Button>`
    }
  ],
  documentation: {
    description: 'The Button component is a foundational UI element that handles user interactions. It provides a consistent interface for triggering actions, submitting forms, and navigation throughout your application.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'The content to display inside the button'
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost' | 'danger'",
        default: "'primary'",
        description: 'The visual style variant of the button'
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'The size of the button'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is disabled and cannot be interacted with'
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is in a loading state with a spinner'
      },
      {
        name: 'startIcon',
        type: 'React.ReactNode',
        description: 'Optional icon to display before the button text'
      },
      {
        name: 'endIcon',
        type: 'React.ReactNode',
        description: 'Optional icon to display after the button text'
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button should take the full width of its container'
      },
      {
        name: 'onClick',
        type: '(event: React.MouseEvent<HTMLButtonElement>) => void',
        description: 'Function called when the button is clicked'
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        default: "'button'",
        description: 'The HTML type attribute of the button element'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply to the button'
      }
    ],
    usage: {
      installation: 'npm install akgui-core\n# or\nyarn add akgui-core',
      basicExample: `import { Button } from 'akgui-core'

function App() {
  return (
    <Button onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  )
}`,
      advancedExamples: [
        {
          title: 'Form Submission',
          description: 'Using the Button component for form submissions with loading states',
          code: `import { Button } from 'akgui-core'
import { useState } from 'react'

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await submitForm()
      alert('Form submitted successfully!')
    } catch (error) {
      alert('Error submitting form')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
      <Button 
        type="submit" 
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}`
        },
        {
          title: 'Button Group',
          description: 'Creating a group of related buttons with consistent styling',
          code: `import { Button } from 'akgui-core'

function ActionButtons() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="primary">
        Save
      </Button>
      <Button variant="secondary">
        Cancel
      </Button>
      <Button variant="danger" size="small">
        Delete
      </Button>
    </div>
  )
}`
        },
        {
          title: 'Icon Buttons',
          description: 'Using buttons with icons for better visual hierarchy',
          code: `import { Button } from 'akgui-core'

function NavigationButtons() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button startIcon="←" variant="ghost">
        Back
      </Button>
      <Button endIcon="→">
        Continue
      </Button>
      <Button startIcon="💾">
        Save Changes
      </Button>
    </div>
  )
}`
        }
      ]
    }
  }
}

export default buttonConfig
