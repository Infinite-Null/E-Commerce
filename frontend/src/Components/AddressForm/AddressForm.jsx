// noinspection JSValidateTypes

import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Input,
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import React, {useContext} from "react"
import {AiFillHome} from "react-icons/ai";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {MdPlace} from "react-icons/md";
import context from "../../Context/Context";
import {Tost} from "../Tost";
import {Billing} from "../CartComponent/Billing";
import Context from "../../Context/Context";
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
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {Address,SetAddress}=useContext(context)
    return (
        <>
        <div style={{
            width:"99vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            overflowX:"hidden",
            marginBottom:"10px",
        }}>
            <Card className="max-w-full w-[350px] h-[500px]  border-2 border-black" style={{
                boxShadow:"0px 0px 20px 2px rgba(0,0,0,0.25)",
            }}>
                <CardHeader>Address Details</CardHeader>
                <CardBody className="overflow-hidden gap-4">
                    <Input
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        onChange={(e)=>{
                            SetAddress({...Address,"fristline":e.target.value})
                        }}
                       value={Address.fristline}
                        aria-label={"First Line"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>First Line</span>}
                        placeholder="Enter frist line of address"
                        startContent={<AiFillHome style={{fontSize:"25px",marginRight:"5px"}}/>}
                    />
                    <Input
                        value={Address.secondline}
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        onChange={(e)=>{
                            SetAddress({...Address,"secondline":e.target.value})
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
                        value={Address.pincode}
                        type="number"
                        onChange={(e)=>{
                            SetAddress({...Address,"pincode":e.target.value})
                        }}
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
                        value={Address.phone}
                        type="number"
                        style={{
                            fontSize:"15px",
                            fontWeight:"900",
                        }}
                        onChange={(e)=>{
                            SetAddress({...Address,"phone":e.target.value})
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
                            SetAddress({...Address,"place":e.target.value})
                        }}
                        startContent={<MdPlace style={{fontSize:"25px",marginRight:"5px"}}/>}
                        variant={"bordered"}
                        defaultValue={Address.place.toString()}
                        placeholder={Address.place.toString()}
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
                        if(Address.fristline==="") {
                            Tost("Fill the frist line of address")
                            return
                        }
                        else if(Address.secondline==="") {
                            Tost("Fill the second line of address")
                            return
                        }
                        else if(Address.pincode==="") {
                            Tost("Fill the pincode")
                            return
                        }
                        else if(Address.phone==="") {
                            Tost("Fill the phone number")
                            return
                        }
                        onOpen()
                    }}>
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </div>
    <Confrimation onOpen={onOpen} isOpen={isOpen} Address={Address} onOpenChange={onOpenChange} change={change}/>
    </>
    )
}

function Confrimation({isOpen, Address, onOpenChange,change}) {
    const {Cart}=useContext(Context)
    function CalculateTotal(){
        let sum=0
        Cart.forEach((e)=>{
            sum+=(e.quality*e.price)
        })
        return sum
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"transparent"} className={"border-2 border-black shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Please check everything carefully</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-2">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800 mb-2">Address</h3>
                                    <p className="text-base leading-4 text-gray-800">{`${Address.fristline}, ${Address.secondline},`}</p>
                                        <p className="text-base leading-4 text-gray-600 font-bold">{`${Address.place}`}</p>
                                    <div className="flex space-x-3 w-full">
                                        <p className="text-base leading-4 text-gray-800">Phone No:</p>
                                        <p className="text-base leading-4 text-gray-600">{Address.phone}</p>
                                    </div>
                                    <div className="flex space-x-3 w-full">
                                        <p className="text-base leading-4 text-gray-800">Pin Code:</p>
                                        <p className="text-base leading-4 text-gray-600">{Address.pincode}</p>
                                    </div>
                                </div>
                                <Billing Total={CalculateTotal()}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={()=>{
                                    change(2)
                                    onClose()
                                }}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
