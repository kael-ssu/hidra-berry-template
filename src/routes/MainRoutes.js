import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './PrivateRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Users = Loadable(lazy(() => import('views/utilities/Users')));
const Plants = Loadable(lazy(() => import('views/utilities/Plants')));
const Devices = Loadable(lazy(() => import('views/utilities/Devices')));
const UpdateProfile = Loadable(lazy(() => import('views/utilities/UpdateProfile')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <PrivateRoute>
            <MainLayout />
        </PrivateRoute>
    ),
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
        },
        {
            path: '/',
            children: [
                {
                    path: 'update-profile',
                    element: <UpdateProfile />
                }
            ]
        }
    ]
};

export default MainRoutes;
