import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Input
} from "@nextui-org/react";
import {AiFillCreditCard} from "react-icons/ai";
import React, {useContext} from "react";
import {MdDateRange, MdVpnKey} from "react-icons/md";
import {usePaymentInputs} from "react-payment-inputs";
import {Tost} from "../Tost";
import Context from "../../Context/Context";

export function PaymentForm({change}) {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
    const {Cart}=useContext(Context)
    function CalculateTotal(){
        let sum=0
        Cart.forEach((e)=>{
            sum+=(e.quality*e.price)
        })
        return sum
    }
    return (
        <div style={{
            width:"99vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"50vh",
            flexDirection:"column",
        }}>
            <Card className="max-w-full w-[350px]  border-2 border-black" style={{
                boxShadow:"0px 0px 20px 2px rgba(0,0,0,0.25)",
            }}>
                <CardHeader>Payment Info</CardHeader>
                <CardBody className="overflow-hidden gap-4">
                    <Input
                        type={"number"}
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"Card Number"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Card Number</span>}
                        placeholder="Enter your card number"
                        startContent={<AiFillCreditCard style={{fontSize:"25px",marginRight:"5px"}}/>}
                        {...getCardNumberProps({ onChange:(e)=>{

                            } })}
                    />
                    <Input
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"Expiry Date"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>Expiry Date</span>}
                        placeholder="Enter your card's expiry date"
                        startContent={<MdDateRange style={{fontSize:"25px",marginRight:"5px"}}/>}
                        {...getExpiryDateProps({ onChange:(e)=>{

                            } })}
                    />
                    <Input
                        type="number"
                        style={{
                            fontSize:"15px",
                            fontWeight:"900"
                        }}
                        aria-label={"cvc"}
                        isClearable={true}
                        variant={"bordered"}
                        isRequired
                        label={<span style={{fontSize:"15px",marginBottom:"5px"}}>CVC number</span>}
                        placeholder="Enter your cvc number"
                        startContent={<MdVpnKey style={{fontSize:"25px",marginRight:"5px"}}/>}
                        {...getCVCProps({ onChange:(e)=>{

                            } })}
                    />

                </CardBody>
                <CardFooter style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <Button onPress={()=>{
                        change(1)
                    }}>
                        Prev
                    </Button>
                    <Button onPress={()=>{
                            if(meta.erroredInputs.cardNumber!==undefined) {
                                Tost(meta.erroredInputs.cardNumber)
                            }
                            else if(meta.erroredInputs.expiryDate!==undefined) {
                                Tost(meta.erroredInputs.expiryDate)
                            }else if(meta.erroredInputs.cvc!==undefined) {
                                Tost(meta.erroredInputs.cvc)
                            }
                    }}>
                        Pay
                    </Button>
                </CardFooter>
                <CardFooter style={{
                    display:"flex",
                    justifyContent:"center",
                    fontSize:"25px"
                }}>
                    <h1 className={"text-[23px]"}>{`Total - ₹${CalculateTotal()}`}</h1>
                </CardFooter>
            </Card>
        </div>
    )
}