import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input
} from "@nextui-org/react";
import "./NavBar.css"
import logo from "../../Images/logo.png"
import {TfiShoppingCartFull} from "react-icons/tfi";
import Icon from "./Icon";
import {BsFillArrowRightCircleFill, BsSearch} from "react-icons/bs";
import DropDown from "./DropDown";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            shouldHideOnScroll
            isBordered
            isBlurred
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="2xl"
        >
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

               <NavbarBrand className="hidden sm:inline">
                   <Link href="/" style={{color:"black"}}>
                   <img src={logo} alt="not found" width={40} height={40}/>
                   <p className="font-bold text-inherit">E-commerce</p>
                   </Link>
               </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/" className="navItem">
                       Home
                    </Link>
                </NavbarItem>
                <DropDown/>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground" className="navItem">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="navItem">
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">

                <div style={{width:"150px"}}><Input aria-label={"Search"}
                                                    size="sm"
                                                    fullWidth={false}
                                                    variant={"bordered"}
                                                    startContent={<BsSearch style={{
                                                        fontSize:25,
                                                    }}/>}
                                                    endContent={
                                                        <BsFillArrowRightCircleFill style={{
                                                            fontSize:25,
                                                            cursor:"pointer"
                                                        }}/>
                                                    }/></div>
                <Icon icon={<TfiShoppingCartFull style={{
                    fontSize:25
                }}/>} count={"0"}/>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                    <Link href="/" style={{color:"black",marginBottom:"10px"}}>
                        <img src={logo} alt="not found" width={30} height={20}/>
                        <p className="font-bold text-inherit">E-commerce</p>
                    </Link>
                <NavbarMenuItem key={`Home`}>
                    <Link
                        className="w-full"
                        href="#"
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
                        style={{
                            color:"black"
                        }}
                        className="w-full"
                        href="#"
                        size="lg">
                        Products
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem key={"dropdown"}>
                <DropDown color="black" fontSize={19}/>
                </NavbarMenuItem>
                <NavbarMenuItem key={`Products`}>
                    <Link
                        style={{
                            color:"black"
                        }}
                        className="w-full"
                        href="#"
                        size="lg">
                        Contact Us
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}