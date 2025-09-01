import type { ComponentConfig } from '../types/playground'

// Import co-located demo configs
import { buttonConfig } from '../../../src/components/Button/Button.demo'
import { appBarConfig } from '../../../src/components/AppBar/AppBar.demo'

// Central registry of all component demos (co-located approach)
export const componentDemos: Record<string, ComponentConfig> = {
  button: buttonConfig,
  appbar: appBarConfig,
}

// Get demo config by component name
export const getDemoConfig = (componentName: string): ComponentConfig | null => {
  return componentDemos[componentName] || null
}

// Get all available demo names
export const getAvailableDemos = (): string[] => {
  return Object.keys(componentDemos)
}

// Get total count of registered demos
export const getDemoCount = (): number => {
  return Object.keys(componentDemos).length
}

// Auto-discovery helper for development
export const discoverDemos = (): void => {
  console.log('📊 Demo Registry Status (Co-located):')
  console.log(`   - Total demos: ${getDemoCount()}`)
  console.log(`   - Available demos: ${getAvailableDemos().join(', ')}`)
  console.log('   - Demo files are co-located with components in src/components/*/')
}

// Register a component config (used for dynamic registration)
export const registerComponentConfig = (name: string, config: ComponentConfig): void => {
  componentDemos[name.toLowerCase()] = config
}
