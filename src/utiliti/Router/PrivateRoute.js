import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user,lodding}=useContext(AuthContext)
     if(lodding){
        return <progress className="progress w-56"></progress>
     }

    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;