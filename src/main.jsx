import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import GlobalStateProvider from './Providers/GlobalStateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GlobalStateProvider>
        <RouterProvider router={router} />
      </GlobalStateProvider>
    </AuthProvider>
  </StrictMode>,
)
