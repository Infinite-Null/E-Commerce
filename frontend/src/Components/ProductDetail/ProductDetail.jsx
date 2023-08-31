import React, { useState } from "react";
import Rating from "react-rating";
import {LiaStarSolid} from "react-icons/lia";
import { InputNumber } from 'antd';
import {Textarea} from "@nextui-org/react";
import {motion} from "framer-motion"
import Review from "./Reviews";
import {RiSendPlane2Fill} from "react-icons/ri";

const ProductDetail= ({images,title,averageReview,discountedPrice,totalPrice,discription,onQuntityChange,onReviewTextChange,productId,getReviewStar,reviews,onAddToCart,onPostReviewPress}) => {
    const [selectedImage,changeSelected]=useState(images[0])
    return (
        <>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-[600px] xl:h-[600px] lg:w-[50vw] lg:h-[50vw] md:block md:w-[50vw] md:h-[50vw] hidden">
                <motion.img
                    key={selectedImage}
                    initial={{
                        x:50,
                        opacity:0
                    }}
                    animate={{
                        x:0,
                        opacity:1
                    }}
                    transition={{ duration: 0.5 }}
                    className="xl:w-[600px] xl:h-[600px] lg:w-[50vw] lg:h-[50vw]" style={{
                    objectFit:"cover"
                }} alt="img of a girl posing" src={selectedImage} />
                <div className="flex items-center justify-start mt-3 space-x-4 md:space-x-0 w-full overflow-x-scroll gap-4">
                    {images.map((e,i)=> <div
                        key={i}
                        style={{
                            height:"50px",
                            width:"50px",
                            objectFit:"cover",
                            overflow:"hidden"
                        }}>
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-48" style={{objectFit:"cover"}} src={e} key={i} onClick={()=>{
                            changeSelected(e)
                        }}/>
                    </div>)}
                </div>
            </div>
            <div className="md:hidden">
                <motion.img
                    key={selectedImage}
                    initial={{
                        x:50,
                        opacity:0
                    }}
                    animate={{
                        x:0,
                        opacity:1
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-96" style={{
                        objectFit:"cover"
                }} alt="img of a girl posing" src={selectedImage} />
                <div className="flex items-center justify-start mt-3 space-x-4 md:space-x-0 w-full overflow-x-scroll">
                    {images.map((e,i)=> <div
                        key={i}
                        style={{
                        height:"50px",
                        width:"50px",
                        objectFit:"cover",
                        overflow:"hidden"
                    }}>
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-48" src={e} key={i} onClick={()=>{
                            changeSelected(e)
                        }}/>
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
                        {title}
                    </h1>
                    <p className="text-sm leading-none text-gray-600 mt-1.5">{`Product:#${productId}`}</p>
                </div>
                    <div className="flex justify-start items-center">
                        <Rating
                            initialRating={averageReview}
                            quiet={true}
                            readonly={true}
                            fullSymbol={<LiaStarSolid style={{
                                color:"black",
                                fontSize:"30px"
                            }}/>}
                            emptySymbol={<LiaStarSolid style={{
                                color:"gray",
                                fontSize:"30px"
                            }}/>}/><h1 className="text-xl ml-2">{averageReview}</h1>
                    </div>
                    <div className="text-4xl mt-2"><h1 style={{
                        display:"inline",
                        textDecoration:"line-through",
                        fontSize:"35px",
                        marginRight:"10px",
                        color:"red"
                    }}>{`₹${totalPrice}`}</h1>{`₹${discountedPrice}`}</div>
                    <p className="lg:leading-tight leading-normal text-gray-600 mt-7 text-xl">{discription}</p>
                <div>

                    {/*increment decrement button*/}
                    <div className="mt-5 text-2xl">
                        Quantity:&nbsp;&nbsp;
                        <InputNumber
                            onChange={(value)=>{
                                onQuntityChange(value)
                            }}
                            style={{
                                fontSize:"20px",
                                padding:"0px"
                            }}
                            defaultValue={1}
                            min={1}
                            max={5}
                        />
                    </div>




                    <button
                        onClick={()=>{
                            onAddToCart(productId)
                        }}
                        className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
						mt-5
					"
                    >
                        Add To Cart
                    </button>



                    {/*Review Post*/}
                    <h1
                        className="
                            mt-14
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
	
						"
                    >
                        Post Your Review:

                    </h1>
                    <Textarea
                        onChange={(e)=>{
                            onReviewTextChange(e.target.value)
                        }}
                        style={{
                            fontSize:"17px"
                        }}
                        variant="faded"
                        placeholder="Enter your review"
                        description="Enter a concise review of product."
                        className="max-w-xs"
                    />
                   <div className={"flex justify-between items-center w-72"}>
                       <Rating
                           onChange={(x)=>{
                               getReviewStar(x)
                           }}
                           initialRating={0}
                           fullSymbol={<LiaStarSolid style={{
                               color:"black",
                               fontSize:"30px"
                           }}/>}
                           emptySymbol={<LiaStarSolid style={{
                               color:"gray",
                               fontSize:"30px"
                           }}/>}/>
                       <RiSendPlane2Fill
                           onClick={()=>{
                               onPostReviewPress()
                           }}
                           className={"text-gray-800 cursor-pointer hover:text-gray-950 border-1 border-black p-2 rounded-full"}
                           style={{
                               fontSize:"38px"
                           }}/>
                   </div>
                </div>
            </div>
        </div>
            <Review reviews={reviews}/>
        </>
    );
};

export default ProductDetail;
