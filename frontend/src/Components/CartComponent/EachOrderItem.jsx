import {Button} from "@nextui-org/react";
import {GrAdd} from "react-icons/gr";
import {AiFillDelete, AiOutlineMinus} from "react-icons/ai";
import {Tost} from "../Tost";

export function EachOrderItem({
                                  image,
                                  name,
                                  price,
                                  quantity,
                                  id,
                                  OnDeletePress,
                                  index,
                                  maximumQuantity,
                                  addPress,
                                  minusPress,
                                  orignalPrice
                              }) {
    return (
        <div
            className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-end md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-[150px] h-[150px] hidden md:block object-cover border-2  rounded-[10px]" src={image} alt="Cloth"/>
                <img className="md:hidden w-full h-[300px]  object-cover border-2 rounded-[10px]" src={image} alt="Cloth"/>
            </div>
            <div
                className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-end w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-center">
                    <p className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{name}</p>
                    <p className="text-base xl:text-lg leading-6 text-green-600">
                        <span style={{
                            textDecoration:"line-through",
                            marginRight:5,
                            color:"gray"
                        }}>{`₹${orignalPrice}`}</span>{` ₹${price}`}
                    </p>
                </div>
                <div className="flex justify-between space-x-8 items-end w-full">

                    <p className="text-base xl:text-lg leading-6 text-gray-800"><Button isIconOnly aria-label="Minus"
                                                                                        onClick={() => {
                                                                                            if (quantity === 1) {
                                                                                                return
                                                                                            }
                                                                                            minusPress(id, index)
                                                                                        }}>
                        <AiOutlineMinus/>
                    </Button> {quantity} <Button isIconOnly aria-label="Add" onClick={() => {
                        if (quantity === maximumQuantity) {
                            Tost("Maximum Stock")
                            return
                        }
                        addPress(id, index)

                    }}>
                        <GrAdd/>
                    </Button></p>
                    <Button isIconOnly aria-label="Delete" onClick={() => {
                        OnDeletePress(id, index)
                    }}><AiFillDelete/></Button>
                </div>
            </div>
        </div>
    )
}
