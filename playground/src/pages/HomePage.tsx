import React from 'react'
import { AKGUI_VERSION } from '../../../src/index'

const HomePage: React.FC = () => {
  return (
    <div className="welcome-content">
      <div className="welcome-header">
        <h1>Welcome to AKGUI</h1>
        <p>A minimal and fast React component library inspired by LinkedIn's design system.</p>
        <div className="version-info">
          <span className="version-badge">Version {AKGUI_VERSION}</span>
          <span className="status-badge">In Development</span>
        </div>
      </div>
      
      <div className="getting-started">
        <h2>Getting Started</h2>
        <div className="placeholder-grid">
          <div className="placeholder-card">
            <h3>🎨 Design System</h3>
            <p>Clean, professional components following LinkedIn's aesthetic principles.</p>
          </div>
          <div className="placeholder-card">
            <h3>⚡ Performance</h3>
            <p>Optimized for speed with minimal bundle size and fast rendering.</p>
          </div>
          <div className="placeholder-card">
            <h3>📱 Responsive</h3>
            <p>Mobile-first design that works beautifully across all device sizes.</p>
          </div>
          <div className="placeholder-card">
            <h3>♿ Accessible</h3>
            <p>Built with accessibility in mind, following WCAG guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
