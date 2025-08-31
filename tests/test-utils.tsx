/**
 * Test utilities for AKGUI components
 */

import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Custom render function that includes providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  // Add theme provider, i18n provider, etc. here when needed
  return render(ui, { ...options })
}

// Re-export everything from testing library
export * from '@testing-library/react'
export { customRender as render }

// Common test helpers
export const mockConsole = () => {
  const originalError = console.error
  const originalWarn = console.warn
  
  beforeEach(() => {
    console.error = jest.fn()
    console.warn = jest.fn()
  })
  
  afterEach(() => {
    console.error = originalError
    console.warn = originalWarn
  })
}

// Accessibility test helper
export const expectToBeAccessible = async (container: Element) => {
  // Will be implemented when we add axe-core
  expect(container).toBeInTheDocument()
}
