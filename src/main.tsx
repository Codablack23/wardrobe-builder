import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ViewContextProvider from './contexts/ViewContext'
import DimensionContextProvider from './contexts/DimensionContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <ViewContextProvider>
        <DimensionContextProvider>
           <App />
        </DimensionContextProvider>
      </ViewContextProvider>
)
