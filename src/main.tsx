import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { AppRoutes } from './enums/Routes'
import './index.css'
import { CreateAccountPage } from './routes/CreateAccountPage'
import { HomePage } from './routes/HomePage'
import { LoginPage } from './routes/LoginPage'
import { WelcomePage } from './routes/WelcomePage'

const router = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <App />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    path: AppRoutes.WELCOME,
    element: <WelcomePage />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: AppRoutes.CREATE_ACCOUNT,
    element: <CreateAccountPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
