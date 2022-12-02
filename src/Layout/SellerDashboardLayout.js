import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footar from '../components/share/Footar';
import Navbar from '../components/share/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerDashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-blue-50'>
                <div className='w-11/12 mx-auto '>
                    <div className="drawer drawer-mobile">
                        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side bg-white">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 text-base-content">

                                {isSeller && <>
                                    <li><Link to="/seller_dashboard/addproduct">Add Product</Link></li>
                                    <li><Link to="/seller_dashboard/myproducts">My Products</Link></li>
                                    <li><Link>My Buyer</Link></li>
                                </>
                                }

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footar></Footar>
        </div>
    );
};

export default SellerDashboardLayout;