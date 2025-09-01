#!/usr/bin/env bash
set -e

# Build script for Vercel deployment
echo "Building AKGUI Playground for Vercel..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the playground
echo "Building playground..."
npm run playground:build

# Verify the build output
echo "Build completed successfully!"
echo "Verifying output directory..."

if [ -d "playground/dist" ]; then
    echo "✅ playground/dist directory exists"
    ls -la playground/dist/
    
    # Check if index.html exists
    if [ -f "playground/dist/index.html" ]; then
        echo "✅ index.html found"
    else
        echo "❌ index.html not found"
        exit 1
    fi
else
    echo "❌ playground/dist directory not found"
    echo "Available directories:"
    find . -name "dist" -type d
    exit 1
fi

echo "🎉 Build verification complete!"
