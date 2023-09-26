import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ViewContextProvider from './contexts/ViewContext'
import DimensionContextProvider from './contexts/DimensionContext'
import MaterialContextProvider from './contexts/MaterialContext'
import BaseContextProvider from './contexts/BaseContext'
import DoorsContextProvider from './contexts/DoorsContext'
import ShelvesContextProvider from './contexts/ShelvesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <ViewContextProvider>
        <DimensionContextProvider>
          <MaterialContextProvider>
          <BaseContextProvider>
          <DoorsContextProvider>
          <ShelvesContextProvider>
            <App />
          </ShelvesContextProvider>
          </DoorsContextProvider>
           </BaseContextProvider>
          </MaterialContextProvider>
        </DimensionContextProvider>
      </ViewContextProvider>
)
