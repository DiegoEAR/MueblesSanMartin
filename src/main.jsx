import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { MenuProvider } from './components/Context/MenuContext.jsx'
import { CartProvider } from './components/Context/CartContext.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <CartProvider>
        <MenuProvider>
          <App />
          <GlobalStyles />
        </MenuProvider>
        </CartProvider>

      </PersistGate>
    </Provider>
  </React.StrictMode>
)
