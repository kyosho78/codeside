import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext'; // Import the AuthProvider from AuthContext.jsx
import { BrowserRouter } from 'react-router-dom'; 

// Render the app with the AuthProvider and BrowserRouter, Valter Backström  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
