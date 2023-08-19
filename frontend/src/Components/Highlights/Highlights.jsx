import React from "react";
import {BsShieldFillCheck, BsVirus} from "react-icons/bs";
import {GiClothes} from "react-icons/gi";
import {FaTruckMoving} from "react-icons/fa6";

const Highlight1 = () => {
    const style={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"2px solid black",
        borderRadius:"20px",
        textAlign:"center",
        padding:"20px"
    }
    return (
        <div className="2xl:container 2xl:mx-auto md:py-12 py-9" style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            maxWidth:"99vw",
            overflow:"hidden"
        }}>
            <div className=" bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
                {/* Delivery grid Card */}
                <div style={style} className="shadow-[0px_0px_30px_5px_#cbd5e0]">
                    <FaTruckMoving style={{fontSize:"55px"}}/>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Delivery</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">We deliver all over India</p>
                </div>


                <div style={style} className="shadow-[0px_0px_30px_5px_#cbd5e0]">
                    <BsVirus style={{fontSize:"55px"}}/>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Safe Shopping</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                        Our all outlets have industry-leading health precautions
                    </p>
                </div>



                {/* Recycle Grid Card */}

                <div style={style} className="shadow-[0px_0px_30px_5px_#cbd5e0]">
                    <GiClothes style={{fontSize:"55px"}}/>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Quality</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">All out products are of great quality</p>
                </div>

                {/* Secure Payment Card */}

                <div style={style} className="shadow-[0px_0px_30px_5px_#cbd5e0]">
                    <BsShieldFillCheck style={{fontSize:"55px"}}/>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Secure Payment</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Transaction process has end to end encryption</p>
                </div>
            </div>
        </div>
    );
};

export default Highlight1;
