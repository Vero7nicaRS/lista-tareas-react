import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
// Hay que importar TaskProvider desde el contexto que se creó
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider> 
      <App />
    </TaskProvider>
  </StrictMode>,
)
