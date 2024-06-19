
import { Outlet } from 'react-router-dom';
import { HeaderAuth } from '../Components/Auth/HeaderAuth';
import { Sidebar } from '../Components/Auth/Sidebar';

const MainLayout = () => {
    return (
        <div>
            <HeaderAuth  />
            <div className="main-content">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
