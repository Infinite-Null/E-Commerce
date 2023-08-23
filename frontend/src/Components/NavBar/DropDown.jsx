import { NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import React from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {GiShorts, GiSleevelessJacket, GiSocks, GiTShirt} from "react-icons/gi";
import {PiPantsFill} from "react-icons/pi";
import {IoShirtSharp} from "react-icons/io5";
import "./NavBar.css"

export default function  DropDown({color,fontSize,navigate}) {

    const fontStyle={fontWeight:"bold"}
    return<Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                        variant="light"
                        endContent={<MdOutlineKeyboardArrowDown/>}
                        style={(!color)?{}:{
                            color,
                            fontSize,
                            transition:"0.5s"
                    }}
                    >
                       <span className="navItem">Categories</span>
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                onAction={(key)=>{
                    if(key !== "") {
                    navigate("/"+key,{state:{category:key}})
                    }
                }}
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                <DropdownItem
                    key="oversized"
                    description="Our oversized t-shirts offer a versatile and fashionable option for your wardrobe."
                    startContent={<GiTShirt style={{
                        color:"green",
                        fontSize:30
                    }}/>}
                >
                    <span style={fontStyle}>Over-Sized</span>
                </DropdownItem>
                <DropdownItem
                    key="windcheater"
                    description="outdoor activities or traveling, Our windcheater offers practicality and style in one package."
                    startContent={<GiSleevelessJacket style={{
                        color:"purple",
                        fontSize:30
                    }}/>}
                >
                    <span style={fontStyle}>Windcheater</span>
                </DropdownItem>
                <DropdownItem
                    key="cargo-pants"
                    startContent={<GiShorts style={{
                        color:"rosybrown",
                        fontSize:30
                    }}/>}
                    description="Whether for their practicality, versatile style, or historical significance, cargo pants continue to be a distinctive"
                >
                    <span style={fontStyle}>Cargo-Pants</span>
                </DropdownItem>
                <DropdownItem
                    key="socks"
                    startContent={<GiSocks style={{
                        color:"orange",
                        fontSize:30
                    }}/>}
                    description="Whether for comfort, performance, or style, our socks can make a noticeable difference in your overall comfort and well-being."
                >
                    <span style={fontStyle}>Socks</span>
                </DropdownItem>
                <DropdownItem
                    key="shorts"
                    startContent={<PiPantsFill style={{
                        color:"brown",
                        fontSize:30
                    }}/>}
                    description="Shorts are a versatile wardrobe staple that provides comfort, functionality, and style for a variety of occasions."
                >
                    <span style={fontStyle}>Shorts</span>
                </DropdownItem>
                <DropdownItem
                    key="relaxed-shirt"
                    startContent={<IoShirtSharp style={{
                        color:"teal",
                        fontSize:30
                    }}/>}
                    description="A relaxed shirt can be a versatile and enjoyable addition to your wardrobe."
                >
                    <span style={fontStyle}>Relaxed-Shirt</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    }