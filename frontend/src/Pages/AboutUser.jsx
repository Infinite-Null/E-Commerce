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

export function AboutUser() {
    const [key,setKey]=useState(Math.random())
    const [Image,setImage]=useState({})
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {User}=useContext(Context)
    console.log(Image)
    return (
        <>
            <ModalOfEdit isOpen={isOpen} onOpenChange={onOpenChange} User={User} setImage={setImage} key={key} setKey={setKey}/>
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

function ModalOfEdit({isOpen, onOpenChange, User, setImage, key, setKey}) {
    const [previewImage,setPreviewImage]=useState(User.Avatar)
    return (
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={'flex flex-col justify-center items-center w-72'} size={"xs"} key={key}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Profile</ModalHeader>
                            <ModalBody>
                                <Input
                                    isClearable
                                    type="text"
                                    label="Name"
                                    variant={"underlined"}
                                    placeholder="Enter your name"
                                    defaultValue={User.name}
                                    className="max-w-xs"
                                />
                                <label>Choose Avater</label>
                                <div className={"flex"}> <Input
                                    isRequired
                                    type="file"
                                    variant={"underlined"}
                                    onChange={(e)=>{
                                        try {
                                            setImage(e.target.files[0])
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
                                    setImage({})
                                    onClose()
                                }}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={()=>{
                                    setKey(Math.random())
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
