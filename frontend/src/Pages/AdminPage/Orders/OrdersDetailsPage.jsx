import {useLocation} from "react-router-dom";
import {
    OrderDetailsPageComponent
} from "../../../Components/AdminComponents/OrdersAdminComponent/OrderDetailsPageComponent";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {Spinner} from "@nextui-org/react";

export function OrdersDetailsPage() {
    const {state} = useLocation()
    const [data, SetData] = useState({})
    const [loading, setLoading] = useState(false)
    // const cartItems = [
    //     {
    //         name: "Temp Item",
    //         image: "https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg",
    //         price: "200",
    //         quantity: "1"
    //     },
    //     {
    //         name: "Temp Item",
    //         image: "https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg",
    //         price: "200",
    //         quantity: "1"
    //     }
    // ]

    function OnUpdatePress(value) {

    }

    function GetFullAddress(e) {
        if (e === undefined) {
            return ""
        }
        const Address1 = e?.address?.toString() ?? ""
        const Address2 = e?.city?.toString() ?? ""
        const Address3 = e?.state?.toString() ?? ""
        const Address4 = e?.country?.toString() ?? ""
        const Address5 = e?.pinCode?.toString() ?? ""
        const Address = Address1 + ", " + Address2 + ", " + Address3 + ", " + Address4 + ", Pincode: " + Address5
        return Address
    }

    async function GetOrder() {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            const result = await axios.get(ApiInfo + "/order/single/" + state, config)
            SetData(result.data.order)
        } catch (e) {
            console.log(e.message)
            SetData({})
        }
        setLoading(false)
    }

    useEffect(() => {
        GetOrder()
    }, [])
    return (
        <>
            <SideBar/>
            {!loading && (Object.keys(data).length !== 0) &&
                <OrderDetailsPageComponent name={data.user?.name ?? ""} phone={data.shippingInfo?.phoneNo ?? ""}
                                           orderStatus={data.orderStatus} cartItems={data?.orderItems ?? []}
                                           address={GetFullAddress(data.shippingInfo)} OnUpdatePress={OnUpdatePress}
                                           totalPrice={data?.totalPrice}/>
            }
            {loading && <div style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Spinner/>
            </div>}
        </>
    )
}
