import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input
} from "@nextui-org/react";
import React from "react"
import {AiFillHome} from "react-icons/ai";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {TbBuildingEstate} from "react-icons/tb";
let state = [
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
export function AddressForm({change}) {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Delhi"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    return (
        <div style={{
            width:"99vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"80vh",
            flexDirection:"column",
        }}>
            <Card className="max-w-full w-[350px]  border-2 border-black" style={{
                boxShadow:"0px 0px 20px 2px rgba(0,0,0,0.25)",
            }}>
                <CardHeader>Address Details</CardHeader>
                <CardBody className="overflow-hidden gap-4">
                    <Input
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"First Line"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>First Line</span>}
                        placeholder="Enter frist line of address"
                        startContent={<AiFillHome style={{fontSize:"25px",marginRight:"5px"}}/>}
                    />
                    <Input
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"Second Line"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Second Line</span>}
                        placeholder="Enter second line of address"
                        startContent={<SiHomeassistantcommunitystore style={{fontSize:"25px",marginRight:"5px"}}/>}
                    />
                    <Input
                        type="number"
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"Pin code"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Pin code</span>}
                        placeholder="Enter your pincode"
                        startContent={<FaLocationDot style={{fontSize:"25px",marginRight:"5px"}}/>}
                    />
                    <Input
                        type="number"
                        style={{
                            fontSize:"15px",
                            fontWeight:"900",
                        }}
                        aria-label={"Phone Number"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Phone number</span>}
                        placeholder="Enter your phone number"
                        startContent={<FaPhoneAlt style={{fontSize:"25px",marginRight:"5px"}}/>}
                    />
                    <Dropdown offset={20} className="h-[250px] overflow-y-scroll">
                        <DropdownTrigger>
                            <Input
                                style={{
                                    fontSize:"15px",
                                    fontWeight:"900",
                                    textAlign:"start"
                                }}
                                value={selectedValue}
                                aria-label={"Place"}
                                variant={"bordered"}
                                isRequired
                                label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Place</span>}
                                placeholder="Enter your phone number"
                                startContent={<TbBuildingEstate style={{fontSize:"25px",marginRight:"5px"}}/>}
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection actions"
                            variant="shadow"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                        >
                            {state.map((e,i)=><DropdownItem  key={e} aria-label={e}>{e}</DropdownItem>)}
                        </DropdownMenu>
                    </Dropdown>
                </CardBody>
                <CardFooter style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <Button onPress={()=>{
                        change(0)
                    }}>
                        Prev
                    </Button>
                    <Button onPress={()=>{
                        change(2)
                    }}>
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}