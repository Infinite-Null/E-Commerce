import React from "react";
import {Skeleton} from "@nextui-org/react";
import '../EachProductCard/Product.css'


export default function LodingSkeletion() {
    return (
        <div className={"mainProduct"}>
            <div className={"productImage"}>
                    <Skeleton className={"h-full"}/>
            </div>
            <div className={"productDetails"}>
                <h1 className={"productTitle"}>
                    <Skeleton className={"h-full"}/></h1>
                <div className={"productPrice"}>
                    <Skeleton className={"h-full"}/>
                </div>
            </div>
        </div>
    );
}
