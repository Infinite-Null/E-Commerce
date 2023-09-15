// noinspection JSCheckFunctionSignatures

import LoginPageComponent from "../Components/Loginpage/LoginPageComponent";
import {Tost} from "../Components/Tost";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";
import SetCookieUser, {LoggedInDetails} from "../Context/SetCookieUser";
import Context from "../Context/Context";
import {useNavigate} from "react-router-dom";

export function Login() {
    const {SetUser,User}=useContext(Context)
    const [user, setUserr] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [avatar, setAvatar] = useState("")
    const navigate=useNavigate()
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    function onLoginEmailChange(value){
        setEmail(value)
    }
    function onLoginPasswordChange(value){
        setPassword(value)
    }
    async function OnLoginPress(){
        if(Email !== "" && Password !== ""){
            try {
                const result = await axios.post(ApiInfo+"/login",{
                    "email":Email,
                    "password":Password
                })
                console.log(result.data)
                SetCookieUser(result.data.token.toString()
                    ,result.data.user.name.toString()
                    ,result.data.user.email.toString()
                    ,result.data.user.avatar.url.toString()
                    ,result.data.user._id.toString()
                    ,result.data.user.role.toString()
                )
                SetUser(LoggedInDetails())
                navigate(-1)
                Tost('Successfully Logged In')
            }catch (e) {
                if(e.response?.data?.success === false){
                    Tost(e.response.data.details)
                    return
                }
            }

        }
    }

    function onSignupEmailChange(value){
        setUserr({...user,"email":value})
    }
    function onSignupPasswordChange(value){
        setUserr({...user,"password":value})
    }
    function onSignupNameChange(value){
        setUserr({...user,"name":value})
    }

    async function OnSignupPress(){
        const {name,email,password}=user
        if(name===""||email===""||password===""){
            Tost('Please fill name email and password fields')
            return
        }
        if(avatar===''){
            Tost('Please select avatar')
            return
        }
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post(ApiInfo+`/register`, myForm, config);
        console.log(data)
        Tost('Successfully Signed In')
    }

    function onFileSelectChange(file){
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result)
            }
        };

        reader.readAsDataURL(file);
    }
    useEffect(()=>{
        if(User.IsLoggedIn===true){
            navigate(-1)
        }
        return ()=>{

        }
    })
    return (
        <><LoginPageComponent onLoginEmailChange={onLoginEmailChange} onSignupEmailChange={onSignupEmailChange} onSignupPasswordChange={onSignupPasswordChange}
        onSignupNameChange={onSignupNameChange} onLoginPasswordChange={onLoginPasswordChange} OnLoginPress={OnLoginPress} OnSignupPress={OnSignupPress}
        onFileSelectChange={onFileSelectChange}
        /></>
    )
}