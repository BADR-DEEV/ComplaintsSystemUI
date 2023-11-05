import { Navigate , Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/Store';




const PrivateRoute = () => {

   
   const userLogin = useSelector((state: RootState) => state.auth)
   const locatoin = useLocation();
    return (
     //     userLogin.user ? <Outlet /> : <Navigate to="/login" replace state={{locatoin}}/>
         userLogin.user ? <Outlet /> : <Navigate to="/login"/>

    );
};

export default PrivateRoute;