import React, {useContext, useState} from "react";
import {motion} from "framer-motion";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input, Button, useDisclosure
} from "@nextui-org/react";
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import "./NavBar.css"
import {TfiShoppingCartFull} from "react-icons/tfi";
import Icon from "./Icon";
import {BsFillArrowRightCircleFill, BsSearch} from "react-icons/bs";
import DropDown from "./DropDown";
import {Tost} from "../Tost";
import Context from "../../Context/Context";
import SetCookieUser, {LoggedInDetails} from "../../Context/SetCookieUser";
import {BiSearchAlt} from "react-icons/bi";
import {GiCancel} from "react-icons/gi";
import {RxCross1} from "react-icons/rx";
import {AiFillCaretDown, AiOutlineDown} from "react-icons/ai";
import {ChangeNameModal} from "./ChangeNameModal";

export default function NavBar() {
    const {setSearchValue, User, SetUser, Cart} = useContext(Context)
    const [openSearch, setOpenSearch] = useState(false)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [search, setSearch] = React.useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div>
            <ChangeNameModal onOpenChange={onOpenChange} isOpen={isOpen} onOpen={onOpen} name={User.Name}/>
            {
                openSearch && <motion.div initial={{
                    y: -20
                }} animate={{
                    y: 0
                }} style={{
                    position: "absolute",
                    zIndex: 9999999,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white"
                }}>
                    <input autoFocus={true} onChange={(e) => {
                        setSearch(e.target.value)
                    }} style={{
                        height: "80px",
                        width: "100%",
                        paddingLeft: 10,
                        zIndex: 9999999,
                        fontSize: "30px",
                        outline: "none",
                        borderBottom: "2px solid black",
                        marginLeft: 10
                    }}/>
                    <BiSearchAlt onClick={() => {
                        if (search === "") {
                            Tost("Please Type something!!")
                            return
                        }
                        setSearchValue(search)
                        navigate("/" + search, {state: {category: search}})
                    }} style={{
                        fontSize: 45,
                        cursor: "pointer",
                        marginRight: 10
                    }}/>
                    <RxCross1 onClick={() => {
                        setOpenSearch(false)
                    }} style={{
                        fontSize: 35,
                        cursor: "pointer",
                        marginLeft: 10,
                        marginRight: 10
                    }}/>
                </motion.div>
            }
            <Navbar
                shouldHideOnScroll
                isBordered
                isBlurred={false}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                maxWidth="2xl"
                className={"z-[999]"}
            >
                <NavbarContent className="z-[999] sm:hidden " justify="center">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                </NavbarContent>

                <NavbarBrand className="hidden z-[999] sm:inline">
                    <Link style={{color: "black"}} to="/">
                        <p className="font-bold text-inherit">E-commerce</p>
                    </Link>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" to="/" className="navItem">
                            Home
                        </Link>
                    </NavbarItem>


                    <DropDown navigate={navigate}/>


                    <NavbarItem>
                        <Link
                            to={
                                {
                                    pathname: "/All-Products",
                                }
                            } aria-current="page" color="foreground" className="navItem">
                            Products
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/AboutUs" color="foreground" className="navItem">
                            About Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent as="div" justify="end">

                    <BiSearchAlt onClick={() => {
                        setOpenSearch(true)
                    }} style={{
                        fontSize: 25,
                        cursor: "pointer"
                    }}/>
                    <Icon
                        navigate={navigate}
                        icon={<TfiShoppingCartFull style={{
                            fontSize: 25
                        }}/>} count={Cart.length.toString()}/>
                    {User.IsLoggedIn &&
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Button color={"primary"} className={"text-[14px] p-[8px] h-fit"}
                                        endContent={<AiFillCaretDown/>}>{'Profile'}</Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="shadow" onAction={(key) => {
                                if (key === "profile") {
                                    return
                                }
                                if (key === "Profile") {
                                    onOpen()
                                    return;
                                }
                                if (key !== "" || key) {
                                    navigate(key)
                                }
                            }}>
                                <DropdownItem key="profile" className="h-14 gap-2 b">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{User.Name}</p>
                                </DropdownItem>
                                <DropdownItem key="Profile">Change Name</DropdownItem>
                                <DropdownItem key="orders">Your Orders</DropdownItem>
                                <DropdownItem key="Help">Help & Feedback</DropdownItem>
                                {(User.Role.toLowerCase() === "admin") &&
                                    <DropdownItem key="/Admin">Admin Page</DropdownItem>}
                                <DropdownItem key="/" color="danger" onClick={() => {
                                    SetCookieUser("", "", "", "", "", "")
                                    SetUser(LoggedInDetails())
                                    navigate("/")
                                }}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    }
                    {!User.IsLoggedIn && <Button color="primary" className={"ml-5 mr-5"} onPress={() => {
                        navigate("/Login")
                    }}>Login</Button>}
                </NavbarContent>
                <NavbarMenu>
                    <Link to="/" style={{color: "black", marginBottom: "10px"}}>
                        <p className="font-bold text-inherit">E-commerce</p>
                    </Link>
                    <NavbarMenuItem key={`Home`}>
                        <Link
                            to="/"
                            className="w-full"
                            size="lg"
                            style={{
                                color: "black"
                            }}
                        >
                            Home
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key={`Products`}>
                        <Link
                            to="/All-Products"
                            style={{
                                color: "black"
                            }}
                            className="w-full"
                            size="lg">
                            Products
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key={"dropdown"}>
                        <DropDown color="black" fontSize={19} navigate={navigate}/>
                    </NavbarMenuItem>
                    <NavbarMenuItem key={`Products`}>
                        <Link
                            to="/AboutUs"
                            style={{
                                color: "black"
                            }}
                            className="w-full"
                            size="lg">
                            About Us
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
