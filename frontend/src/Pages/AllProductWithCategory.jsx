import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export function AllProductWithCategory() {
    let {state} = useLocation();
    if(state===null){
        state={
            category:"All Products"
        }
    }
    function onRangeChange(range){

    }
    const products=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <><AllProductCategory data={state} onRangeChange={onRangeChange} products={products} totalProducts={9}/></>
    )
}