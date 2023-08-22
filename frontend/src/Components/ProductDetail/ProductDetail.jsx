import React, { useState } from "react";
import Rating from "react-rating";
import {GiStarsStack} from "react-icons/gi";
import {LiaStarSolid} from "react-icons/lia";

const ProductDetail= () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <img className="mt-6 w-full" alt="img of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
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
                        Balenciaga Signature Sweatshirt
                    </h1>
                    <p className="text-sm leading-none text-gray-600 mt-1.5">Product:#124567</p>
                </div>
                    <div className="flex justify-start items-center">
                        <Rating
                            initialRating={3.5}
                            quiet={true}
                            readonly={true}
                            fullSymbol={<LiaStarSolid style={{
                                color:"black",
                                fontSize:"30px"
                            }}/>}
                            emptySymbol={<LiaStarSolid style={{
                                color:"gray",
                                fontSize:"30px"
                            }}/>}/><h1 className="text-xl ml-2">3.5</h1>
                    </div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <div>
                    <button
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
					"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
