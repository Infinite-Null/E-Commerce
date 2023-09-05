import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {OrdersAdminComponent} from "../../../Components/AdminComponents/OrdersAdminComponent/OrdersAdminComponent";
import {Tost} from "../../../Components/Tost";

export function AdminOrdersPage() {
    function OnDeletePress(){
        Tost("Deleted Successfully")
    }
    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize:"65px",
                textAlign:"center",
                textDecoration:"underline"
            }}>
                All Orders
            </h1>
            <OrdersAdminComponent OnDeletePress={OnDeletePress}/>
        </>
    )
}