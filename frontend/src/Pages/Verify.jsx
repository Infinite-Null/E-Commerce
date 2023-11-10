import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";

export const Verify = () => {
    const Images = [
        "https://i.pinimg.com/originals/84/22/0a/84220a2fc13e5f62e5f4da4ee1d15112.gif",
        "https://i.gifer.com/7efs.gif",
        "https://68.media.tumblr.com/3802e690377a90e63ed309d157247395/tumblr_olhi6orjbY1ql3nz5o1_1280.gif"
    ]
    const [Image, setImage] = useState(0)
    const [message, setmessage] = useState("Please Wait...")
    const {id} = useParams()
    console.log(id)

    async function VerifyData() {
        try {
            const res = await axios.post(ApiInfo + "/user/verify/" + id)
            console.log(res)
            setmessage(res.data.details)
            setImage(1)
        } catch (e) {
            setmessage("Failed")
            setImage(2)
        }
    }

    useEffect(() => {
        VerifyData()
    }, [])

    return (
        <div style={{
            position: "absolute",
            zIndex: "1000000000000",
            width: "100vw",
            top: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: "500px"
        }}>
            <img src={Images[Image]} style={{
                width: "300px",
            }}/>
            <h1>{message}</h1>
            {Image === 1 && <Link to={"/"} style={{
                color: "blue"
            }}>Login>></Link>}
        </div>
    )
}
