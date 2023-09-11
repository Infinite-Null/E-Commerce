import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiInfo from "../ApiInfo/ApiInfo";
import axios from "axios";

export function AllProductWithCategory() {
    let {state} = useLocation();
    if(state===null){
        state={
            category:"All Products"
        }
    }
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    async function FetchData(){
        let url=state.category
        if(url==="All Products"){
            url=""
        }
        const greater=100
        const less=1000
        const result=await axios.get(ApiInfo+"/products?price[gt]="+greater+"&price[lt]="+less+"&category="+url.split(" ").join(""))
        setData(result.data)
    }
    useEffect(()=>{
        setLoading(true)
        FetchData().then(()=>{
            setLoading(false)
        })
        return()=>{

        }
    },[])
    function onRangeChange(range){

    }
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <>{(loading===false)?<AllProductCategory data={state} onRangeChange={onRangeChange} products={data.Products??[]} totalProducts={9} key={state.category}/>:<h1>Loading</h1>}</>
    )
}