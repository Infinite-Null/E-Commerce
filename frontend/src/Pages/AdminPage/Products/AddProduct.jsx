import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {AddProductComponent} from "../../../Components/AdminComponents/AddProductComponent/AddProductComponent";
import {Tost} from "../../../Components/Tost";
import axios from "axios";

export function AddProduct() {
    async function onCreatePress(name, price, discription, stock, category, Images) {
        let data = new FormData();
        data.append('File', Images);
        let i = 0
        for (i; i < Images.length; i++) {
            console.log(Images.item(i).name)
            data.append("File", Images.item(i));
        }

        data.append('XYZ', "Hi");
        console.log(data)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/api/v1/admin/products/new',
            headers: {"Content-Type": "multipart/form-data"},
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <SideBar/>
            <h1 style={{
                fontSize: "65px",
                textAlign: "center",
                textDecoration: "underline"
            }}>
                Add Product
            </h1>
            <AddProductComponent onCreatePress={onCreatePress}/>
        </>
    )
}
