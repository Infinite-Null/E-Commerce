import Context from "./Context";
import React, {useEffect, useState} from "react";
import {FristLoadCookie, LoggedInDetails} from "./SetCookieUser";

const ContextState = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const [User, SetUser] = useState(LoggedInDetails())
    const [Cart, SetCart] = useState([])
    const [Address, SetAddress] = useState({
        fristline: "",
        secondline: "",
        pincode: "",
        phone: "",
        place: "Delhi"
    })
    useEffect(() => {
        FristLoadCookie()
        SetUser(LoggedInDetails())
        return () => {

        }
    }, [])

    return <Context.Provider value={{searchValue, setSearchValue, User, SetUser, Cart, SetCart, Address, SetAddress}}>
        {props.children}
    </Context.Provider>
}

export default ContextState


// const result = await axios.post("http://localhost:4000/api/v1/login",{
//     "email":"ankit.kum.sha9933@gmail.com",
//     "password":"1234567890"
// })
// await Cookies.set('token', result.data.token.toString())
// Cookies.get("token")
// try {
//     const result1 = await axios.get("http://localhost:4000/api/v1/user/detail",{
//         headers: {
//         },
//         withCredentials:true
//     })
//     console.log(result1)
// }catch (e) {
//     console.log("failed")
// }


