import { Navigate } from 'react-router-dom';

import { useAuth } from 'contexts/AuthContext.js';

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/pages/login/login3" />;
}
