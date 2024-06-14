import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { MainLayout } from '../Layout'

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                <Route path='/home' element={<Home />}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}