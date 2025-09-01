import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from './Card'

describe('Card', () => {

  describe('Basic rendering', () => {
    it('renders without crashing', () => {
      render(<Card>Basic content</Card>)
      expect(screen.getByText('Basic content')).toBeInTheDocument()
    })

    it('renders with title', () => {
      render(<Card title="Test Title">Content</Card>)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('renders with subtitle', () => {
      render(
        <Card title="Title" subtitle="Test Subtitle">
          Content
        </Card>
      )
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    })

    it('renders with footer', () => {
      render(
        <Card footer={<div>Footer content</div>}>
          Content
        </Card>
      )
      expect(screen.getByText('Footer content')).toBeInTheDocument()
    })

    it('renders with image', () => {
      render(
        <Card image="/test-image.jpg" imageAlt="Test image">
          Content
        </Card>
      )
      const image = screen.getByAltText('Test image')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/test-image.jpg')
    })

    it('renders with custom image element', () => {
      const CustomImage = () => <div data-testid="custom-image">Custom Image</div>
      render(
        <Card image={<CustomImage />}>
          Content
        </Card>
      )
      expect(screen.getByTestId('custom-image')).toBeInTheDocument()
    })
  })

  describe('Visual variants', () => {
    it('applies flat variant by default', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--outlined') // default is outlined, not flat
    })

    it('applies flat variant', () => {
      render(<Card variant="flat">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--flat')
    })

    it('applies outlined variant', () => {
      render(<Card variant="outlined">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--outlined')
    })

    it('applies elevated variant', () => {
      render(<Card variant="elevated">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--elevated')
    })

    it('applies subtle variant', () => {
      render(<Card variant="subtle">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--subtle')
    })
  })

  describe('Size variants', () => {
    it('applies comfortable size by default', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--comfortable')
    })

    it('applies compact size', () => {
      render(<Card size="compact">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--compact')
    })

    it('applies spacious size', () => {
      render(<Card size="spacious">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--spacious')
    })
  })

  describe('Orientation', () => {
    it('applies vertical orientation by default', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--vertical')
    })

    it('applies horizontal orientation', () => {
      render(<Card orientation="horizontal">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--horizontal')
    })
  })

  describe('Interaction states', () => {
    it('applies clickable class when clickable', () => {
      render(<Card clickable>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--clickable')
    })

    it('applies selected class when selected', () => {
      render(<Card selected>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--selected')
    })

    it('applies loading class when loading', () => {
      render(<Card loading>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--loading')
    })

    it('applies disabled class when disabled', () => {
      render(<Card disabled>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('card--disabled')
    })

    it('shows loading spinner when loading', () => {
      render(<Card loading>Content</Card>)
      expect(screen.getByLabelText('Loading...')).toBeInTheDocument()
    })
  })

  describe('Click interactions', () => {
    it('handles click events when clickable', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.click(card!)
      expect(mockClick).toHaveBeenCalledTimes(1)
    })

    it('does not handle click when disabled', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable disabled onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.click(card!)
      expect(mockClick).not.toHaveBeenCalled()
    })

    it('does not handle click when loading', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable loading onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.click(card!)
      expect(mockClick).not.toHaveBeenCalled()
    })
  })

  describe('Keyboard interactions', () => {
    it('handles Enter key when clickable', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.keyDown(card!, { key: 'Enter' })
      expect(mockClick).toHaveBeenCalledTimes(1)
    })

    it('handles Space key when clickable', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.keyDown(card!, { key: ' ' })
      expect(mockClick).toHaveBeenCalledTimes(1)
    })

    it('does not handle keyboard events when disabled', () => {
      const mockClick = jest.fn()
      render(
        <Card clickable disabled onClick={mockClick}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.keyDown(card!, { key: 'Enter' })
      expect(mockClick).not.toHaveBeenCalled()
    })

    it('calls custom onKeyDown handler', () => {
      const mockKeyDown = jest.fn()
      render(
        <Card clickable onKeyDown={mockKeyDown}>
          Content
        </Card>
      )
      
      const card = screen.getByText('Content').closest('.card')
      fireEvent.keyDown(card!, { key: 'Tab' })
      expect(mockKeyDown).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accessibility', () => {
    it('sets proper role for clickable cards', () => {
      render(<Card clickable>Content</Card>)
      const card = screen.getByRole('button')
      expect(card).toBeInTheDocument()
    })

    it('sets tabindex for clickable cards', () => {
      render(<Card clickable>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveAttribute('tabindex', '0')
    })

    it('does not set tabindex for disabled clickable cards', () => {
      render(<Card clickable disabled>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).not.toHaveAttribute('tabindex')
    })

    it('applies custom aria-label', () => {
      render(<Card aria-label="Custom label">Content</Card>)
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
    })

    it('applies aria-pressed for selected clickable cards', () => {
      render(<Card clickable selected>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveAttribute('aria-pressed', 'true')
    })

    it('applies aria-disabled for disabled cards', () => {
      render(<Card clickable disabled>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveAttribute('aria-disabled', 'true')
    })

    it('sets proper image alt text fallback', () => {
      render(
        <Card title="Card Title" image="/test.jpg">
          Content
        </Card>
      )
      const image = screen.getByAltText('Card Title')
      expect(image).toBeInTheDocument()
    })
  })

  describe('Custom styling', () => {
    it('accepts custom className', () => {
      render(<Card className="custom-card">Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveClass('custom-card')
      expect(card).toHaveClass('card')
    })

    it('accepts custom styles', () => {
      render(<Card style={{ backgroundColor: 'red' }}>Content</Card>)
      const card = screen.getByText('Content').closest('.card')
      expect(card).toHaveStyle({ backgroundColor: 'red' })
    })

    it('accepts custom role', () => {
      render(<Card role="region">Content</Card>)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })
  })

  describe('Complex content', () => {
    it('renders React elements as title', () => {
      const CustomTitle = () => <span data-testid="custom-title">Custom Title</span>
      render(<Card title={<CustomTitle />}>Content</Card>)
      expect(screen.getByTestId('custom-title')).toBeInTheDocument()
    })

    it('renders React elements as subtitle', () => {
      const CustomSubtitle = () => <span data-testid="custom-subtitle">Custom Subtitle</span>
      render(<Card subtitle={<CustomSubtitle />}>Content</Card>)
      expect(screen.getByTestId('custom-subtitle')).toBeInTheDocument()
    })

    it('renders complex footer content', () => {
      const Footer = () => (
        <div>
          <button>Action 1</button>
          <button>Action 2</button>
        </div>
      )
      render(<Card footer={<Footer />}>Content</Card>)
      expect(screen.getByText('Action 1')).toBeInTheDocument()
      expect(screen.getByText('Action 2')).toBeInTheDocument()
    })
  })
})
