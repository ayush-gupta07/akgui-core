/**
 * Jest setup file for AKGUI component library
 * This file runs before each test file
 */

import '@testing-library/jest-dom';

// Setup global test utilities if needed
global.console = {
  ...console,
  // Suppress console.error in tests unless it's a real error
  error: jest.fn(),
  warn: jest.fn(),
};
