import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import DataContext from './context/DataContext/DataContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContext>
      <RouterProvider router={router}></RouterProvider>
    </DataContext>
  </StrictMode>,
)
