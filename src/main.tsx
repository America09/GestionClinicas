import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AppRouter from './Routes/Routes.tsx'
import { Header } from './Components/Header.tsx'
import { Sidebar } from './Components/Sidebar.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
    <Header/>
    <Sidebar/>

  </React.StrictMode>,
)
