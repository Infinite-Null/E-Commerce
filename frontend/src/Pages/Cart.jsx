import {CartPage} from "../Components/CartComponent/CartPage";
import {AddressForm} from "../Components/AddressForm/AddressForm";
import MultiStep from "../Components/MultiStep";
import {useState} from "react";

export function Cart() {
    const [step,setStep]=useState(0)
    function changeStep(x){
        setStep(x)
    }
    return (
            <>
                <MultiStep step={step}/>
                {(step===0)?<CartPage change={changeStep}/>:(step===1)?<AddressForm change={changeStep}/>:<h1>1</h1>}
            </>
    )
}