import LoginPageComponent from "../Components/Loginpage/LoginPageComponent";
import {Tost} from "../Components/Tost";

export function Login() {
    function onLoginEmailChange(value){

    }
    function onLoginPasswordChange(value){

    }
    function onSignupEmailChange(value){

    }
    function onSignupPasswordChange(value){

    }
    function onSignupNameChange(value){

    }
    function OnLoginPress(){
        Tost('Successfully Logged In')
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