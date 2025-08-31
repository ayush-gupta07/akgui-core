import React, { useState } from 'react'
import './ComponentTabs.css'

interface TabItem {
  id: string
  label: string
  children: React.ReactNode
}

interface ComponentTabsProps {
  tabs: TabItem[]
  defaultTab?: string
}

export const ComponentTabs: React.FC<ComponentTabsProps> = ({
  tabs,
  defaultTab
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '')

  const activeTabContent = tabs.find(tab => tab.id === activeTab)

  return (
    <div className="component-tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tabs-content">
        {activeTabContent?.children}
      </div>
    </div>
  )
}
