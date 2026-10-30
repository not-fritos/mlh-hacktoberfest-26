import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TerminalWrapper from './components/TerminalWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TerminalWrapper />
  </StrictMode>,
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
