import {useLocation} from "react-router-dom";
import {
    OrderDetailsPageComponent
} from "../../../Components/AdminComponents/OrdersAdminComponent/OrderDetailsPageComponent";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";

export function OrdersDetailsPage() {
    const {state}=useLocation()
    return (
       <>
           <SideBar/>
           <OrderDetailsPageComponent/>
       </>
    )
}