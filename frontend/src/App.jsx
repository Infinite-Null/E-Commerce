import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import {Route, Routes} from "react-router-dom";
import {Orders} from "./Pages/Orders";
import {ProductDetails} from "./Pages/ProductDetails";
import {AllProductWithCategory} from "./Pages/AllProductWithCategory";
import {ToastContainer} from "react-toastify";
import {ContactUs} from "./Pages/ContactUs";
import {HelpandFeedback} from "./Pages/HelpandFeedback";
import {Dashboard} from "./Pages/AdminPage/Dashboard/Dashboard";
import {ProductsPageAdmin} from "./Pages/AdminPage/Products/AllProducts";
import {AddProduct} from "./Pages/AdminPage/Products/AddProduct";
import {AdminOrdersPage} from "./Pages/AdminPage/Orders/AdminOrdersPage";
import {OrdersDetailsPage} from "./Pages/AdminPage/Orders/OrdersDetailsPage";
import {UsersAdminPage} from "./Pages/AdminPage/Users/UsersAdminPage";
import {Login} from "./Pages/Login";
import {ReviewsPage} from "./Pages/AdminPage/Reviews/ReviewsPage";
import {useContext} from "react";
import Context from "./Context/Context";
import {Verify} from "./Pages/Verify";
import {ResetPage} from "./Pages/ResetPage";

function App() {
    const {User} = useContext(Context)
    return <>

        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Help" element={<HelpandFeedback/>}/>
            {/*<Route path="Profile" element={<AboutUser/>}/>*/}
            <Route path="Login" element={<Login/>}/>
            <Route path="AboutUs" element={<ContactUs/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="orders" element={<Orders/>}/>
            {(User.Role?.toLowerCase() === 'admin') && <Route path="/Admin" element={<Dashboard/>}/>}
            {(User.Role?.toLowerCase() === 'admin') && <Route path="/Admin/Orders" element={<AdminOrdersPage/>}/>}
            {(User.Role?.toLowerCase() === 'admin') && <Route path="/Admin/Users" element={<UsersAdminPage/>}/>}
            {(User.Role?.toLowerCase() === 'admin') && <Route path="/Admin/Reviews" element={<ReviewsPage/>}/>}
            {(User.Role?.toLowerCase() === 'admin') &&
                <Route path="/Admin/Orders/Detail" element={<OrdersDetailsPage/>}/>}
            {(User.Role?.toLowerCase() === 'admin') &&
                <Route path="/Admin/Products/AllProduct" element={<ProductsPageAdmin/>}/>}
            {(User.Role?.toLowerCase() === 'admin') &&
                <Route path="/Admin/Products/AddProduct" element={<AddProduct/>}/>}
            <Route path="verify/:id" element={<Verify/>}/>
            <Route path="reset/:id" element={<ResetPage/>}/>
            <Route path="product/:id" element={<ProductDetails/>}/>
            <Route path="/:id" element={<AllProductWithCategory/>}/>
        </Routes>
        <ToastContainer position="bottom-center" theme="colored" icon={false} limit={2} toastStyle={{
            backgroundColor: "cadetblue",
        }}/>
    </>
}

export default App;
