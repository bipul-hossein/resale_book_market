import { createBrowserRouter } from "react-router-dom";
import DisplayError from "../components/share/DisplayError";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Main from "../Layout/Main";
import SellerDashboardLayout from "../Layout/SellerDashboardLayout";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AllBuyer from "../Pages/AdminDashboard/AllBuyer";
import AllSeller from "../Pages/AdminDashboard/AllSeller";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/HomeContainer/Category";
import MyOrders from "../Pages/Home/HomeContainer/MyOrders";
import Payment from "../Pages/Home/Payment/Payment";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/SellerDashboard/AddProduct";
import MyProducts from "../Pages/SellerDashboard/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/order/payment/:id',
                element: <Payment></Payment>,
                loader:async ({params})=> fetch(`https://server-side-assignment12.vercel.app/booking/${params.id}`)
            },
            {
                path: '/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/categories/:id',
                element:<Category></Category>,
                loader:async ({ params }) => fetch(`https://server-side-assignment12.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/admin_dashboard',
        element:<AdminDashboardLayout/>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/admin_dashboard/allbuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path:'/admin_dashboard/allseller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            }
        ]
    },
    {
        path:'/seller_dashboard',
        element:<PrivateRoute><SellerDashboardLayout/></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/seller_dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/seller_dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            }
        ]
    }
])

export default router;