import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {UsersAdminComponent} from "../../../Components/AdminComponents/UsersAdminComponent/UsersAdminComponent";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {Tost} from "../../../Components/Tost";
import {useEffect, useState} from "react";
import {Spinner} from "@nextui-org/react";

export function UsersAdminPage() {
    const [Users, setUsers] = useState([])
    const [Loading,setLoading]=useState(false)
    async function OnUpdatePressed(UserId, Role) {
        console.log(UserId, Role.toLowerCase())
        let data = {
            "role": Role.toLowerCase()
        };
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            await axios.post(ApiInfo + "/admin/updateRole/" + UserId, data, config)
        } catch (e) {
            Tost("Something went wrong")
            return
        }

        await GetUser()
        Tost("Successfully Updated")
    }

    async function DeleteUser(UserId){
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            await axios.delete(ApiInfo + "/admin/deleteUser/" + UserId, config)
        } catch (e) {
            Tost("Something went wrong")
            return
        }

        await GetUser()
        Tost("Successfully Deleted")
    }

    async function GetUser() {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            const res = await axios.get(ApiInfo + "/admin/users", config)
            console.log(res.data)
            setUsers(res.data.users)
        } catch (e) {
            Tost("Something went wrong")
        }
        setLoading(false)
    }

    useEffect(() => {
        GetUser()
    }, []);

    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize: "65px",
                textAlign: "center",
                textDecoration: "underline"
            }}>
                All Users
            </h1>
            {!Loading&&<UsersAdminComponent OnUpdatePressed={OnUpdatePressed} DeleteUser={DeleteUser} List={Users}/>}
            {Loading && <div style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Spinner/>
            </div>}
        </>
    )
}
