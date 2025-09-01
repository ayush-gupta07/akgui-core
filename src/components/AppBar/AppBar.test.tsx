import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AppBar, type MenuItem, type ActionButton } from './AppBar'

// Mock window.innerWidth for responsive tests
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  window.dispatchEvent(new Event('resize'))
}

describe('AppBar', () => {
  const mockMenuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  const mockActions: ActionButton[] = [
    { id: 'login', label: 'Login', variant: 'ghost' },
    { id: 'signup', label: 'Sign Up', variant: 'primary' },
  ]

  beforeEach(() => {
    mockInnerWidth(1024) // Desktop by default
  })

  describe('Basic rendering', () => {
    it('renders without crashing', () => {
      render(<AppBar />)
      expect(document.querySelector('.appbar')).toBeInTheDocument()
    })

    it('renders with title', () => {
      render(<AppBar title="Test App" />)
      expect(screen.getByText('Test App')).toBeInTheDocument()
    })

    it('renders with logo image', () => {
      render(<AppBar logo="/test-logo.png" title="Test App" />)
      const logo = screen.getByAltText('Test App')
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/test-logo.png')
    })

    it('renders with logo element', () => {
      const LogoComponent = () => <div data-testid="custom-logo">Custom Logo</div>
      render(<AppBar logo={<LogoComponent />} />)
      expect(screen.getByTestId('custom-logo')).toBeInTheDocument()
    })
  })

  describe('Navigation', () => {
    it('renders menu items', () => {
      render(<AppBar menuItems={mockMenuItems} />)
      
      mockMenuItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
      })
    })

    it('handles menu item click', () => {
      const mockOnClick = jest.fn()
      const menuItems: MenuItem[] = [
        { id: 'test', label: 'Test Item', onClick: mockOnClick }
      ]
      
      render(<AppBar menuItems={menuItems} />)
      fireEvent.click(screen.getByText('Test Item'))
      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('highlights active menu item', () => {
      render(<AppBar menuItems={mockMenuItems} activeItem="about" />)
      
      const aboutButton = screen.getByText('About')
      expect(aboutButton).toHaveClass('appbar__menu-link--active')
    })

    it('disables disabled menu items', () => {
      const disabledItems: MenuItem[] = [
        { id: 'disabled', label: 'Disabled Item', disabled: true }
      ]
      
      render(<AppBar menuItems={disabledItems} />)
      
      const disabledButton = screen.getByText('Disabled Item')
      expect(disabledButton).toBeDisabled()
      expect(disabledButton).toHaveClass('appbar__menu-link--disabled')
    })
  })

  describe('Actions', () => {
    it('renders action buttons', () => {
      render(<AppBar actions={mockActions} />)
      
      expect(screen.getByText('Login')).toBeInTheDocument()
      expect(screen.getByText('Sign Up')).toBeInTheDocument()
    })

    it('handles action button click', () => {
      const mockOnClick = jest.fn()
      const actions: ActionButton[] = [
        { id: 'test', label: 'Test Action', onClick: mockOnClick }
      ]
      
      render(<AppBar actions={actions} />)
      fireEvent.click(screen.getByText('Test Action'))
      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('renders action buttons with icons', () => {
      const IconComponent = () => <span data-testid="action-icon">🚀</span>
      const actions: ActionButton[] = [
        { id: 'icon-test', label: 'With Icon', icon: <IconComponent /> }
      ]
      
      render(<AppBar actions={actions} />)
      expect(screen.getByTestId('action-icon')).toBeInTheDocument()
    })
  })

  describe('Brand interaction', () => {
    it('handles brand click', () => {
      const mockBrandClick = jest.fn()
      render(<AppBar title="Test" onBrandClick={mockBrandClick} />)
      
      fireEvent.click(screen.getByText('Test'))
      expect(mockBrandClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Variants and positioning', () => {
    it('applies position classes', () => {
      const { rerender } = render(<AppBar position="sticky" />)
      expect(document.querySelector('.appbar')).toHaveClass('appbar--sticky')
      
      rerender(<AppBar position="fixed" />)
      expect(document.querySelector('.appbar')).toHaveClass('appbar--fixed')
    })

    it('applies variant classes', () => {
      const { rerender } = render(<AppBar variant="elevated" />)
      expect(document.querySelector('.appbar')).toHaveClass('appbar--elevated')
      
      rerender(<AppBar variant="default" />)
      expect(document.querySelector('.appbar')).toHaveClass('appbar--default')
    })

    it('applies custom className', () => {
      render(<AppBar className="custom-appbar" />)
      expect(document.querySelector('.appbar')).toHaveClass('custom-appbar')
    })
  })

  describe('Responsive behavior', () => {
    it('shows mobile menu toggle on mobile', () => {
      mockInnerWidth(500) // Mobile width
      render(<AppBar menuItems={mockMenuItems} />)
      
      // Wait for resize effect
      setTimeout(() => {
        expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument()
      }, 100)
    })

    it('toggles mobile menu', () => {
      mockInnerWidth(500) // Mobile width
      render(<AppBar menuItems={mockMenuItems} />)
      
      setTimeout(() => {
        const toggleButton = screen.getByLabelText('Toggle mobile menu')
        fireEvent.click(toggleButton)
        
        // Check if mobile menu is visible
        expect(document.querySelector('.appbar__mobile-menu')).toBeInTheDocument()
      }, 100)
    })

    it('uses custom mobile breakpoint', () => {
      render(<AppBar menuItems={mockMenuItems} mobileBreakpoint={900} />)
      
      mockInnerWidth(800) // Between default 768 and custom 900
      
      setTimeout(() => {
        expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument()
      }, 100)
    })
  })
})
