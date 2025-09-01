import React, { useState, useEffect } from 'react'
import { Button } from '../Button'
import './AppBar.css'

// Types
export interface MenuItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  disabled?: boolean
}

export interface ActionButton {
  id: string
  label: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  icon?: React.ReactNode
  onClick?: () => void
}

export interface AppBarProps {
  // Brand section
  logo?: string | React.ReactNode
  title?: string
  onBrandClick?: () => void
  
  // Navigation
  menuItems?: MenuItem[]
  activeItem?: string
  onMenuItemClick?: (item: MenuItem) => void
  
  // Actions
  actions?: ActionButton[]
  
  // Layout & styling
  position?: 'static' | 'sticky' | 'fixed'
  variant?: 'default' | 'elevated'
  
  // Responsive
  mobileBreakpoint?: number
  
  // Custom styling
  className?: string
  style?: React.CSSProperties
}

export const AppBar: React.FC<AppBarProps> = ({
  logo,
  title,
  onBrandClick,
  menuItems = [],
  activeItem,
  onMenuItemClick,
  actions = [],
  position = 'static',
  variant = 'default',
  mobileBreakpoint = 768,
  className = '',
  style
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < mobileBreakpoint
      setIsMobile(mobile)
      
      // Close mobile menu when switching to desktop
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileBreakpoint, isMobileMenuOpen])

  // Handle menu item click
  const handleMenuItemClick = (item: MenuItem) => {
    if (item.disabled) return
    
    if (item.onClick) {
      item.onClick()
    }
    
    if (onMenuItemClick) {
      onMenuItemClick(item)
    }
    
    // Close mobile menu after selection
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  // Handle brand click
  const handleBrandClick = () => {
    if (onBrandClick) {
      onBrandClick()
    }
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Build CSS classes
  const appBarClasses = [
    'appbar',
    `appbar--${position}`,
    `appbar--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={appBarClasses} style={style}>
        <div className="appbar__container">
          {/* Brand Section */}
          <div className="appbar__brand" onClick={handleBrandClick}>
            {logo && (
              <div className="appbar__logo">
                {typeof logo === 'string' ? (
                  <img src={logo} alt={title || 'Logo'} />
                ) : (
                  logo
                )}
              </div>
            )}
            {title && (
              <h1 className="appbar__title">{title}</h1>
            )}
          </div>

          {/* Desktop Navigation */}
          {menuItems.length > 0 && (
            <nav className={`appbar__nav ${isMobile ? 'appbar__nav--mobile' : ''}`}>
              {!isMobile && (
                <ul className="appbar__menu">
                  {menuItems.map((item) => (
                    <li key={item.id} className="appbar__menu-item">
                      <button
                        className={`appbar__menu-link ${
                          activeItem === item.id ? 'appbar__menu-link--active' : ''
                        } ${item.disabled ? 'appbar__menu-link--disabled' : ''}`}
                        onClick={() => handleMenuItemClick(item)}
                        disabled={item.disabled}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          )}

          {/* Actions Section */}
          <div className="appbar__actions">
            {actions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant || 'ghost'}
                onClick={action.onClick}
                className="appbar__action-button"
              >
                {action.icon && <span className="appbar__action-icon">{action.icon}</span>}
                {action.label}
              </Button>
            ))}

            {/* Mobile Menu Toggle */}
            {isMobile && menuItems.length > 0 && (
              <button
                className={`appbar__mobile-toggle ${isMobileMenuOpen ? 'appbar__mobile-toggle--open' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span className="appbar__hamburger"></span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && menuItems.length > 0 && (
          <div className="appbar__mobile-menu">
            <nav className="appbar__mobile-nav">
              <ul className="appbar__mobile-menu-list">
                {menuItems.map((item) => (
                  <li key={item.id} className="appbar__mobile-menu-item">
                    <button
                      className={`appbar__mobile-menu-link ${
                        activeItem === item.id ? 'appbar__mobile-menu-link--active' : ''
                      } ${item.disabled ? 'appbar__mobile-menu-link--disabled' : ''}`}
                      onClick={() => handleMenuItemClick(item)}
                      disabled={item.disabled}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="appbar__overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default AppBar
