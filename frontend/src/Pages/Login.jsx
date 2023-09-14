import LoginPageComponent from "../Components/Loginpage/LoginPageComponent";
import {Tost} from "../Components/Tost";
import {useState} from "react";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";
import Cookies from "js-cookie";
import SetCookieUser, {LoggedInDetails} from "../Context/SetCookieUser";

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
    async function OnLoginPress(){
        if(Email !== "" && Password !== ""){
            try {
                const result = await axios.post(ApiInfo+"/login",{
                    "email":Email,
                    "password":Password
                })
                SetCookieUser(result.data.token.toString()
                    ,result.data.user.name.toString()
                    ,result.data.user.email.toString()
                    ,result.data.user.avatar.url.toString()
                    ,result.data.user._id.toString()
                    ,result.data.user.role.toString()
                )
            }catch (e) {
                if(e.response?.data?.success === false){
                    Tost(e.response.data.details)
                    return
                }
            }
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