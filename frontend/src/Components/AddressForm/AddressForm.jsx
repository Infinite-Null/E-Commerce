import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Input
} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import React from "react"
import {AiFillHome} from "react-icons/ai";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {MdPlace} from "react-icons/md";
let state = [
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
                    <Select
                        onChange={(e)=>{

                        }}
                        startContent={<MdPlace style={{fontSize:"25px",marginRight:"5px"}}/>}
                        variant={"bordered"}
                        defaultValue={"Delhi"}
                        placeholder="Delhi"
                        label="Place"
                        className="max-w-xs"
                    >
                        {state.map((e) => (
                            <SelectItem key={e} value={e}>
                                {e}
                            </SelectItem>
                        ))}
                    </Select>

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