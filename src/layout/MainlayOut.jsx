import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainlayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainlayOut;