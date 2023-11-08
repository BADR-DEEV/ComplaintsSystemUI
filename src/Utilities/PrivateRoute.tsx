import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/Store';

const PrivateRoute = () => {
    const userLogin = useSelector((state: RootState) => state.auth)
    return (
        userLogin.user ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute;