import React from 'react'
import './Layout.css'

interface MainContentProps {
  children: React.ReactNode
  isSidebarOpen: boolean
}

export const MainContent: React.FC<MainContentProps> = ({ 
  children, 
  isSidebarOpen 
}) => {
  return (
    <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="main-content-inner">
        {children}
      </div>
    </main>
  )
}

export default MainContent
