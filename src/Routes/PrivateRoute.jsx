import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(authContext);
    if(loading){
        return <progress className='progress w-56'></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;