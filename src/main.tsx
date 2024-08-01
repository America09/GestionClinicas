import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';
import './index.css';
import AppRouter from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
  </React.StrictMode>
);