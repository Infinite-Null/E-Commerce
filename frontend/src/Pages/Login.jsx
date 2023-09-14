import LoginPageComponent from "../Components/Loginpage/LoginPageComponent";
import {Tost} from "../Components/Tost";
import {useState} from "react";

export function Login() {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    function onLoginEmailChange(value){
        setEmail(value)
    }
    function onLoginPasswordChange(value){
        setPassword(value)
    }
    function onSignupEmailChange(value){

    }
    function onSignupPasswordChange(value){

    }
    function onSignupNameChange(value){

    }
    function OnLoginPress(){
        if(Email !== "" && Password !== ""){
            Tost('Successfully Logged In')
        }
    }
    function OnSignupPress(){
        Tost('Successfully Signed In')
    }
    return (
        <><LoginPageComponent onLoginEmailChange={onLoginEmailChange} onSignupEmailChange={onSignupEmailChange} onSignupPasswordChange={onSignupPasswordChange}
        onSignupNameChange={onSignupNameChange} onLoginPasswordChange={onLoginPasswordChange} OnLoginPress={OnLoginPress} OnSignupPress={OnSignupPress}
        /></>
    )
}