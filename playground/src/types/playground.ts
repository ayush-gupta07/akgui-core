// TypeScript interfaces for playground routing and components

export interface ComponentInfo {
  name: string
  path: string
  description: string
  category: string
}

export interface ComponentCategory {
  id: string
  name: string
  icon: string
  components: ComponentInfo[]
}

export interface PlaygroundRoute {
  path: string
  component: React.ComponentType
  title: string
  description?: string
}

// Component demo configuration types
export interface ComponentExample {
  title: string
  component: React.ReactElement
  code: string
  description?: string
}

export interface ComponentProp {
  name: string
  type: string
  required?: boolean
  default?: string
  description: string
}

export interface ComponentDocumentation {
  description: string
  props: ComponentProp[]
  usage: {
    installation?: string
    basicExample: string
    advancedExamples?: Array<{
      title: string
      code: string
      description?: string
    }>
  }
}

export interface ComponentConfig {
  name: string
  description: string
  category: string
  examples: ComponentExample[]
  documentation?: ComponentDocumentation
}

// Navigation types
export interface NavItem {
  name: string
  path: string
  active?: boolean
}

export interface NavSection {
  title: string
  items: NavItem[]
}
