import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {
    Button,
    Card,
    CardBody,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Textarea
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
import {CiMenuKebab} from "react-icons/ci";
import {useState} from "react";
import {Tost} from "../../Tost";
import {Alert, Space} from "antd";
export function AllProductsComponent({onUpdatePress,onDeletePress}) {
    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize:"65px",
                textAlign:"center",
                textDecoration:"underline"
            }}>
                All Products
            </h1>
            <Card className={"m-5 border-black border-1"} isHoverable={true}>
                <CardBody className="flex-row justify-between items-center">
                    <div style={{
                        width:"25%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><p>PRODUCT ID</p></div>
                    <div style={{
                        width:"25%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><p>NAME</p></div>
                    <div style={{
                        width:"25%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><p>STOCK</p></div>
                    <div style={{
                        width:"25%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><p>PRICE</p></div>
                    <div style={{
                        width:"25%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><div>ACTION</div></div>
                </CardBody>
                <EachItem productId={"123456789"} name={"Socks"} price={"100"} stock={"10"} onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
                <EachItem productId={"123456789"} name={"Socks"} price={"100"} stock={"10"} onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
                <EachItem productId={"123456789"} name={"Socks"} price={"100"} stock={"10"} onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
                <EachItem productId={"123456789"} name={"Socks"} price={"100"} stock={"10"} onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
            </Card>
        </>
    )
}

function EachItem({productId,name,stock,price,discription,category,onUpdatePress,onDeletePress}){
    const [visible, setVisible] = useState(false);

    const handleClose = () => {
        setVisible(false);
    };

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [UpdateName,setName]=useState(name)
    const [UpdateStock,setStock]=useState(stock)
    const [UpdatePrice,setPrice]=useState(price)
    const [UpdateDiscription,setDiscription]=useState(discription)
    const [UpdateCategory,setCategory]=useState(category)
    return <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{productId}</ModalHeader>
                        <ModalBody>
                            <Input
                                classNames={"p-5"}
                                label="Name"
                                variant="bordered"
                                defaultValue={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />
                            <Input
                                type={"number"}
                                classNames={"p-5"}
                                label="Price"
                                variant="bordered"
                                defaultValue={price}
                                onChange={(e)=>{
                                    setPrice(e.target.value)
                                }}
                            />
                            <Textarea
                                label="Description"
                                variant="bordered"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue={discription}
                                onChange={(e)=>{
                                    setDiscription(e.target.value)
                                }}
                            />
                            <Input
                                type={"number"}
                                classNames={"p-5"}
                                label="Stock"
                                variant="bordered"
                                defaultValue={stock}
                                onChange={(e)=>{
                                    setStock(e.target.value)
                                }}
                            />
                            <Input
                                className={"mb-5"}
                                label="Category"
                                placeholder={"Enter Category Separated with space"}
                                variant="bordered"
                                onChange={(e)=>{
                                    setCategory(e.target.value)
                                }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={()=>{
                                onUpdatePress(UpdateName, UpdatePrice, UpdateDiscription, UpdateStock, productId, UpdateCategory)
                                onClose()
                            }}>
                                Update
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        <CardBody className="flex-row justify-between items-center">
        <div style={{
            width:"25%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}><p>{productId}</p></div>
        <div style={{
            width:"25%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}><p>{name}</p></div>
        <div style={{
            width:"25%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}><p>{stock}</p></div>
        <div style={{
            width:"25%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}><p>{price}</p></div>
        <div style={{
            width:"25%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
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
                    <DropdownItem key="new" onClick={onOpen}>Edit</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger" onClick={()=>{
                        setVisible(true)
                    }}>
                        Delete
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </CardBody>
        {visible&&<Alert
            className="ml-10 mr-10 text-lg"
            message={"Are you sure you want to delete productId: " + productId + "?"}
            type="info"
            action={
                <Space>
                    <Button color={"danger"}  onPress={()=>{
                    onDeletePress()
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
    </>
}