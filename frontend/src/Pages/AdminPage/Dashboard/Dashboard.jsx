import {EachCardHomeAdmin} from "../../../Components/AdminComponents/Dashboard/EachCardHomeAdmin";
import {LineGraph} from "../../../Components/AdminComponents/Dashboard/LineGraph";
import {PieChart} from "../../../Components/AdminComponents/Dashboard/PieChat";

export function Dashboard() {

    return (
        <>
        <h1 className={'text-center text-gray-950 text-3xl uppercase underline mb-5'}>Dashboard</h1>
        <div style={{
            display:"flex",
            gap:"20px",
        }}>
            <EachCardHomeAdmin title={"Total Products"} color={"indianred"} amount={"23"}/>
            <EachCardHomeAdmin title={"Total Orders"} color={"coral"} amount={"5"}/>
            <EachCardHomeAdmin title={"Total Users"} color={"royalblue"} amount={"4"}/>
        </div>
        <LineGraph Earnings={350}/>
            <PieChart InStock={10} OutOfStock={2}/>
        </>
    )
}