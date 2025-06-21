import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';  // IMPORTANTE: importar o CSS com Tailwind aqui
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
