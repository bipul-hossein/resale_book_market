import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/share/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerDashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)

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
                    
                      { isSeller &&  <>
                                <li><Link to="/seller_dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/seller_dashboard/myproducts">My Products</Link></li>
                                <li><Link to="">My Buyer</Link></li>
                        </>                
                      }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SellerDashboardLayout;