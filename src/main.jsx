import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './fakeStore/App'
import App from './Wheather/App'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  /* </StrictMode>, */
)
