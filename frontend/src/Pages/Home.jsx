import oversized from "../Images/oversized.png";
import windcheater from "../Images/windcheater.webp";
import cargo from "../Images/cargo.jpg";
import socks from "../Images/socks.webp";
import shorts from "../Images/shorts.webp";
import tshirt from "../Images/tshirt.webp";
import {TfiFacebook} from "react-icons/tfi";
import {SiInstagram} from "react-icons/si";
import {FaTwitter} from "react-icons/fa";
import Banner from "../Components/Banner/Banner";
import Heading from "../Components/Heading/Heading";
import ProductCard, {ProductLayout} from "../Components/EachProductCard/ProductCard";
import {Categories} from "../Components/Categories/Categories";
import {Review} from "../Components/Reviews/Review";
import {Footer} from "../Components/Footer/Footer";
import Highlight1 from "../Components/Highlights/Highlights";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Api from "../ApiInfo/ApiInfo";
import LodingSkeletion from "../Components/LodingSkeletion/LodingSkeletion";

export function Home() {
    const x=[1,2,3,4,5]
    const [Featured,setFeatured]=useState([])
    const [FeaturedLoding,setFeaturedLoding]=useState(false)
    async function GetFeaturedItems(){
        const result=await  axios.get(Api+"/products?category=featured")
        setFeatured(result.data)
    }
    function IsLodingFeatured(){
        if(FeaturedLoding===true){
            return x.map((e)=><LodingSkeletion key={e}/>)
        }else{
            return Featured && Featured.Products ? Featured.Products.map((e, i) => <ProductCard title={e.name}
                                                                                                orignalPrice={e.price}
                                                                                                link={e.images[0].url}
                                                                                                discountPrice={e.price-100}
                                                                                                key={i}/>
            ) : undefined
        }
    }



    const navigate=useNavigate()
    const categories=[
        {
            link:oversized,
            name:"Oversized",
            onPressed:()=>{
                console.log("Hello")
                navigate('/Oversized',{state: {category: "Oversized"}})
            }
        },
        {
            link: windcheater,
            name:"Windcheater",
            onPressed:()=>{
                navigate('/Windcheater',{state: {category: "Windcheater"}})
            }
        },
        {
            link:cargo,
            name:"Cargo-pants",
            onPressed:()=>{
                navigate('/Cargo-pants',{state: {category: "Cargo-pants"}})
            }
        },
        {
            link:socks,
            name:"Socks",
            onPressed:()=>{
                navigate('/Socks',{state: {category: "Socks"}})
            }
        },
        {
            link:shorts,
            name:"Shorts",
            onPressed:()=>{
                navigate('/Shorts',{state: {category: "Shorts"}})
            }
        },
        {
            link:tshirt,
            name:"Relaxed Shirt",
            onPressed:()=>{
                navigate('/Relaxed-Shirt',{state:{category:"Relaxed-Shirt"}})
            }
        }
    ]
    const contact=[
        {
            link:"https://mail.google.com/",
            text:"xyz@gmail.com"
        },
        {
            link:"/",
            text:"+91 1234567890"
        },
    ]
    const follow=[
        {
            link:"https://instagram.com",
            text:"Instagram"
        },
        {
            link:"https://facebook.com",
            text:"Facebook"
        },
        {
            link:"https://twitter.com",
            text:"Twitter"
        },
    ]
    const social=[
        {
            link:"https://facebook.com",
            page:"Facebook",
            icon:<TfiFacebook/>
        },
        {
            link:"https://instagram.com",
            page:"Instagram",
            icon:<SiInstagram/>
        },
        {
            link:"https://twitter.com",
            page:"Twitter",
            icon:<FaTwitter/>
        },
    ]

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        setFeaturedLoding(true)
        GetFeaturedItems().then(()=>{
            setFeaturedLoding(false)
        })
        return()=>{

        }
    },[])
    return <>

        <Banner/>
        <Heading title={"Featured"}/>
        <ProductLayout width="99">
            {IsLodingFeatured()}
        </ProductLayout>
        <Heading title={"Categories"}/>
        <Categories cat={categories}/>
        <Heading title={"Trending"}/>
        <ProductLayout width="99">
            {x.map((_,i)=> <ProductCard title="Red Polo T-shirt" orignalPrice={"300"} link={"https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/item_61_01.jpg?220211"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Top Reviews"}/>
        <Review/>
        <Heading title={"New Arrivals"}/>
        <ProductLayout width="99">
            {x.map((_,i)=> <ProductCard title="Blue Print Shirt" orignalPrice={"300"} link={"https://imgmedia.lbb.in/media/2020/05/5eac0e7c833b2b7acdc583b2_1588334204878.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Reliability"}/>
        <Highlight1/>
        <Heading title={"Best Sellers"}/>
        <ProductLayout width="99">
            {x.map((_,i)=> <ProductCard title="White Relaxed Shirt" orignalPrice={"300"} link={"https://hips.hearstapps.com/hmg-prod/images/index-cuban-collar-1-64b6f686e40f3.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Footer Contact={contact} Follow={follow} Social={social}/>
    </>
}