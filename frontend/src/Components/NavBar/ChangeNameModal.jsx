import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner} from "@nextui-org/react";
import {CgProfile} from "react-icons/cg";
import {useContext, useState} from "react";
import Context from "../../Context/Context";
import {Tost} from "../Tost";
import axios from "axios";
import ApiInfo from "../../ApiInfo/ApiInfo";
import SetCookieUser, {LoggedInDetails} from "../../Context/SetCookieUser";

export const ChangeNameModal = ({isOpen, onOpen, onOpenChange,name}) => {
    const [inp, setInp] = useState(name)
    const {User,SetUser} = useContext(Context)
    const [loading,setLoading]=useState(false)
    async function onChangePress(){
        console.log("Hi")
        if(inp===""){
            Tost("Type a name")
            return
        }
        if(inp===User.Name){
            Tost("No change in profile")
            return
        }
        const myForm = new FormData();
        myForm.set("name", inp);
        myForm.set("email", User.Email);
        const config = { headers: { "Content-Type": "multipart/form-data" },withCredentials:true };
        setLoading(true)
        const result=await axios.put(ApiInfo+"/user/update",myForm, config)
        SetCookieUser(
            User.Token.toString()
            ,result.data.data.name.toString()
            ,result.data.data.email.toString()
            ,result.data.data._id.toString()
            ,result.data.data.role.toString()
        )
        SetUser(LoggedInDetails())
        Tost("Successfully Updated")
        setLoading(false)
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <Input startContent={<CgProfile/>} value={inp} onChange={(e) => {
                                    setInp(e.target.value)
                                }}/>
                            </ModalBody>
                            <ModalFooter>
                                {!loading&&<><Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                    <Button color="primary" onPress={async ()=>{
                                        await onChangePress()
                                        onClose()
                                    }} >
                                Change
                            </Button></>}
                                {loading&&<Spinner/>}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
