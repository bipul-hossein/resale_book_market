import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Main from "../Layout/Main";
import SellerDashboardLayout from "../Layout/SellerDashboardLayout";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AllBuyer from "../Pages/AdminDashboard/AllBuyer";
import AllSeller from "../Pages/AdminDashboard/AllSeller";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/HomeContainer/Category";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/SellerDashboard/AddProduct";
import MyProducts from "../Pages/SellerDashboard/MyProducts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/categories/:id',
                element: <Category></Category>,
                loader:async ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/admin_dashboard',
        element:<AdminDashboardLayout/>,
        children:[
            {
                path:'/admin_dashboard/allbuyer',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/admin_dashboard/allseller',
                element:<AllSeller></AllSeller>
            }
        ]
    },
    {
        path:'/seller_dashboard',
        element:<PrivateRoute><SellerDashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'/seller_dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/seller_dashboard/myproducts',
                element:<MyProducts></MyProducts>
            }
        ]
    }
])

export default router;