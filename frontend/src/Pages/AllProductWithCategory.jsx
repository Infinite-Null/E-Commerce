import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";

export function AllProductWithCategory() {
    const {state}=useLocation()
    return (
        <><AllProductCategory data={state}/></>
    )
}