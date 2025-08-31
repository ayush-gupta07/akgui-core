import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPONENTS } from '../../routes/componentRoutes'
import './Layout.css'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Components</h2>
          <button 
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <div className="sidebar-content">
          {/* Navigation */}
          <nav className="component-nav">
            <div className="nav-section">
              <h3 className="nav-section-title">Getting Started</h3>
              <ul className="nav-list">
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                  <Link to="/" className="nav-link" onClick={onClose}>
                    Overview
                  </Link>
                </li>
              </ul>
            </div>

            {/* Render all components under Components section */}
            <div className="nav-section">
              <h3 className="nav-section-title">Components</h3>
              <ul className="nav-list">
                {COMPONENTS.map((component) => (
                  <li 
                    key={component.path} 
                    className={`nav-item ${location.pathname === component.path ? 'active' : ''}`}
                  >
                    <Link 
                      to={component.path} 
                      className="nav-link"
                      onClick={onClose}
                    >
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
