import {Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {CiMenuKebab} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
import {Alert, Space} from "antd";
import {useState} from "react";

export function OrdersAdminComponent({OnDeletePress, list}) {
    return (
        <>
            <Card className={"m-5 border-black border-1"} isHoverable={true}>
                <CardBody className="flex-row justify-between items-center">
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>ORDER ID</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>STATUS</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>QUANTITY</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>AMOUNT</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div>ACTION</div>
                    </div>
                </CardBody>
                {list.map((e, i) => <EachOrderComponent key={i} OrderId={e.OrderId} Status={e.Status} Quantity={e.Quantity}
                                                        Amount={e.Amount} OnDeletePress={OnDeletePress}/>)}
            </Card>
        </>
    )
}

function EachOrderComponent({OrderId, Status, Quantity, Amount, OnDeletePress}) {
    const [visible, setVisible] = useState(false);

    const handleClose = () => {
        setVisible(false);
    };
    const navigate = useNavigate()
    return <>
        <CardBody className="flex-row justify-between items-center">
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{OrderId}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: (Status.toString().toLowerCase() === "delivered") ? "green" : (Status.toString().toLowerCase() === "processing") ? "red" : "blueviolet"
            }}><p>{Status}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{Quantity}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{Amount}</p></div>
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
                        <DropdownItem key="new" onPress={() => {
                            navigate('/Admin/Orders/Detail', {state: OrderId})
                        }}>Edit</DropdownItem>
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
            message={"Are you sure you want to delete Order Id: " + OrderId + "?"}
            type="info"
            action={
                <Space>
                    <Button color={"danger"} onPress={() => {
                        OnDeletePress(OrderId)
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
