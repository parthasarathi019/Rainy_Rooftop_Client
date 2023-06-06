//eslint-disable-next-line
import React from 'react';
import Admin_Home_Main from './Admin/Admin_Home_Main/Admin_Home_Main';
import User_Home_Main from './User/User_Home_Main/User_Home_Main';
import useAdmin from '../../Hooks/useAdmin';


const Default_Dashdoard = () => {
     const [isAdmin] = useAdmin()
    //  const isAdmin = true
    return (
        <div>
            {
                isAdmin ?  <Admin_Home_Main></Admin_Home_Main> : <User_Home_Main></User_Home_Main>
            }
        </div>
    );
};

export default Default_Dashdoard;