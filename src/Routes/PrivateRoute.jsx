import React, { useContext } from 'react';
import { AuthContext } from '../pages/Provider/AuthProvider';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Loading from '../pages/shared/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
         return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;