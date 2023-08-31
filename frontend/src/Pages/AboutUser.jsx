import {AboutUserComponent} from "../Components/AboutUser/AboutUserComponent";

export function AboutUser() {
    return (
        <><AboutUserComponent
            profile_url_image="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
            name="Ankit Kumar Shah"
            email={"ankit.kum@gmail.com"}
            join={"2/8/23"}
            onEditPress={()=>{
                
            }}
            onChangePasswordPress={()=>{

            }}
        /></>
    )
}