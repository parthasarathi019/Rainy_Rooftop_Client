// //eslint-disable-next-line
// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import Progress_bar from '../Progress_Bar/Progress_Bar';
// import { AuthContext } from '../Providers/AuthProviders';

// const Private_Route = ({children}) => {
//     const {user , loading} = useContext(AuthContext)
    
    
//     const location = useLocation()
//     console.log(location);
//     if (loading) {
//        return  <Progress_bar></Progress_bar>
//     }
    
//     if (user) {
//         return children ;
    
//     } 
   
//     return <Navigate to="/Login" state={{from: location}} replace={true} ></Navigate> /////////////////////666
// };

// export default Private_Route;




import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import Progress_bar from "../Progress_Bar/Progress_Bar";


const Private_Route = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Progress_bar></Progress_bar>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Private_Route;
//
