import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {OrdersAdminComponent} from "../../../Components/AdminComponents/OrdersAdminComponent/OrdersAdminComponent";
import {Tost} from "../../../Components/Tost";
import {useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {Spinner} from "@nextui-org/react";

export function AdminOrdersPage() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    async function OnDeletePress(OrderId) {
        console.log(OrderId)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        const result = await axios.delete(ApiInfo + "/order/delete/" + OrderId, config)
        Tost("Deleted Successfully")
        await GetOrdes()
    }

    async function GetOrdes() {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try{
            const result = await axios.get(ApiInfo + "/order/all", config)
            const Listt = []
            result.data.order?.forEach((e) => {
                const data = {
                    OrderId: e._id,
                    Status: e.orderStatus,
                    Quantity: e.orderItems.length,
                    Amount: e.totalPrice
                }
                Listt.push(data)
            })
            setList(Listt.reverse())
        }catch (e) {
            setList([])
        }

        setLoading(false)
    }

    useEffect(() => {
        GetOrdes()
    }, []);
    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize: "65px",
                textAlign: "center",
                textDecoration: "underline"
            }}>
                All Orders
            </h1>
            {!loading && <OrdersAdminComponent OnDeletePress={OnDeletePress} list={list ?? []} key={Math.random()}/>}
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
