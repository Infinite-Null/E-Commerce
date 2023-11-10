// noinspection JSCheckFunctionSignatures

import LoginPageComponent from "../Components/Loginpage/LoginPageComponent";
import {Tost} from "../Components/Tost";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";
import SetCookieUser, {LoggedInDetails} from "../Context/SetCookieUser";
import Context from "../Context/Context";
import {useNavigate} from "react-router-dom";
import RegisterLoding from "../Components/Loginpage/RegisterLoding";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";

export function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const {SetUser, User} = useContext(Context)
    const [Message, setMessage] = useState(false);
    const [Info,setInfo] = useState("")
    const [user, setUserr] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    function onLoginEmailChange(value) {
        setEmail(value)
    }

    function onLoginPasswordChange(value) {
        setPassword(value)
    }

    async function OnLoginPress() {
        setLoading(true)
        if (Email !== "" && Password !== "") {
            try {
                const result = await axios.post(ApiInfo + "/login", {
                    "email": Email,
                    "password": Password
                })
                setLoading(false)
                SetCookieUser(result.data.token.toString()
                    , result.data.user.name.toString()
                    , result.data.user.email.toString()
                    , result.data.user._id.toString()
                    , result.data.user.role.toString()
                )
                SetUser(LoggedInDetails())
                navigate("/")
                Tost('Successfully Logged In')
            } catch (e) {
                setLoading(false)
                console.log(e.response.data)
                if (e.response?.data?.success === false) {
                    setInfo(e.response.data.details)
                    setMessage(true)
                    return
                }
            }

        } else {
            Tost("Please Fill All Fields...")
            setLoading(false)
        }
        setLoading(false)
    }

    function onSignupEmailChange(value) {
        setUserr({...user, "email": value})
    }

    function onSignupPasswordChange(value) {
        setUserr({...user, "password": value})
    }

    function onSignupNameChange(value) {
        setUserr({...user, "name": value})
    }

    async function OnSignupPress() {
        setIsOpen(true)
        const {name, email, password} = user
        if (name === "" || email === "" || password === "") {
            Tost('Please fill name email and password fields')
            setIsOpen(false)
            return
        }

        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        const config = {headers: {"Content-Type": "multipart/form-data"}};
        try {
            const result = await axios.post(ApiInfo + `/register`, myForm, config);
            setIsOpen(false)
            // console.log(result.data.message)
            setInfo(result.data.message)
            setMessage(true)
        } catch (e) {
            setIsOpen(false)
            setInfo(e.response.data.details)
            setMessage(true)
        }
    }

    useEffect(() => {
        if (User.IsLoggedIn === true) {
            navigate(-1)
        }
        return () => {

        }
    })
    return (
        <><MessageModal Message={Message} setMessage={setMessage} Info={Info}/>
            <LoginPageComponent onLoginEmailChange={onLoginEmailChange} onSignupEmailChange={onSignupEmailChange}
                                onSignupPasswordChange={onSignupPasswordChange}
                                onSignupNameChange={onSignupNameChange} onLoginPasswordChange={onLoginPasswordChange}
                                OnLoginPress={OnLoginPress} OnSignupPress={OnSignupPress} Loading={Loading}
            />
            <RegisterLoding isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}




function MessageModal({Message, setMessage, Info}) {
    return (
        <>
            <Modal isOpen={Message}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Message</ModalHeader>
                        <ModalBody>
                            <p>
                                {Info}
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={()=>{
                                setMessage(false)
                            }}>
                                Ok
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}
