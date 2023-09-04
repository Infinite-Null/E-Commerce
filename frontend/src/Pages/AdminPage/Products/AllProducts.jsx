import {AllProductsComponent} from "../../../Components/AdminComponents/AllProducts/AllProductsComponent";
export function ProductsPageAdmin() {
    function onUpdatePress(name,price,discription,stock,productId){
        console.log(name,price,discription,stock)
    }
    function onDeletePress(productId){

    }
    return <AllProductsComponent onUpdatePress={onUpdatePress} onDeletePress={onDeletePress}/>
}
