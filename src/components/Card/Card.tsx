import React from 'react'
import './Card.css'

// Types
export interface CardProps {
  // Content Structure
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  
  // Media
  image?: string | React.ReactNode
  imageAlt?: string
  
  // Visual Variants
  variant?: 'flat' | 'outlined' | 'elevated' | 'subtle'
  
  // Layout & Sizing
  size?: 'compact' | 'comfortable' | 'spacious'
  orientation?: 'vertical' | 'horizontal'
  
  // Interaction States
  clickable?: boolean
  selected?: boolean
  loading?: boolean
  disabled?: boolean
  
  // Events
  onClick?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  
  // Accessibility
  role?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  
  // Styling
  className?: string
  style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  footer,
  image,
  imageAlt,
  variant = 'outlined',
  size = 'comfortable',
  orientation = 'vertical',
  clickable = false,
  selected = false,
  loading = false,
  disabled = false,
  onClick,
  onKeyDown,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  className = '',
  style
}) => {
  // Handle click events
  const handleClick = () => {
    if (disabled || loading) return
    if (onClick) {
      onClick()
    }
  }

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled || loading) return
    
    if (onKeyDown) {
      onKeyDown(event)
    }
    
    // Handle Enter and Space for clickable cards
    if (clickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      handleClick()
    }
  }

  // Build CSS classes
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--${size}`,
    `card--${orientation}`,
    clickable && 'card--clickable',
    selected && 'card--selected',
    loading && 'card--loading',
    disabled && 'card--disabled',
    className
  ].filter(Boolean).join(' ')

  // Determine the appropriate HTML element and props
  const CardElement = clickable ? 'article' : 'div'
  const elementProps: React.HTMLAttributes<HTMLElement> & {
    role?: string
    tabIndex?: number
    'aria-label'?: string
    'aria-labelledby'?: string
    'aria-describedby'?: string
    'aria-pressed'?: boolean
    'aria-disabled'?: boolean
  } = {
    className: cardClasses,
    style,
    role: role || (clickable ? 'button' : undefined),
    tabIndex: clickable && !disabled ? 0 : undefined,
    onClick: clickable ? handleClick : undefined,
    onKeyDown: clickable ? handleKeyDown : undefined,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedby,
    'aria-pressed': clickable && selected ? selected : undefined,
    'aria-disabled': disabled ? disabled : undefined
  }

  return (
    <CardElement {...elementProps}>
      {/* Loading Overlay */}
      {loading && (
        <div className="card__loading-overlay">
          <div className="card__loading-spinner" aria-label="Loading..." />
        </div>
      )}

      {/* Image Section */}
      {image && (
        <div className="card__media">
          {typeof image === 'string' ? (
            <img 
              src={image} 
              alt={imageAlt || (typeof title === 'string' ? title : 'Card image')}
              className="card__image"
            />
          ) : (
            image
          )}
        </div>
      )}

      {/* Content Container */}
      <div className="card__content">
        {/* Header Section */}
        {(title || subtitle) && (
          <header className="card__header">
            {title && (
              <h3 className="card__title" id={ariaLabelledby}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="card__subtitle">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {/* Body Section */}
        {children && (
          <div className="card__body" id={ariaDescribedby}>
            {children}
          </div>
        )}

        {/* Footer Section */}
        {footer && (
          <footer className="card__footer">
            {footer}
          </footer>
        )}
      </div>
    </CardElement>
  )
}

export default Card
