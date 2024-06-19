import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';

const AppRouter = () => {
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