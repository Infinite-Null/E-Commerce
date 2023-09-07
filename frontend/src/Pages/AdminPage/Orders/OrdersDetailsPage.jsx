import {useLocation} from "react-router-dom";
import {
    OrderDetailsPageComponent
} from "../../../Components/AdminComponents/OrdersAdminComponent/OrderDetailsPageComponent";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";

export function OrdersDetailsPage() {
    const {state}=useLocation()
    const cartItems=[
        {
        name:"Temp Item",
        image:"https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg",
        price:"200",
        quantity:"1"
        },
        {
            name:"Temp Item",
            image:"https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg",
            price:"200",
            quantity:"1"
        }
    ]
    function OnUpdatePress(value) {

    }
    return (
       <>
           <SideBar/>
           <OrderDetailsPageComponent name={"Ankit Kumar Shah"} phone={"7478856289"} orderStatus={"Processing"} cartItems={cartItems} address={"Sanikpuri Khaprail, New Chumpta"} OnUpdatePress={OnUpdatePress}/>
       </>
    )
}