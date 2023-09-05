import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {AddProductComponent} from "../../../Components/AdminComponents/AddProductComponent/AddProductComponent";
import {Tost} from "../../../Components/Tost";

export function AddProduct() {
    function onCreatePress(name,price,discription,stock,category) {
        Tost("Successfully Created")
    }
    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize:"65px",
                textAlign:"center",
                textDecoration:"underline"
            }}>
               Add Product
            </h1>
            <AddProductComponent onCreatePress={onCreatePress}/>
        </>
    )
}