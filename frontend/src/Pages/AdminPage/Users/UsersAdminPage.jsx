import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {UsersAdminComponent} from "../../../Components/AdminComponents/UsersAdminComponent/UsersAdminComponent";

export function UsersAdminPage() {
    return (
        <>
        <SideBar/>
            <h1 style={{
                fontSize:"65px",
                textAlign:"center",
                textDecoration:"underline"
            }}>
                All Users
            </h1>
        <UsersAdminComponent/>
        </>
    )
}