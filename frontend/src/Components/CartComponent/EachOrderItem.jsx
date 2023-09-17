import {Button} from "@nextui-org/react";
import {GrAdd} from "react-icons/gr";
import {AiFillDelete, AiOutlineMinus} from "react-icons/ai";

export function EachOrderItem({image,name,price,quantity,id,OnDeletePress,index}) {
    return (
        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
            <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-[150px] h-[150px] hidden md:block object-cover" src={image} alt="Cloth" />
                <img className="md:hidden w-full h-[300px] object-cover" src={image} alt="Cloth" />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{name}</h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                        {`₹${price}`}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800"><Button isIconOnly aria-label="Add">
                        <AiOutlineMinus/>
                    </Button> {quantity} <Button isIconOnly aria-label="Add">
                        <GrAdd/>
                    </Button></p>
                    <Button isIconOnly aria-label="Delete" onClick={()=>{
                        OnDeletePress(id,index)
                    }}><AiFillDelete/></Button>
                </div>
            </div>
        </div>
    )
}