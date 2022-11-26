import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/share/Navbar';

const SellerDashboardLayout = () => {
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
                                <li><Link to="/seller_dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/seller_dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/seller_dashboard/mybuyer">My Buyer</Link></li>
                        </>
                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SellerDashboardLayout;