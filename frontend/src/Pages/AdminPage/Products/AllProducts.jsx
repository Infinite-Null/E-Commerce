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

    function onUpdatePress(name, price, discription, stock, productId, category) {
        Tost("Successfully Updated")
    }

    async function onDeletePress(productId) {
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try{
            await axios.delete(ApiInfo + "/admin/products/"+productId, config)
            GetAllData()
            Tost("Successfully Deleted")
        }
        catch (e) {
            Tost("Something went wrong")
        }finally {
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
    return <AllProductsComponent onUpdatePress={onUpdatePress} onDeletePress={onDeletePress} Products={Products}
                                 SetSearch={SetSearch} Loading={Loading}/>
}
