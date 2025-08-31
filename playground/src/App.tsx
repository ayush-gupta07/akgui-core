import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PlaygroundLayout } from './components/Layout'
import PlaygroundRoutes from './routes/PlaygroundRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <PlaygroundLayout>
        <PlaygroundRoutes />
      </PlaygroundLayout>
    </BrowserRouter>
  )
}

export default App
