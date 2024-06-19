
import { Outlet } from 'react-router-dom';
import { HeaderAuth } from '../Components/Auth/HeaderAuth';
import { Sidebar } from '../Components/Auth/Sidebar';

const MainLayout = () => {
    return (
        <>
            <HeaderAuth />
            <Sidebar />
        </>
    )
}