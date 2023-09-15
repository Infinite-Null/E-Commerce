import React, {useContext} from "react";
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
    NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input, Button
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

export default function NavBar() {
    const {setSearchValue,User,SetUser} = useContext(Context)
    console.log(User)

    const navigate=useNavigate()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [search,setSearch]=React.useState("")
    return (
        <Navbar
            shouldHideOnScroll
            isBordered
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="2xl"
        >
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

               <NavbarBrand className="hidden sm:inline">
                   <Link style={{color:"black"}} to="/">
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
                            pathname:"/All-Products",
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

                <div style={{width:"150px"}}><Input
                                                    onChange={(e)=>{
                                                        setSearch(e.target.value)
                                                    }}
                                                    aria-label={"Search"}
                                                    size="sm"
                                                    fullWidth={false}
                                                    variant={"bordered"}
                                                    startContent={<BsSearch style={{
                                                        fontSize:25,
                                                    }}/>}
                                                    endContent={
                                                        <BsFillArrowRightCircleFill onClick={()=>{
                                                            if(search===""){
                                                                Tost("Please Type something!!")
                                                                return
                                                            }
                                                            setSearchValue(search)
                                                            navigate("/"+search,{state:{category:search}})
                                                        }} style={{
                                                            fontSize:25,
                                                            cursor:"pointer"
                                                        }}/>
                                                    }/></div>
                <Icon
                    navigate={navigate}
                    icon={<TfiShoppingCartFull style={{
                    fontSize:25
                }}/>} count={"0"}/>
                {User.IsLoggedIn &&
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src={User.Avatar}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="shadow" onAction={(key)=>{
                            if(key!==""||key){
                                navigate(key)
                            }
                        }}>
                            <DropdownItem key="profile" className="h-14 gap-2 b">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{User.Email}</p>
                            </DropdownItem>
                            <DropdownItem key="Profile">Your Profile</DropdownItem>
                            <DropdownItem key="orders">Your Orders</DropdownItem>
                            <DropdownItem key="Help">Help & Feedback</DropdownItem>
                            {(User.Role.toLowerCase()==="admin") && <DropdownItem key="/Admin">Admin Page</DropdownItem>}
                            <DropdownItem key="/" color="danger" onClick={()=>{
                                SetCookieUser("","","","","","")
                                SetUser(LoggedInDetails())
                                navigate("/")
                            }}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                }
                {!User.IsLoggedIn && <Button color="primary" className={"ml-5 mr-5"} onPress={()=>{
                    navigate("/Login")
                }}>Login</Button>}
            </NavbarContent>
            <NavbarMenu>
                    <Link to="/" style={{color:"black",marginBottom:"10px"}}>
                        <p className="font-bold text-inherit">E-commerce</p>
                    </Link>
                <NavbarMenuItem key={`Home`}>
                    <Link
                        to="/"
                        className="w-full"
                        size="lg"
                        style={{
                            color:"black"
                        }}
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem key={`Products`}>
                    <Link
                        to="/All-Products"
                        style={{
                            color:"black"
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
                            color:"black"
                        }}
                        className="w-full"
                        size="lg">
                        About Us
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
