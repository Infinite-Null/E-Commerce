import {AboutUserComponent} from "../Components/AboutUser/AboutUserComponent";
import {useContext, useState} from "react";
import Context from "../Context/Context";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input
} from "@nextui-org/react";
import {Tost} from "../Components/Tost";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";
import SetCookieUser, {LoggedInDetails} from "../Context/SetCookieUser";

export function AboutUser() {
    const [key,setKey]=useState(Math.random())
    const [Image,setImage]=useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {User,SetUser}=useContext(Context)
    const [name,setName]=useState(User.Name)
    const [Loading,setLoading]=useState(false)
    async function onChangePress(){
        if(name===""){
            Tost("Type a name")
            return
        }
        if(name===User.Name&&Image===""){
            Tost("No change in profile")
            return
        }
        const myForm = new FormData();
        setLoading(true)
        myForm.set("name", name);
        myForm.set("email", User.Email);
        myForm.set("avatar", Image);
        const config = { headers: { "Content-Type": "multipart/form-data" },withCredentials:true };
        const result=await axios.put(ApiInfo+"/user/update",myForm, config)
        SetCookieUser(
            User.Token.toString()
            ,result.data.data.name.toString()
            ,result.data.data.email.toString()
            ,result.data.data.avatar.url.toString()
            ,result.data.data._id.toString()
            ,result.data.data.role.toString()
        )
        SetUser(LoggedInDetails())
        setLoading(false)
    }

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };
    return (
        <>
            <LodingModal Loading={Loading}/>
            <ModalOfEdit isOpen={isOpen} updateProfileDataChange={updateProfileDataChange} onChangePress={onChangePress} onOpenChange={onOpenChange} User={User} setImage={setImage} key={key} setKey={setKey} name={name} setName={setName}/>
            <AboutUserComponent
            profile_url_image={User.Avatar}
            name={User.Name}
            email={User.Email}
            join={"Thank you for being with us"}
            onEditPress={()=>{
                onOpen()
            }}
            onChangePasswordPress={()=>{

            }}
        />
        </>
    )
}

function ModalOfEdit({isOpen, onOpenChange, User, setImage, key, setKey, onChangePress, setName, name, updateProfileDataChange}) {
    const [previewImage,setPreviewImage]=useState(User.Avatar)
    return (
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={'flex flex-col justify-center items-center w-72'} size={"xs"} key={key}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>
                            <ModalBody>
                                <Input
                                    value={name}
                                    isClearable
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }}
                                    type="text"
                                    label="Name"
                                    variant={"underlined"}
                                    placeholder="Enter your name"
                                    defaultValue={User.Name}
                                    className="max-w-xs"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={()=>{
                                    setKey(Math.random())
                                    setImage("")
                                    onClose()
                                }}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={()=>{
                                    setKey(Math.random())
                                    onClose()
                                    onChangePress()
                                }}>
                                    Change
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
    );
}
function LodingModal({Loading}) {
    return (
        <>
            <Modal isOpen={Loading} isKeyboardDismissDisabled={false} isDismissable={false} size={"xs"}>
                <ModalContent>
                    {(_) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Please Wait...</ModalHeader>
                            <ModalBody>
                            <img src={"/update_loading.gif"} alt={"no"} className={"h-full w-full"}/>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
