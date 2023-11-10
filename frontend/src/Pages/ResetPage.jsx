import {Link, useParams} from "react-router-dom";
import {Button, Input, Spinner} from "@nextui-org/react";
import {useState} from "react";
import {Tost} from "../Components/Tost";
import axios from "axios";
import ApiInfo from "../ApiInfo/ApiInfo";

export const ResetPage = () => {
    const {id} = useParams()
    const [success, setsuccess] = useState(false)
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    const [Loading, setLoading] = useState(false)

    async function Reset() {
        setLoading(true)
        if (password === "" || Confirmpassword === "") {
            Tost("Please fill all")
            setLoading(false)
            return
        }
        if (password !== Confirmpassword) {
            Tost("Confirm password doesn't match password")
            setLoading(false)
            return
        }
        try {
            const res = await axios.post(ApiInfo + "/password/reset/" + id, {
                password, confirmPassword: Confirmpassword
            })
            setsuccess(true)
            Tost(res.data.message)
        } catch (e) {
            Tost("Something went wrong! Try again..")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div style={{
            position: "absolute",
            zIndex: "10000000000000",
            backgroundColor: "white",
            top: 0,
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            gap: "20px"
        }}>
            {!success && <>
                <Input color={"primary"} className={"max-w-[300px]"} placeholder={"Enter new password"}
                       type={'password'}
                       style={{
                           maxWidth: "300px"
                       }} onChange={(e) => setPassword(e.target.value)}/>
                <Input color={"primary"} className={"max-w-[300px]"} placeholder={"Confirm new password"}
                       type={'password'}
                       style={{
                           maxWidth: "300px"
                       }} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button color={"primary"} onClick={() => {
                    !Loading && Reset()
                }}>{(Loading) ? <Spinner color={"white"}/> : "Reset"}</Button>
            </>}
            {success && <>
                <img src={"https://i.gifer.com/7efs.gif"} style={{
                    width: "300px",
                }} alt={"i"}/>
                <h1>{"Successfully Updated Password"}</h1>
                <Link to={"/"} style={{
                    color: "blue"
                }}>Login>></Link>
            </>}
        </div>
    )
}
