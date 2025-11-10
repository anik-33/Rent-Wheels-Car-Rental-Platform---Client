import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user,loading}=use(AuthContext)

    if(loading){
        return <div>loading...</div>
    }
    if (!user){
        return <Navigate to="/auth/login"></Navigate>
    }

    return children;
};

export default PrivetRoute;