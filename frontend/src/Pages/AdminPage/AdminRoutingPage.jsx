import {Route, Routes, useNavigate} from "react-router-dom";
import {Dashboard} from "./Dashboard/Dashboard";
import SideBar from "../../Components/AdminComponents/SideBar/SideBar";

export function AdminRoutingPage() {
    const navigate=useNavigate()
    function onDashBoardPress(){
        navigate('/Admin')
    }
    function onProductsPress(){
        navigate('/Admin/Products')
    }
    function onOrdersPress(){
        navigate('/Admin/Orders')
    }
    function onUsersPress(){
        navigate('/Admin/Users')
    }
    function onReviewsPress(){
        navigate('/Admin/Reviews')
    }
    return (
        <>
            <SideBar onDashBoardPress={onDashBoardPress} onUsersPress={onUsersPress} onReviewsPress={onReviewsPress} onProductsPress={onProductsPress} onOrdersPress={onOrdersPress}/>
            <Routes>
                <Route path="/" element={ <Dashboard/> } />
            </Routes>
        </>
    )
}