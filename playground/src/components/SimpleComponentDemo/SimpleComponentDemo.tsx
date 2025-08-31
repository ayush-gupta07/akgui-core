import React from 'react'
import { ComponentTabs } from '../ComponentTabs'
import { CodeBlock } from '../CodeBlock'
import type { ComponentConfig } from '../../types/playground'
import './SimpleComponentDemo.css'

interface SimpleComponentDemoProps {
  config: ComponentConfig
}

export const SimpleComponentDemo: React.FC<SimpleComponentDemoProps> = ({
  config
}) => {
  const tabs = [
    {
      id: 'examples',
      label: 'Examples',
      children: (
        <div className="examples-tab">
          <div className="examples-grid">
            {config.examples.map((example, index) => (
              <div key={index} className="example-container">
                <div className="example-header">
                  <h3 className="example-title">{example.title}</h3>
                  {example.description && (
                    <p className="example-description">{example.description}</p>
                  )}
                </div>
                <div className="example-group">
                  <div className="example-preview">
                    {example.component}
                  </div>
                  <div className="example-code">
                    <CodeBlock
                      title="Code"
                      code={example.code}
                      language="jsx"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  // Add documentation tab if documentation is provided
  if (config.documentation) {
    tabs.push({
      id: 'documentation',
      label: 'Documentation',
      children: (
        <div className="documentation-tab">
          <div className="documentation-content">
            {/* Component Overview */}
            <section className="doc-section">
              <h2>Overview</h2>
              <p className="doc-description">{config.documentation.description}</p>
            </section>

            {/* Installation */}
            {config.documentation.usage.installation && (
              <section className="doc-section">
                <h2>Installation</h2>
                <CodeBlock
                  code={config.documentation.usage.installation}
                  language="bash"
                />
              </section>
            )}

            {/* Basic Usage */}
            <section className="doc-section">
              <h2>Basic Usage</h2>
              <CodeBlock
                code={config.documentation.usage.basicExample}
                language="jsx"
              />
            </section>

            {/* Props */}
            <section className="doc-section">
              <h2>Props</h2>
              <div className="props-table">
                <div className="props-header">
                  <div className="prop-col-name">Name</div>
                  <div className="prop-col-type">Type</div>
                  <div className="prop-col-default">Default</div>
                  <div className="prop-col-description">Description</div>
                </div>
                <div className="props-body">
                  {config.documentation.props.map((prop, index) => (
                    <div key={index} className="prop-row">
                      <div className="prop-name">
                        <code>{prop.name}</code>
                        {prop.required && <span className="required">*</span>}
                      </div>
                      <div className="prop-type">
                        <code>{prop.type}</code>
                      </div>
                      <div className="prop-default">
                        {prop.default ? <code>{prop.default}</code> : '—'}
                      </div>
                      <div className="prop-description">
                        {prop.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Advanced Examples */}
            {config.documentation.usage.advancedExamples && (
              <section className="doc-section">
                <h2>Advanced Usage</h2>
                <div className="advanced-examples">
                  {config.documentation.usage.advancedExamples.map((example, index) => (
                    <div key={index} className="advanced-example">
                      <h3>{example.title}</h3>
                      {example.description && (
                        <p className="example-description">{example.description}</p>
                      )}
                      <CodeBlock
                        code={example.code}
                        language="jsx"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="simple-component-demo">
      <div className="component-info">
        <h2>{config.name}</h2>
        <p>{config.description}</p>
      </div>
      <ComponentTabs tabs={tabs} defaultTab="examples" />
    </div>
  )
}
