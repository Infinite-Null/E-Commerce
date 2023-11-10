// noinspection JSCheckFunctionSignatures

import React, {useState} from "react";
import {
    Tabs,
    Tab,
    Input,
    Link,
    Button,
    Card,
    CardBody,
    Spinner,
    Modal,
    ModalContent,
    ModalHeader, ModalBody, ModalFooter
} from "@nextui-org/react";
import {TbListDetails} from "react-icons/tb";
import {Tost} from "../Tost";
import axios from "axios";
import ApiInfo from "../../ApiInfo/ApiInfo";

export default function LoginPageComponent({
                                               onLoginEmailChange,
                                               onLoginPasswordChange,
                                               onSignupEmailChange,
                                               onSignupPasswordChange,
                                               onSignupNameChange,
                                               OnSignupPress,
                                               OnLoginPress,
                                               Loading
                                           }) {
    const [selected, setSelected] = React.useState("login");
    const [Show, setShow] = useState(false)
    const [Email, setEmail] = useState("")
    const [LoadingMail, setLoadingMail] = useState(false)
    const [Message, setMessage] = useState(false);
    const [Info,setInfo] = useState("")

    async function OkPress() {
        if (Email === "") {
            Tost("Please provide email")
            setLoadingMail(false)
            return
        }
        try {
            const res = await axios.post(ApiInfo + "/password/forgot", {email: Email})
            console.log(res)
            setInfo(res.data.message)
            setMessage(true)

        } catch (e) {
            setInfo(e.data?.message)
            setMessage(true)
        } finally {
            setLoadingMail(false)
        }

    }

    return (
        <>
            <MessageModal1 Message={Message} setMessage={setMessage} Info={Info}/>
            <MessageModal Show={Show} setShow={setShow} SetEmail={setEmail} LoadingMail={LoadingMail}
                        setLoadingMail={setLoadingMail} OkPress={OkPress}/>
            <div className="flex
        bg-[url('https://i0.wp.com/www.m2w2.com/wp-content/uploads/2022/05/sq-ht-logo-with-photo.png?fit=1000%2C1000&ssl=1')]
        md:flex-row h-[100vh] w-[100vw] items-center justify-center flex-col
        md:bg-[url('https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg')]">
                <img alt={"no"}
                     src={"https://www.stitchfix.com/men/blog/wp-content/uploads/2021/11/20-01-15_Set_3_M_SLD_GRID_v2-scaled.jpeg"}
                     className={'md:inline hidden '}
                     style={{
                         width: "300px",
                         height: "420px",
                         borderLeft: "1px solid black",
                         borderBottom: "1px solid black",
                         borderTop: "1px solid black",
                     }}/>
                <Card className="max-w-full w-[340px] h-[420px] drop-shadow-md rounded-[10px]" style={{
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                    borderTop: "1px solid black",
                    borderLeft: "1px solid black"
                }}>
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="login" title="Login">
                                <form className="flex flex-col gap-4">
                                    <Input isRequired label="Email" placeholder="Enter your email" type="email"
                                           variant={"underlined"}
                                           onChange={(e) => {
                                               onLoginEmailChange(e.target.value)
                                           }}
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant={"underlined"}
                                        onChange={(e) => {
                                            onLoginPasswordChange(e.target.value)
                                        }}
                                    />
                                    <p className="text-center text-small mt-10 cursor-pointer">
                                        Need to create an account?{" "}
                                        <Link size="sm" onPress={() => setSelected("sign-up")}>
                                            Sign up
                                        </Link>
                                    </p>
                                    <p className="text-center text-small cursor-pointer">
                                        Forgot Password?{" "}
                                        <Link size="sm" onPress={() => {
                                            console.log("Hi")
                                            setShow(true)
                                        }}>
                                            Reset Password
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        {!Loading && <Button
                                            type={"submit"}
                                            className="bg-gray-800 hover:bg-gray-950"
                                            style={{
                                                borderRadius: "10px",
                                                width: "300px",
                                                height: "60px", color: "white"
                                            }} variant="flat" startContent={<TbListDetails/>} onClick={(e) => {
                                            e.preventDefault()
                                            OnLoginPress()
                                        }}>Login</Button>}
                                        {Loading && <Button
                                            className="bg-gray-800 hover:bg-gray-950"
                                            style={{
                                                borderRadius: "10px",
                                                width: "300px",
                                                height: "60px", color: "white"
                                            }} variant="flat"><Spinner/></Button>}
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="sign-up" title="Sign up">
                                <form className="flex flex-col gap-4 h-[300px]">
                                    <Input isRequired label="Name" placeholder="Enter your name" variant={"underlined"}
                                           onChange={(e) => {
                                               onSignupNameChange(e.target.value)
                                           }}
                                    />
                                    <Input isRequired label="Email" placeholder="Enter your email" type="email"
                                           variant={"underlined"}
                                           onChange={(e) => {
                                               onSignupEmailChange(e.target.value)
                                           }}
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant={"underlined"}
                                        onChange={(e) => {
                                            onSignupPasswordChange(e.target.value)
                                        }}
                                    />
                                    <p className="text-center text-small">
                                        Already have an account?{" "}
                                        <Link size="sm" onPress={() => setSelected("login")}>
                                            Login
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        <Button
                                            type={"submit"}
                                            className="bg-gray-800 hover:bg-gray-950"
                                            style={{
                                                borderRadius: "10px",
                                                width: "300px",
                                                height: "60px", color: "white"
                                            }} variant="flat" onClick={async (e) => {
                                            e.preventDefault()
                                            OnSignupPress()
                                        }}>Signup</Button>
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

function MessageModal({Show, setShow, SetEmail, OkPress, LoadingMail, setLoadingMail}) {
    return (
        <>
            <Modal isOpen={Show}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Email</ModalHeader>
                        <ModalBody>
                            <Input variant={"underlined"} color={"primary"} placeholder={"Enter your email"}
                                   onChange={(e) => {
                                       SetEmail(e.target.value)
                                   }}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant={"flat"} onPress={() => {
                                !LoadingMail && setShow(false)
                            }}>
                                cancel
                            </Button>
                            {!LoadingMail && <Button color="primary" onPress={() => {
                                setLoadingMail(true)
                                OkPress()
                            }}>
                                Ok
                            </Button>}
                            {LoadingMail && <Button color="primary" onPress={() => {
                            }}>
                                <Spinner color={"warning"}/>
                            </Button>}
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

function MessageModal1({Message, setMessage, Info}) {
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
