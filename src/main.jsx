import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { MenuProvider } from './components/Context/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <App />
      <GlobalStyles />
    </MenuProvider>
  </React.StrictMode>
)
