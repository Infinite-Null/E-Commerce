import {Skeleton} from "@nextui-org/react";
import React from "react";

export function LoadingProductDetails() {
    return <>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-[600px] xl:h-[600px] lg:w-[50vw] lg:h-[50vw] md:block md:w-[50vw] md:h-[50vw] hidden">
                   <Skeleton className={"w-[400px] h-[400px]"}/>
                    <div className="flex items-center justify-start mt-3 space-x-4 md:space-x-0 w-full overflow-x-scroll gap-4">
                        {[1,2,3].map((e,i)=> <div
                            key={i}
                            style={{
                                height:"50px",
                                width:"50px",
                                objectFit:"cover",
                                overflow:"hidden"
                            }}>
                          <Skeleton className={"w-72 h-72"}/>
                        </div>)}
                    </div>
                </div>
                <div className="md:hidden">
                   <Skeleton className={"w-[90vw] h-[350px]"}/>
                    <div className="flex items-center justify-start mt-3 space-x-4 md:space-x-0 w-full overflow-x-scroll">
                        {[1,2,3].map((e)=> <div
                            key={e}
                            style={{
                                height:"50px",
                                width:"50px",
                                objectFit:"cover",
                                overflow:"hidden"
                            }}>
                            <Skeleton className={"h-72 w-72"}/>
                        </div>)}
                    </div>
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                        >
                            <Skeleton className={"w-full h-full"}/>
                        </h1>
                        <p className="text-sm leading-none text-gray-600 mt-1.5"><Skeleton/></p>
                    </div>
                    <p className="lg:leading-tight leading-normal text-gray-600 mt-7 text-xl"><Skeleton/></p>
                    <div>
                        <Skeleton className={"h-5 w-full"}/>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-10
						"
                        >
                            <Skeleton className={"w-full h-[50px]"}/>
                        </h1>
                        <p className="text-sm leading-none text-gray-600 mt-1.5"><Skeleton/></p>
                    </div>
                    <p className="lg:leading-tight leading-normal text-gray-600 mt-7 text-xl"><Skeleton/></p>
                    <div>
                        <Skeleton className={"h-5 w-full"}/>
                    </div>
                </div>
            </div>
            <Skeleton/>
        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-5">
                    <div className="mb-14">
                        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5 w-full overflow-hidden">
                            <Skeleton className={"h-24 w-24 rounded-full"}/>
                            <Skeleton className={"h-24 w-[80vw]"}/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-5">
                    <div className="mb-14">
                        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5 w-full overflow-hidden">
                            <Skeleton className={"h-24 w-24 rounded-full"}/>
                            <Skeleton className={"h-24 w-[80vw]"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
}