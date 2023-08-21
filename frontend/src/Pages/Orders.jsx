import OrdersComponent from "../Components/YourOrders/YourOrders";
import React from "react";
import Heading from "../Components/Heading/Heading";

export function Orders() {
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <Heading title="Thank You For Shopping With Us" marginTop="0px"/>
            </div>
            <OrdersComponent/>
            <OrdersComponent/>
            <OrdersComponent/>
            <OrdersComponent/>
        </div>
    )
}