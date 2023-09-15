import {AboutUserComponent} from "../Components/AboutUser/AboutUserComponent";
import {useContext} from "react";
import Context from "../Context/Context";

export function AboutUser() {
    const {User}=useContext(Context)
    return (
        <><AboutUserComponent
            profile_url_image={User.Avatar}
            name={User.Name}
            email={User.Email}
            join={"Thank you for being with us"}
            onEditPress={()=>{
                
            }}
            onChangePasswordPress={()=>{

            }}
        /></>
    )
}