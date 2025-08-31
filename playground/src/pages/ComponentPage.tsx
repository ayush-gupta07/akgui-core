import React from 'react'
import { useParams } from 'react-router-dom'
import { getComponentByPath } from '../routes/componentRoutes'
import { SimpleComponentDemo } from '../components'
import { getDemoConfig } from '../demos'

const ComponentPage: React.FC = () => {
  const { componentName } = useParams<{ componentName: string }>()
  const componentPath = `/${componentName}`
  const componentInfo = getComponentByPath(componentPath)

  if (!componentInfo) {
    return (
      <div className="welcome-content">
        <div className="welcome-header">
          <h1>Component Not Found</h1>
          <p>The component "{componentName}" doesn't exist yet.</p>
        </div>
      </div>
    )
  }

  // Render component demo using generic system
  const renderComponentDemo = () => {
    const demoConfig = getDemoConfig(componentName || '')
    
    if (demoConfig) {
      return <SimpleComponentDemo config={demoConfig} />
    }
    
    // Fallback for components without demos yet
    return (
      <div className="placeholder-card">
        <h3>🚧 Component Under Development</h3>
        <p>
          The {componentInfo.name} component is currently being built. 
          Check back soon for interactive examples and documentation!
        </p>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
          <strong>Category:</strong> {componentInfo.category}
        </div>
      </div>
    )
  }

  return (
    <div className="component-page">
      {renderComponentDemo()}
    </div>
  )
}

export default ComponentPage
