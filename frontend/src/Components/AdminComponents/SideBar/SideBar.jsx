import React, { useState } from 'react';
import {Drawer, Space } from 'antd';
import {BiMenu, BiSolidPackage} from "react-icons/bi";
import {Button} from "@nextui-org/react";
import {MdOutlineReviews} from "react-icons/md";
import {FaUsersCog, FaWindowClose} from "react-icons/fa";
import {GiClothes} from "react-icons/gi";
import {LuLayoutDashboard} from "react-icons/lu";
const SideBar = ({onDashBoardPress,onProductsPress,onOrdersPress,onUsersPress,onReviewsPress}) => {
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
                <Button onClick={onProductsPress} startContent={<GiClothes/>} className={"w-full mb-5"} variant={"ghost"} color={"default"}>
                Products
            </Button>
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