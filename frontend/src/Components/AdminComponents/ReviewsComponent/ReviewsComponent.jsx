import {Button, Card, CardBody, Input} from "@nextui-org/react";
import React, {useState} from "react";
import {AiFillDelete} from "react-icons/ai";
import {Alert, Space} from "antd";

export function ReviewsComponent({List, OnYesPress, OnSearchPress}) {
    const [input, setInput] = useState("")
    return (
        <>
            <Input variant={"flat"} size={"lg"} label={"Enter Product Id"}
                   className={"w-72 mt-10 border-1 border-black "} style={{
                fontSize: "20px",
            }} onChange={(e) => {
                setInput(e.target.value)
            }}/>
            <Button
                onPress={() => {
                    OnSearchPress(input)
                }}
                className="bg-gray-800 border-2 capitalize flex justify-center w-72 border-1 border-black"
                style={{
                    borderRadius: "0",
                    height: "60px", color: "white"
                }} variant="flat"
            >
                <h1 className={'text-white text-xl'}>Search Product</h1>
            </Button>
            <Card className={"m-5 border-black border-1 text-lg w-[95vw] no-underline"} isHoverable={true}>
                <CardBody className="flex-row justify-between items-center">
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>REVIEW ID</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>USER</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>COMMENT</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}><p>RATING</p></div>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div>ACTION</div>
                    </div>
                </CardBody>
                {List.map((e, i) => <EachComponent Rating={e.Rating} ReviewId={e.ReviewId} User={e.User}
                                                   OnYesPress={OnYesPress} Comment={e.Comment} key={i}/>)}
            </Card>
        </>
    )
}

function EachComponent({OnYesPress, ReviewId, User, Comment, Rating}) {
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
            }}><p>{ReviewId}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{User}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{Comment}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><p>{Rating}</p></div>
            <div style={{
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><Button isIconOnly variant={"light"} onPress={() => {
                setVisible(true)
            }}><AiFillDelete className="text-3xl text-red-700 cursor-pointer"/></Button></div>

        </CardBody>
        {visible && <Alert
            className="ml-10 mr-10 text-lg"
            message={"Are you sure you want to delete Review Id: " + ReviewId + "?"}
            type="info"
            action={
                <Space>
                    <Button color={"danger"} onPress={() => {
                        OnYesPress(ReviewId)
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
