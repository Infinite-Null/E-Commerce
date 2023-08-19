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

export function Home() {
    const x=[1,2,3,4,5]
    const categories=[
        {
            link:oversized,
            name:"Oversized"
        },
        {
            link: windcheater,
            name:"Windcheater"
        },
        {
            link:cargo,
            name:"Cargo-pants"
        },
        {
            link:socks,
            name:"Socks"
        },
        {
            link:shorts,
            name:"Shorts"
        },
        {
            link:tshirt,
            name:"Relaxed Shirt"
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
    return <>

        <Banner/>
        <Heading title={"Featured"}/>
        <ProductLayout>
            {x.map((_,i)=> <ProductCard title="Classic Peace Lily" orignalPrice={"300"} link={"https://www.yourdesignstore.in/admin/uploads/654321/productImages/full/1632490432614dd3c096612Kid_OR.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Categories"}/>
        <Categories cat={categories}/>
        <Heading title={"Trending"}/>
        <ProductLayout>
            {x.map((_,i)=> <ProductCard title="Red Polo T-shirt" orignalPrice={"300"} link={"https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/item_61_01.jpg?220211"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Top Reviews"}/>
        <Review/>
        <Heading title={"New Arrivals"}/>
        <ProductLayout>
            {x.map((_,i)=> <ProductCard title="Blue Print Shirt" orignalPrice={"300"} link={"https://imgmedia.lbb.in/media/2020/05/5eac0e7c833b2b7acdc583b2_1588334204878.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Reliability"}/>
        <Highlight1/>
        <Heading title={"Best Sellers"}/>
        <ProductLayout>
            {x.map((_,i)=> <ProductCard title="White Relaxed Shirt" orignalPrice={"300"} link={"https://hips.hearstapps.com/hmg-prod/images/index-cuban-collar-1-64b6f686e40f3.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Footer Contact={contact} Follow={follow} Social={social}/>
    </>
}