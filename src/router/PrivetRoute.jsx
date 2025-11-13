import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import toast from 'react-hot-toast';


const PrivetRoute = ({children}) => {
    const {user,loading}=use(AuthContext)

    if(loading){
        return <div>loading...</div>
    }
    if (!user){
            toast.error("Please log in first!")
        return <Navigate to="/auth/login"></Navigate>

    }
 
    return children;
};

export default PrivetRoute;