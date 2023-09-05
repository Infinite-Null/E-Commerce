import {Descriptions} from "antd";
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {MdOutlineCategory} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

export function OrderDetailsPageComponent() {
    return (
        <div className="flex flex-col-reverse xl:flex-row xl:flex">
            <div className="w-[100vw] xl:w-[70vw] pl-10 pt-10 xl:border-r-1 border-r-black">
                <h1 className={"text-5xl font-[100] mb-5 underline"}>Shipping Info</h1>
                <Descriptions title="" column={1} labelStyle={{
                    fontSize:"20px",
                    color:"black"
                }} contentStyle={{
                    fontSize:"20px",
                    color:"grey"
                }}>
                    <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Address">Zhou Maomao</Descriptions.Item>
                </Descriptions>

                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Payment</h1>
                <h1 className={"text-2xl font-[200] text-green-500 mb-1"}>Paid</h1>
                <Descriptions title="" column={1} labelStyle={{
                    fontSize:"20px",
                    color:"black"
                }} contentStyle={{
                    fontSize:"20px",
                    color:"grey"
                }}>

                    {/* eslint-disable-next-line no-useless-concat */}
                    <Descriptions.Item label="Amount">{"₹"+"1490"}</Descriptions.Item>
                </Descriptions>
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Order Status</h1>
                <h1 className={"text-2xl font-[200] text-red-500 mb-1"}>Processing</h1>


                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Cart Items</h1>
                 <CartItems/>
                <CartItems/>
                <CartItems/>
            </div>
            <div className="xl:w-[30vw] xl:h-[500px] flex flex-col items-center w-[100vw] h-fit mb-14">
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Update Status</h1>
                <DropDown/>
                <Button
                className="bg-gray-800 hover:bg-gray-950"
                style={{
                borderRadius:"0",
                width:"300px",
                height:"60px",color:"white"
            }}  variant="flat" onPress={()=>{

            }}>Update</Button>
            </div>
        </div>
    )
}

function CartItems() {
    return  <div className="mb-5 border-1 border-black mr-10 flex justify-between items-center flex-wrap">
        <img src="https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg" alt={"no"} width={200} height={200}/>
        <h1 className={"text-2xl font-[100] mr-8 ml-8"}>Temp Product</h1>
        <h1 className={"text-2xl font-[100] mr-8 ml-8"}>{"1 * 500 = ₹500"}</h1>
    </div>
}

function DropDown(){

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Processing"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    )
        return (
            <>
                    <Dropdown className={"bg-gray-700 text-white rounded-[0px] w-[300px]"} style={{
                        borderRadius:"0px"
                    }}>
                        <DropdownTrigger>
                            <Button
                                className="border-gray-800 text-gray-800 border-2 capitalize flex justify-between"
                                style={{
                                    borderRadius:"0",
                                    width:"300px",
                                    height:"60px",color:"white"
                                }}  variant="flat"
                            >
                                <MdOutlineCategory className="text-xl text-gray-800"/>
                                <h1 className={'text-gray-800 text-xl'}>{selectedValue}</h1>
                                <AiFillCaretDown className="text-xl text-gray-800"/>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            className={"bg-gray-700"}
                            aria-label="Single selection example"
                            variant="solid"
                            color={"primary"}
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                        >
                            <DropdownItem key="Processing">Processing</DropdownItem>
                            <DropdownItem key="Shipped">Shipped</DropdownItem>
                            <DropdownItem key="Delivered">Delivered</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            </>
        );

}