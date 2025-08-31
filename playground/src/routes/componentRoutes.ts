// Component routes configuration
import { ComponentInfo } from '../types/playground'
import { getAvailableDemos } from '../demos'

// Static component information (can be auto-generated)
const COMPONENT_INFO: Record<string, Omit<ComponentInfo, 'path'>> = {
  button: {
    name: 'Button',
    description: 'Interactive buttons with multiple variants and states',
    category: 'inputs'
  },
  input: {
    name: 'Input', 
    description: 'Text input fields with validation and different types',
    category: 'inputs'
  },
  card: {
    name: 'Card',
    description: 'Content containers with flexible layouts',
    category: 'layout'
  }
}

// Auto-generate routes from available demos
export const COMPONENTS: ComponentInfo[] = getAvailableDemos().map(demoName => {
  const info = COMPONENT_INFO[demoName]
  if (!info) {
    // Fallback for components without explicit info
    return {
      name: demoName.charAt(0).toUpperCase() + demoName.slice(1),
      path: `/${demoName}`,
      description: `A versatile ${demoName} component with multiple variants and states.`,
      category: 'components'
    }
  }
  
  return {
    ...info,
    path: `/${demoName}`
  }
})

// Get component by path
export const getComponentByPath = (path: string): ComponentInfo | undefined => {
  return COMPONENTS.find(component => component.path === path)
}

// Get components by category  
export const getComponentsByCategory = (category: string): ComponentInfo[] => {
  return COMPONENTS.filter(component => component.category === category)
}

// Get all categories
export const getCategories = (): string[] => {
  return Array.from(new Set(COMPONENTS.map(c => c.category)))
}
