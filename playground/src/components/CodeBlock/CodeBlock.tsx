import React, { useState } from 'react'
import './CodeBlock.css'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  copyable?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'jsx',
  title,
  copyable = true
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="code-block">
      {title && (
        <div className="code-block-header">
          <span className="code-block-title">{title}</span>
          {copyable && (
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              aria-label="Copy code"
            >
              {copied ? '✓' : '📋'}
            </button>
          )}
        </div>
      )}
      
      <div className="code-block-content">
        <pre className={`language-${language}`}>
          <code>{code}</code>
        </pre>
        
        {!title && copyable && (
          <button
            className={`copy-button copy-button-floating ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            aria-label="Copy code"
          >
            {copied ? '✓' : '📋'}
          </button>
        )}
      </div>
    </div>
  )
}
