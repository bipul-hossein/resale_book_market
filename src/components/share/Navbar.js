import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const Navbar = () => {
    const { logOut, user,setUser } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    // console.log(user?.email);
    // console.log(isSeller)
    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                setUser(null)
                // Sign-out successful.       
               localStorage.removeItem('accessToken')
                navigate('/')
               // window.location.reload()
            }).catch((error) => {          
             // window.location.reload()
                console.error(error)
            });
    }

  
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myorders">My Orders</Link></li>

        {isAdmin ?
            <li><Link to="/admin_dashboard/">Admin Dashboard</Link></li>
            :<></>
        }
        {isSeller && 
            <li><Link to="/Seller_dashboard/">Seller Dashboard</Link></li>
        }
        <li><Link>{user?.uid ?
            <React.Fragment>
                <p>{user?.displayName}</p>
                <li><Link onClick={handleSignOut}>logOut</Link></li>       
            </React.Fragment>
            : <li><Link to="login">Login</Link></li>
        }
        </Link></li>
      
    </>

    const websiteName = 'Book Market'
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="" className="btn btn-ghost normal-case text-xl">{websiteName}</Link>
            </div>
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;