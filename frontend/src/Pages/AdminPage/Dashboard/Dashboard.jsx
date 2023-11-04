import {EachCardHomeAdmin} from "../../../Components/AdminComponents/Dashboard/EachCardHomeAdmin";
import {LineGraph} from "../../../Components/AdminComponents/Dashboard/LineGraph";
import {PieChart} from "../../../Components/AdminComponents/Dashboard/PieChat";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {Spinner} from "@nextui-org/react";

export function Dashboard() {
    const [Data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    function CountEarnings(orders) {
        let sum = 0
        orders?.forEach((e) => {
            sum += e.totalPrice
        })
        return sum
    }

    function StockCount(products) {
        let stock = [0, 0]
        products?.forEach((e) => {
            if (e.Stock > 0) {
                ++stock[0]
            } else {
                ++stock[1]
            }
        })
        return stock
    }

    async function GetData() {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        const result = await axios.get(ApiInfo + "/dashboard", config)
        const Final = {
            Earnings: CountEarnings(result.data.Orders),
            InStock: StockCount(result.data.Products)[0],
            OutofStock: StockCount(result.data.Products)[1],
            TotalProducts: result.data.TotalProducts,
            TotalOrders: result.data.TotalOrders,
            TotalUsers: result.data.TotalUsers,
        }
        setData(Final)
        setLoading(false)
    }

    useEffect(() => {
        GetData()
    }, []);
    return (
        <>
            <SideBar/>
            {!loading && <><h1 className={'text-center text-gray-950 text-3xl uppercase underline mb-5'}>Dashboard</h1>
                <div style={{
                    display: "flex",
                    gap: "20px",
                }}>
                    <EachCardHomeAdmin title={"Total Products"} color={"indianred"}
                                       amount={Data.TotalProducts?.toString()??"0"}/>
                    <EachCardHomeAdmin title={"Total Orders"} color={"coral"} amount={Data.TotalOrders?.toString()??"0"}/>
                    <EachCardHomeAdmin title={"Total Users"} color={"royalblue"} amount={Data.TotalUsers?.toString()??"0"}/>
                </div>
                <LineGraph Earnings={Data.Earnings??0}/>
                <PieChart InStock={Data.InStock??0} OutOfStock={Data.OutofStock??0}/></>}
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
