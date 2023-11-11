import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import {AddProductComponent} from "../../../Components/AdminComponents/AddProductComponent/AddProductComponent";
import {Tost} from "../../../Components/Tost";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {useState} from "react";

export function AddProduct() {
    const [Loading, setLoading] = useState(false)

    async function onCreatePress(name, price, discription, stock, category, Images, discount) {
        if (Images?.length === 0 || name === "" || price === "" || discription === "" || stock === "" || category === "") {
            Tost("Fill all the fields")
        } else {
            let data = new FormData();
            data.append('File', Images);
            let i = 0
            for (i; i < Images.length; i++) {
                console.log(Images.item(i).name)
                data.append("File", Images.item(i));
            }
            data.append('name', name);
            data.append('Stock', stock);
            data.append('price', price);
            data.append('description', discription);
            data.append('category', category);
            data.append('discount', discount);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: ApiInfo + "/admin/products/new",
                headers: {"Content-Type": "multipart/form-data"},
                data: data,
                withCredentials: true
            };
            setLoading(true)
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                setLoading(false)
                Tost("Product Created Successfully")
            })
        }
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
            <h1 style={{
                padding: 20,
                fontSize: 20,
                textAlign:"center"
            }}>Note: To add product to New Arrivals type newarrivals, to add to Best Seller type bestseller, for
                Trending type trending and for Featured type featured in Category feild </h1>
            <h1 style={{
                padding: 20,
                fontSize: 20,
                textAlign:"center"
            }}>Note: To show products in these sections just add show at end example newarrivalsshow </h1>
            {!Loading && <AddProductComponent onCreatePress={onCreatePress}/>}
            {Loading && <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
                top: "0px",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.33)",
                backdropFilter: "blur(5px)"
            }}>
                <img src={require("../../../Images/Wating.gif")} style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "100%"
                }}/>
                <h1 style={{
                    fontSize: "30px",
                    color: "white"
                }}>Please wait this may take a while</h1>
            </div>}
        </>
    )
}
