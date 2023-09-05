import {AllProductsComponent} from "../../../Components/AdminComponents/AllProducts/AllProductsComponent";
import {Tost} from "../../../Components/Tost";
export function ProductsPageAdmin() {
    function onUpdatePress(name,price,discription,stock,productId,category){
        Tost("Successfully Updated")
    }
    function onDeletePress(productId){
        Tost("Successfully Deleted")
    }
    return <AllProductsComponent onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
}
