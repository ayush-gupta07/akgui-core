import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  describe('Basic rendering', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders as button element by default', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('applies primary variant by default', () => {
      render(<Button>Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--primary')
    })

    it('applies secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--secondary')
    })

    it('applies ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--ghost')
    })

    it('applies danger variant', () => {
      render(<Button variant="danger">Danger</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--danger')
    })
  })

  describe('Sizes', () => {
    it('applies medium size by default', () => {
      render(<Button>Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--medium')
    })

    it('applies small size', () => {
      render(<Button size="small">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--small')
    })

    it('applies large size', () => {
      render(<Button size="large">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--large')
    })
  })

  describe('States', () => {
    it('applies disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('akgui-button--disabled')
    })

    it('applies loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('akgui-button--loading')
      expect(button).toContainHTML('⟳')
    })

    it('applies full width', () => {
      render(<Button fullWidth>Full Width</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--full-width')
    })
  })

  describe('Icons', () => {
    it('renders start icon', () => {
      render(<Button startIcon="🔥">With Start Icon</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--with-start-icon')
      expect(button).toContainHTML('🔥')
    })

    it('renders end icon', () => {
      render(<Button endIcon="→">With End Icon</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('akgui-button--with-end-icon')
      expect(button).toContainHTML('→')
    })

    it('hides icons when loading', () => {
      render(
        <Button loading startIcon="🔥" endIcon="→">
          Loading
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).not.toContainHTML('🔥')
      expect(button).not.toContainHTML('→')
      expect(button).toContainHTML('⟳')
    })
  })

  describe('Interactions', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn()
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )
      
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not call onClick when loading', () => {
      const handleClick = jest.fn()
      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      )
      
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('HTML attributes', () => {
    it('accepts custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
      expect(button).toHaveClass('akgui-button')
    })

    it('accepts type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('accepts other button attributes', () => {
      render(
        <Button data-testid="test-button" aria-label="Custom label">
          Button
        </Button>
      )
      const button = screen.getByTestId('test-button')
      expect(button).toHaveAttribute('aria-label', 'Custom label')
    })
  })
})
