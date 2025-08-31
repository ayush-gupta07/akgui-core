import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import './Layout.css'

interface PlaygroundLayoutProps {
  children: React.ReactNode
}

export const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      // Auto-open sidebar on desktop, close on mobile
      if (!mobile && !isSidebarOpen) {
        setIsSidebarOpen(true)
      } else if (mobile && isSidebarOpen) {
        setIsSidebarOpen(false)
      }
    }

    // Initial setup
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isSidebarOpen])

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="playground-layout">
      <Header 
        onMenuToggle={handleMenuToggle}
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="layout-body">
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
        />
        
        <MainContent 
          isSidebarOpen={isSidebarOpen}
        >
          {children}
        </MainContent>
      </div>
    </div>
  )
}

export default PlaygroundLayout
