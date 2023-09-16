import ProductDetail from "../Components/ProductDetail/ProductDetail";
import {useEffect, useState} from "react";
import {Tost} from "../Components/Tost";
import {useLocation} from "react-router-dom";
import Api from "../ApiInfo/ApiInfo";
import axios from "axios";
import {LoadingProductDetails} from "../Components/ProductDetail/LoadingProductDetails";
import ApiInfo from "../ApiInfo/ApiInfo";
import Rating from "react-rating";

export function ProductDetails() {
    const[Review,setReview]=useState("")
    const[Star,setStar]=useState(0)
    const[Loading,setLoading]=useState(false)

    function onQuntityChange(value){

    }
    function onReviewTextChange(value){
        setReview(value)
    }
    function getReviewStar(value){
        setStar(value)
    }
    function Pressed(id){
        Tost("Item Added to cart.")
    }
    async function onPostReviewPress(){
        setLoading(true)
        if(Review===""){
            Tost("Please fill review")
            setLoading(false)
            return
        }
        if(Star===0){
            Tost("Please select star for product")
            setLoading(false)
            return
        }
        await axios.put(ApiInfo+"/review",{
            "productId":state,
            "comment":Review,
            "rating": Star
        },{
            withCredentials:true
        })
        setLoading(false)
        Tost("Thank you for your review.")
        await FetchDetails()
    }

    const {state}=useLocation()
    const [loading,setloading]=useState(false)
    const [data,setData]=useState({})

    async function FetchDetails(){
        const result=await axios.get(Api+"/products/"+state)
        setData(result.data.Product)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        setloading(true)
        FetchDetails().then((_)=>{
            setloading(false)
        })
        return ()=>{

        }
    }, [])

    return (
       <>
           {(loading===false)?<ProductDetail
               productId={state}
               images={data.images??[{url:"https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg"}]}
               title={data.name}
               averageReview={data.ratings}
               discountedPrice={parseInt(data.price)-100}
               totalPrice={data.price}
               discription={data.discription}
               onReviewTextChange={onReviewTextChange}
               onQuntityChange={onQuntityChange}
               getReviewStar={getReviewStar}
               reviews={data.reviews??[]}
               onAddToCart={Pressed}
               maxStock={data.Stock??0}
               onPostReviewPress={onPostReviewPress}
               Star={Star}
               Loading={Loading}
               key={data}
           />:<LoadingProductDetails/>}
       </>
    )
}