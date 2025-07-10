import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/privacy-policy',
    element:<PrivacyPolicy/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

