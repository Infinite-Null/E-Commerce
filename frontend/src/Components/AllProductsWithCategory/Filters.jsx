import React, {useState} from "react";
import {Slider} from "antd";
import {FaIndianRupeeSign} from "react-icons/fa6";

const Filters = ({title, onRangeChange, totalProducts, onApplyPress}) => {
    const [showFilters, setShowfilters] = useState(false);
    const [minMax, setMinMax] = useState([50, 1500])

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
                <div className=" flex justify-between items-center mb-4">
                    <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">{title.toString().toUpperCase()}</h2>

                    {/*  filters Button (md and plus Screen) */}
                    <button onClick={() => setShowfilters(!showFilters)}
                            className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-blue-600 rounded-[10px] flex text-base leading-4 font-normal text-white justify-center items-center">
                        <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        Filters
                    </button>
                </div>
                <p className=" text-xl leading-5 text-gray-600 font-medium">{`${totalProducts} Products`}</p>

                {/* Filters Button (Small Screen)  */}

                <button onClick={() => setShowfilters(!showFilters)}
                        className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-blue-600 rounded-[10px] flex text-base leading-4 font-normal text-white justify-center items-center">
                    <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    Filters
                </button>
            </div>

            <div id="filterSection"
                 className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " + (showFilters ? "block" : "hidden")}>
                {/* Cross button Code  */}
                <div onClick={() => setShowfilters(false)}
                     className=" cursor-pointer absolute right-0 top-0 md: lg:px-20 md:px-6 px-4">
                    <svg className=" lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 1L1 25" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M1 1L25 25" stroke="#27272A" strokeWidth="1.25" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>

                {/* Colors Section */}
                <div>
                    <div className=" flex space-x-2">
                        <FaIndianRupeeSign className="text-2xl"/>
                        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Price</p>
                    </div>
                    <div className="w-72">
                        <Slider
                            onChange={(val) => {
                                onRangeChange(val)
                                setMinMax((prev) => prev = val)
                            }}
                            railStyle={{
                                backgroundColor: "rgba(0,0,0,0.2)"
                            }}
                            min={100}
                            max={1500}
                            range
                            step={100}
                            defaultValue={[100, 1500]}
                        />
                        <div className="flex items-center justify-between">
                            <h1>{`Min - ₹${minMax[0]}`}</h1>
                            <h1>{`Max - ₹${minMax[1]}`}</h1>
                        </div>
                    </div>
                </div>
                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8"/>
                <div
                    className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                    <button
                        onClick={() => {
                            onApplyPress([minMax])
                        }}
                        className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-blue-600">
                        Apply Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
