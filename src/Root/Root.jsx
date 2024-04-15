import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div className='max-w-7xl mx-auto my-6 px-2 md:px-2 lg:px-0 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;