
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/share/Navbar';

const AdminDashboardLayout = () => {



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                    
                       <>
                                <li><Link to="/admin_dashboard/allbuyer">All Buyer</Link></li>
                                <li><Link to="/admin_dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/admin_dashboard/managedoctors">Manage Doctors</Link></li>
                        </>
                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;