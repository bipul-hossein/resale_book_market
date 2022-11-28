import React from 'react';
import { Outlet } from 'react-router-dom';
import Footar from '../components/share/Footar';
import Navbar from '../components/share/Navbar';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footar></Footar>
        </div>
    );
};

export default Main;