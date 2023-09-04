import React, { useState } from 'react';
import {Drawer, Space } from 'antd';
import {BiMenu, BiSolidPackage} from "react-icons/bi";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {MdOutlineReviews} from "react-icons/md";
import {FaUsersCog, FaWindowClose} from "react-icons/fa";
import {GiClothes} from "react-icons/gi";
import {LuLayoutDashboard} from "react-icons/lu";
import {useNavigate} from "react-router-dom";
import {AiOutlineArrowDown} from "react-icons/ai";
import {IoIosAdd} from "react-icons/io";
import {BsReverseListColumnsReverse} from "react-icons/bs";
const SideBar = () => {
    const navigate=useNavigate()
    function onDashBoardPress(){
        navigate('/Admin')
    }
    function onProductsAllProductPress(){
        navigate('/Admin/Products/AllProduct')
    }
    function onProductsAddProductPress(){
        navigate('/Admin/Products/AddProduct')
    }
    function onOrdersPress(){
        navigate('/Admin/Orders')
    }
    function onUsersPress(){
        navigate('/Admin/Users')
    }
    function onReviewsPress(){
        navigate('/Admin/Reviews')
    }
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Space>
                <BiMenu onClick={showDrawer} className={"text-4xl"}/>
            </Space>
            <Drawer
                title="Admin Dashbaord"
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                key="left"
            >
                <Button onClick={onDashBoardPress} startContent={<LuLayoutDashboard/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                    Dashboard
                </Button>
                <Dropdown style={{
                }}  backdrop={true}>
                    <DropdownTrigger>
                        <Button endContent={<AiOutlineArrowDown/>} startContent={<GiClothes/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                            Products
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu className={"w-80 border-1 border-black rounded-3xl p-5"} color={"primary"}  aria-label="Dynamic Actions">
                        <DropdownItem
                            onClick={()=>{
                                onProductsAddProductPress()
                            }}
                            key="new" startContent={<IoIosAdd style={{
                            fontSize:'25px'
                        }}/>}>Add Product</DropdownItem>
                        <DropdownItem onClick={()=>{
                            onProductsAllProductPress()
                        }}
                            startContent={<BsReverseListColumnsReverse/>}
                            key="copy">All Products</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Button onClick={onOrdersPress}  startContent={<BiSolidPackage/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                    Orders
                </Button>
                <Button onClick={onUsersPress} startContent={<FaUsersCog/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                    Users
                </Button>
                <Button onClick={onReviewsPress} startContent={<MdOutlineReviews/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                    Reviews
                </Button>
                <Button onClick={onClose} startContent={<FaWindowClose/>} className={"mb-5"} variant={"ghost"} color={"default"}>
                    close
                </Button>
            </Drawer>
        </>
    );
};
export default SideBar;