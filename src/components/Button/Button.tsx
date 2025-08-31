import * as React from 'react'
import { cn } from '../../utils'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the button */
  children?: React.ReactNode
  /** Visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  /** Size of the button */
  size?: 'small' | 'medium' | 'large'
  /** Whether the button is disabled */
  disabled?: boolean
  /** Whether the button is in a loading state */
  loading?: boolean
  /** Icon to display before the button text */
  startIcon?: React.ReactNode
  /** Icon to display after the button text */
  endIcon?: React.ReactNode
  /** Whether the button should take full width */
  fullWidth?: boolean
  /** Custom className */
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  fullWidth = false,
  className,
  type = 'button',
  ...props
}) => {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={cn(
        'akgui-button',
        `akgui-button--${variant}`,
        `akgui-button--${size}`,
        {
          'akgui-button--disabled': isDisabled,
          'akgui-button--loading': loading,
          'akgui-button--full-width': fullWidth,
          'akgui-button--with-start-icon': !!startIcon,
          'akgui-button--with-end-icon': !!endIcon,
        },
        className
      )}
      {...props}
    >
      {loading && (
        <span className="akgui-button__loading-icon" aria-hidden="true">
          ⟳
        </span>
      )}
      {!loading && startIcon && (
        <span className="akgui-button__start-icon" aria-hidden="true">
          {startIcon}
        </span>
      )}
      {children && (
        <span className="akgui-button__content">
          {children}
        </span>
      )}
      {!loading && endIcon && (
        <span className="akgui-button__end-icon" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  )
}

export default Button
