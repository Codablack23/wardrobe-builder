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
import LayoutContextProvider from './contexts/LayoutContext'
import DividerContextProvider from './contexts/DividerContext'
import { RailsContextProvider } from './contexts/RailsContext'
import DrawerContextProvider from './contexts/DrawersContext'
import DividerExtraContextProvider from './contexts/DividerExtrasContext'
import UnitContextProvider from './contexts/UnitContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <UnitContextProvider>
      <ViewContextProvider>
        <DimensionContextProvider>
          <MaterialContextProvider>
          <BaseContextProvider>
          <DoorsContextProvider>
          <ShelvesContextProvider>
          <LayoutContextProvider>
          <DividerContextProvider>
          <RailsContextProvider>
          <DrawerContextProvider>
          <DividerExtraContextProvider>
            <App />
          </DividerExtraContextProvider>
          </DrawerContextProvider>
          </RailsContextProvider>
          </DividerContextProvider>
          </LayoutContextProvider>
          </ShelvesContextProvider>
          </DoorsContextProvider>
           </BaseContextProvider>
          </MaterialContextProvider>
        </DimensionContextProvider>
      </ViewContextProvider>
      </UnitContextProvider>
)
