import {Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {useState} from "react";
import {CiMenuKebab} from "react-icons/ci";
import {Alert, Space} from "antd";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {MdOutlineCategory} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

export function UsersAdminComponent({List, OnUpdatePressed, DeleteUser}) {
    const [selectedKey, setSelectedKey] = useState("User")

    function OnUpdatePress(value) {
        OnUpdatePressed(value, selectedKey)
    }

    return (
        <>
            <Card className={"m-5 border-black border-1"} isHoverable={true}>
                <CardBody className="flex-row justify-between items-center">
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>USER ID</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>EMAIL</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>NAME</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>ROLE</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div>ACTION</div>
                    </div>
                </CardBody>
                {List.map((e) => {
                    return <EachOrderComponent UserId={e._id} Role={e.role} Name={e.name} selectedKey={selectedKey}
                                               OnUpdatePress={OnUpdatePress} setSelectedKey={setSelectedKey}
                                               Email={e.email} DeleteUser={DeleteUser}/>
                })}
            </Card>
        </>
    )
}

function EachOrderComponent({UserId, Email, Name, Role, selectedKey, setSelectedKey, OnUpdatePress,DeleteUser}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [visible, setVisible] = useState(false);

    const handleClose = () => {
        setVisible(false);
    };
    return <>
        <CardBody className="flex-row justify-between items-center">
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{UserId}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}><p>{Email}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{Name}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: (Role === "admin") ? "red" : "blueviolet"
            }}><p>{Role}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            color="danger"
                            variant="light"
                            isIconOnly
                        >
                            <CiMenuKebab fontSize={"30px"}/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new" onPress={onOpen}>Edit</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => {
                            setVisible(true)
                        }
                        }>
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </CardBody>
        {visible && <Alert
            className="ml-10 mr-10 text-lg"
            message={"Are you sure you want to delete User Id: " + UserId + "?"}
            type="info"
            action={
                <Space>
                    <Button color={"danger"} onPress={() => {
                        DeleteUser(UserId)
                        handleClose()
                    }}>
                        Yes
                    </Button>
                    <Button type="text" size="small" ghost onPress={handleClose}>
                        Cancel
                    </Button>
                </Space>
            }
        />}
        <ModalUser isOpen={isOpen} onOpenChange={onOpenChange} name={Name} email={Email} setSelectedKey={setSelectedKey}
                   selectedKey={selectedKey}
                   onUpdatePress={OnUpdatePress} UserId={UserId}/>
    </>
}

function ModalUser({isOpen, onOpenChange, name, email, selectedKey, setSelectedKey, onUpdatePress, UserId}) {

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}
               className="flex flex-col items-center justify-center rounded-[0px]">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Change Role</ModalHeader>
                        <ModalBody>
                            <h1>{name}</h1>
                            <h1>{email}</h1>
                            <Dropdown className={"bg-gray-700 text-white rounded-[0px] w-[300px]"} style={{
                                borderRadius: "0px"
                            }}>
                                <DropdownTrigger>
                                    <Button
                                        className="border-gray-800 text-gray-800 border-2 capitalize flex justify-between"
                                        style={{
                                            borderRadius: "0",
                                            width: "300px",
                                            height: "60px", color: "white"
                                        }} variant="flat"
                                    >
                                        <MdOutlineCategory className="text-xl text-gray-800"/>
                                        <h1 className={'text-gray-800 text-xl'}>{selectedKey}</h1>
                                        <AiFillCaretDown className="text-xl text-gray-800"/>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    className={"bg-gray-700"}
                                    aria-label="Single selection example"
                                    variant="solid"
                                    color={"primary"}
                                    disallowEmptySelection
                                    selectionMode="single"
                                >
                                    <DropdownItem key="User" onPress={() => {
                                        setSelectedKey("User")
                                    }}>User</DropdownItem>
                                    <DropdownItem
                                        onPress={() => {
                                            setSelectedKey("Admin")
                                        }}
                                        key="Admin">Admin</DropdownItem>

                                </DropdownMenu>
                            </Dropdown>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                className="text-white bg-red-500"
                                style={{
                                    borderRadius: "0",
                                    width: "100px",
                                    height: "50px",
                                }} variant="flat" onPress={() => {
                                onOpenChange()
                            }}>Close</Button>
                            <Button
                                className="bg-gray-800 hover:bg-gray-950"
                                style={{
                                    borderRadius: "0",
                                    width: "100px",
                                    height: "50px", color: "white"
                                }} variant="flat" onPress={() => {
                                onUpdatePress(UserId)
                                onOpenChange()
                            }}>Update</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
