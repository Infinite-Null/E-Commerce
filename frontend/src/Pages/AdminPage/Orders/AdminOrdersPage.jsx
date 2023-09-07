import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {OrdersAdminComponent} from "../../../Components/AdminComponents/OrdersAdminComponent/OrdersAdminComponent";
import {Tost} from "../../../Components/Tost";

export function AdminOrdersPage() {
    function OnDeletePress(){
        Tost("Deleted Successfully")
    }
    const list=[
        {
            OrderId:"12345",
            Status:"Processing",
            Quantity:5,
            Amount:3500
        }
    ]
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
            <OrdersAdminComponent OnDeletePress={OnDeletePress} list={list}/>
        </>
    )
}