import {AllProductsComponent} from "../../../Components/AdminComponents/AllProducts/AllProductsComponent";
import {Tost} from "../../../Components/Tost";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {useEffect, useState} from "react";
import Api from "../../../ApiInfo/ApiInfo";

export function ProductsPageAdmin() {
    const [Products, SetProducts] = useState([])
    const [Search, SetSearch] = useState("")
    const [Loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

    async function GetAllData() {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        const result = await axios.get(ApiInfo + "/products/get-all/admin", config)
        // console.log(result.data)
        SetProducts(result.data.products)
        setLoading(false)
    }

    async function searching(val) {
        setLoading(true)
        const result = await axios.get(Api + "/search?keyword=" + val)
        console.log(result.data.products)
        SetProducts(result.data.products)
        setLoading(false)
    }

    useEffect(() => {
        GetAllData()
    }, [])

    async function onUpdatePress(name, price, discription, stock, productId, category, Images, discount) {
        console.log(Images.length)
        if (Images.length === 0) {
            const config = {
                headers: {"Content-Type": "multipart/form-data"}, withCredentials: true
            }
            setLoading(true)
            await axios.patch(ApiInfo + "/admin/products/" + productId, {
                name, price, description: discription, Stock: stock, category, discount
            }, config)
            await GetAllData()
            // console.log(result.data)
            Tost("Successfully Updated")
        } else {
            setImageLoading(true)
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
            data.append("discount", discount)
            let config = {
                method: 'patch',
                maxBodyLength: Infinity,
                url: ApiInfo + "/admin/productsWithImage/" + productId,
                headers: {"Content-Type": "multipart/form-data"},
                data: data,
                withCredentials: true
            };
            axios.request(config)
                .then(async (response) => {
                    await GetAllData()
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                setImageLoading(false)
                setLoading(false)
                Tost("Product Updated Successfully")
            })
        }
        // console.log(name, price, discription, stock, productId, category)

    }

    async function onDeletePress(productId) {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            await axios.delete(ApiInfo + "/admin/products/" + productId, config)
            GetAllData()
            Tost("Successfully Deleted")
        } catch (e) {
            Tost("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Search === "") {
            GetAllData()
            return
        }
        searching(Search)
    }, [Search]);
    return <>
        {!imageLoading &&
            <AllProductsComponent onUpdatePress={onUpdatePress} onDeletePress={onDeletePress} Products={Products}
                                  SetSearch={SetSearch} Loading={Loading}/>}
        {imageLoading && <div style={{
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
}
