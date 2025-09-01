#!/usr/bin/env bash

# Build script for Vercel deployment
echo "Building AKGUI Playground for Vercel..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the playground
echo "Building playground..."
npm run playground:build

echo "Build completed successfully!"
echo "Output directory: playground/dist"
ls -la playground/dist/
