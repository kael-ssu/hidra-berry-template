import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Users = Loadable(lazy(() => import('views/utilities/Users')));
const Plants = Loadable(lazy(() => import('views/utilities/Plants')));
const Devices = Loadable(lazy(() => import('views/utilities/Devices')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'users',
                    element: <Users />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'plants',
                    element: <Plants />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'devices',
                    element: <Devices />
                }
            ]
        }
    ]
};

export default MainRoutes;
