import React from "react";
import {Skeleton} from "@nextui-org/react";
import '../EachProductCard/Product.css'


export default function LodingSkeletion() {
    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 flex justify-center items-center m-10">
                <div className="card">
                    <div className="photo">
                        <Skeleton className="rounded-[0px]">
                            <div className="h-52 rounded-[0px] bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className={"mt-5 flex flex-col justify-center items-center"}>
                        <Skeleton className="w-3/5 rounded mt-5">
                            <div className="h-3 w-3/5 rounded-[0px] bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-3/5 rounded mt-5">
                            <div className="h-3 w-3/5 rounded-[0px] bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded mt-5 mb-5">
                            <div className="h-3 w-2/5 rounded-[0px] bg-default-300"></div>
                        </Skeleton>
                    </div>
                </div>
        </div>

    );
}