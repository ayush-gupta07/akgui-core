/**
 * Utility functions used across AKGUI components
 */

import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to conditionally join CSS classes
 * Uses clsx under the hood for better performance and API
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Generate a unique ID for components
 */
export function generateId(prefix = 'akgui'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if a value is defined (not null or undefined)
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
