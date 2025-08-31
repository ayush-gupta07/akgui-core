import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ComponentPage from '../pages/ComponentPage'

const PlaygroundRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home/Overview page */}
      <Route path="/" element={<HomePage />} />
      
      {/* Individual component pages */}
      <Route path="/:componentName" element={<ComponentPage />} />
      
      {/* Fallback for unknown routes */}
      <Route path="*" element={
        <div className="welcome-content">
          <div className="welcome-header">
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default PlaygroundRoutes
