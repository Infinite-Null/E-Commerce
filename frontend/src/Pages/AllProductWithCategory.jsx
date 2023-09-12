import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiInfo from "../ApiInfo/ApiInfo";
import axios from "axios";
import Filters from "../Components/AllProductsWithCategory/Filters";

export function AllProductWithCategory() {
    let {state} = useLocation();
    if(state===null){
        state={
            category:"All Products"
        }
    }
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    async function FetchData(min,max){
        let url=state.category
        if(url==="All Products"){
            url=""
        }
        const result=await axios.get(ApiInfo+"/products?price[gt]="+min+"&price[lt]="+max+"&category="+url.split(" ").join(""))
        console.log(ApiInfo+"/products?price[gte]="+min+"&price[lte]="+max+"&category="+url.split(" ").join(""))
        setData(result.data)
    }
    useEffect(()=>{
        setLoading(true)
        FetchData(0,1000).then(()=>{
            setLoading(false)
        })
        return()=>{

        }
    },[])
    function onRangeChange(range){

    }
    function onApplyPress(minMax){
        setLoading(true)
        FetchData(minMax[0][0],minMax[0][1]).then(()=>{
            setLoading(false)
        })
    }
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (<>
            <Filters title={state.category} onRangeChange={onRangeChange} totalProducts={data.TotalReaturened} onApplyPress={onApplyPress}/>
            {(loading===false)?<>
            <AllProductCategory data={state} products={data.Products??[]} key={Math.random()}/>
        </>:<h1>Loading</h1>}</>
    )
}