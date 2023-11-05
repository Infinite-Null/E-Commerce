import {Descriptions} from "antd";
import React, {useState} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Textarea} from "@nextui-org/react";
import {MdOutlineCategory} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

export function OrderDetailsPageComponent({
                                              name,
                                              phone,
                                              address,
                                              orderStatus,
                                              cartItems,
                                              OnUpdateStatusPress,
                                              totalPrice,
                                              comment,
                                              id,
                                              OnUpdateCommentPress
                                          }) {
    const [selectedKey, setSelectedKey] = useState("Processing")
    const [commentUp, setCommentUp] = useState("")
    return (
        <div className="flex flex-col-reverse xl:flex-row xl:flex">
            <div className="w-[100vw] xl:w-[70vw] pl-10 pt-10 xl:border-r-1 border-r-black">
                <h1 className={"text-5xl font-[100] mb-5 underline"}>Shipping Info</h1>
                <Descriptions title="" column={1} labelStyle={{
                    fontSize: "20px",
                    color: "black"
                }} contentStyle={{
                    fontSize: "20px",
                    color: "grey"
                }}>
                    <Descriptions.Item label="Name">{name}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
                    <Descriptions.Item label="Address">{address}</Descriptions.Item>
                </Descriptions>

                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Payment</h1>
                <h1 className={"text-2xl font-[200] text-green-500 mb-1"}>Paid</h1>
                <Descriptions title="" column={1} labelStyle={{
                    fontSize: "20px",
                    color: "black"
                }} contentStyle={{
                    fontSize: "20px",
                    color: "grey"
                }}>

                    {/* eslint-disable-next-line no-useless-concat */}
                    <Descriptions.Item label="Amount">{"₹" + totalPrice}</Descriptions.Item>
                </Descriptions>
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Order Status</h1>
                <h1 className={"text-2xl font-[200] text-red-500 mb-1"}
                    style={{
                        color: (orderStatus?.toString()?.toLowerCase() === "delivered") ? "green" : (orderStatus?.toString()?.toLowerCase() === "processing") ? "red" : "blueviolet"
                    }}
                >{orderStatus}</h1>


                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Cart Items</h1>
                {cartItems.map((e, i) => <CartItems image={e.image} name={e.name} price={e.price} quantity={e.quantity}
                                                    key={i}/>)}
            </div>
            <div className="xl:w-[30vw] xl:h-fit flex flex-col items-center w-[100vw] h-fit mb-14">
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Update Status</h1>
                <DropDown selectedKey={selectedKey} setSelectedKey={setSelectedKey}/>
                <Button
                    className="bg-gray-800 hover:bg-gray-950"
                    style={{
                        borderRadius: "0",
                        width: "300px",
                        height: "60px", color: "white"
                    }} variant="flat" onPress={() => {
                    OnUpdateStatusPress(selectedKey, id)
                }}>Update</Button>
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Add Details</h1>
                <Textarea placeholder={"Details Like Tracking Id etc"} className={"w-[90%] border-2 border-black"}
                          onChange={(e) => {
                              setCommentUp(e.target.value)
                          }}/>
                <Button
                    className="bg-gray-800 hover:bg-gray-950 mt-5"
                    style={{
                        borderRadius: "0",
                        width: "300px",
                        height: "60px", color: "white"
                    }} variant="flat" onPress={() => {
                    OnUpdateCommentPress(commentUp, id)
                }}>Send</Button>
                <h1 className={"text-5xl font-[100] mb-5 mt-14 underline"}>Previous Comment</h1>
                <h1>{comment}</h1>
            </div>
        </div>
    )
}

function CartItems({image, name, quantity, price}) {
    return <div className="mb-5 border-1 border-black mr-10 flex justify-between items-center flex-wrap">
        <img src={image} alt={"no"} width={200} height={200}/>
        <h1 className={"text-2xl font-[100] mr-8 ml-8"}>{name}</h1>
        <h1 className={"text-2xl font-[100] mr-8 ml-8"}>{`${quantity} * ${price} = ₹${parseFloat(quantity) * parseFloat(price)}`}</h1>
    </div>
}

function DropDown({selectedKey, setSelectedKey}) {

    return (
        <>
            <Dropdown className={"bg-gray-700 text-white rounded-[0px] w-[300px]"} style={{
                borderRadius: "0px"
            }}>
                <DropdownTrigger>
                    <Button
                        className="border-gray-800 text-gray-800 border-2 capitalize flex justify-between"
                        style={{
                            borderRadius: "0",
                            width: "300px",
                            height: "60px", color: "white"
                        }} variant="flat"
                    >
                        <MdOutlineCategory className="text-xl text-gray-800"/>
                        <h1 className={'text-gray-800 text-xl'}>{selectedKey}</h1>
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
                >
                    <DropdownItem key="Processing" onPress={() => {
                        setSelectedKey("Processing")
                    }}>Processing</DropdownItem>
                    <DropdownItem
                        onPress={() => {
                            setSelectedKey("Shipped")
                        }}
                        key="Shipped">Shipped</DropdownItem>
                    <DropdownItem
                        onPress={() => {
                            setSelectedKey("Delivered")
                        }}
                        key="Delivered">Delivered</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );

}
