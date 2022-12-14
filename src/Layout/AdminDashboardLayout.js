
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footar from '../components/share/Footar';
import Navbar from '../components/share/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminDashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-blue-50">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {isAdmin && <>
                            <li><Link to="/admin_dashboard/allbuyer">All Buyer</Link></li>
                            <li><Link to="/admin_dashboard/allseller">All Seller</Link></li>
                            <li><Link to="">Reported Items</Link></li>
                        </>

                        }


                    </ul>

                </div>
            </div>
            <Footar></Footar>
        </div>
    );
};

export default AdminDashboardLayout;