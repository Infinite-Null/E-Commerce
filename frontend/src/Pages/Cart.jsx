import {CartPage} from "../Components/CartComponent/CartPage";
import {AddressForm} from "../Components/AddressForm/AddressForm";
import MultiStep from "../Components/MultiStep";
import {useState} from "react";
import {PaymentForm} from "../Components/PaymentForm/PaymentForm";

export function Cart() {
    const [step, setStep] = useState(0)

    function changeStep(x) {
        setStep(x)
    }

    return (
        <>
            <div><MultiStep step={step}/></div>
            {(step === 0) ? <CartPage change={changeStep}/> : (step === 1) ? <AddressForm change={changeStep}/> :
                <PaymentForm change={changeStep}/>}
        </>
    )
}
