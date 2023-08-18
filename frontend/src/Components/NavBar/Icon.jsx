import React from "react";
import {Badge, Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

export default function Icon({icon,count}) {
    const navigate=useNavigate()
    return (
        <Badge content={count} shape="circle" color="danger">
            <Button
                onPress={()=>{
                    navigate("cart")
                }}
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
            >
                {icon}
            </Button>
        </Badge>
    );
}
