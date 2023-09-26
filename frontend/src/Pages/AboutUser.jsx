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

export function AboutUser() {
    const [key,setKey]=useState(Math.random())
    const [Image,setImage]=useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {User}=useContext(Context)
    const [name,setName]=useState(User.Name)
    console.log(User.Email)
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
        console.log("Lodimg....")
        myForm.set("name", name);
        myForm.set("email", User.Email);
        myForm.set("avatar", Image);
        const config = { headers: { "Content-Type": "multipart/form-data" },withCredentials:true };
        const result=await axios.put(ApiInfo+"/user/update",myForm, config)
        console.log(result.data)
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
                                <label>Choose Avater</label>
                                <div className={"flex"}> <Input
                                    isRequired
                                    type="file"
                                    variant={"underlined"}
                                    onChange={(e)=>{
                                        try {
                                            if(e.target.files[0].size>900000) {
                                                Tost("File size too big")
                                            }
                                            updateProfileDataChange(e)
                                            setPreviewImage(URL.createObjectURL(e.target.files[0]))
                                        }catch (e) {
                                            console.log("select Image")
                                        }
                                    }}
                                /><img alt={"no"} src={previewImage} style={{
                                    height:"60px",
                                    width:"60px",
                                    objectFit:"cover",
                                    border:"2px solid black",
                                    borderRadius:"100%"
                                }}/></div>
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
                                    onChangePress()
                                    onClose()
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
