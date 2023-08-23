import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export function AllProductWithCategory() {
    const {state}=useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <><AllProductCategory data={state}/></>
    )
}