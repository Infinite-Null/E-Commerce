import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import ProductCard, {ProductLayout} from "./Components/EachProductCard/ProductCard";
import Heading from "./Components/Heading/Heading";
import {Categories} from "./Components/Categories/Categories";

function App() {
    const x=[1,2,3,4,5]
    return <>
        <NavBar/>
        <Banner/>
        <Heading title={"Featured Products"}/>
        <ProductLayout>
            {x.map((_,i)=> <ProductCard title="Classic Peace Lily" orignalPrice={"300"} link={"https://www.yourdesignstore.in/admin/uploads/654321/productImages/full/1632490432614dd3c096612Kid_OR.jpg"} discountPrice={"230"} key={i}/>
            )}
        </ProductLayout>
        <Heading title={"Categories"}/>
        <Categories cat={[
            {
                link:"https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1686143600342516611518738868oversized-tee-website-1.png",
                name:"Oversized"
            },
            {
                link: "https://cdn.pixelbin.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/11oct2021/410294621021_4.jpg",
                name:"Windcheater"
            },
            {
                link:"https://5.imimg.com/data5/ECOM/Default/2023/6/313447685/CD/HO/QO/9422220/cargo-pants-men-solid-color-black-loose-casual-jogger-pocket-elastic-waist-ankle-length-977.jpg",
                name:"Cargo-pants"
            },
            {
                link:"https://cdn.thewirecutter.com/wp-content/media/2023/06/no-show-socks-2048px-1205.jpg?auto=webp&quality=75&width=1024",
                name:"Socks"
            },
            {
                link:"https://pyxis.nymag.com/v1/imgs/ba0/b4b/692b1c17930ef698abdc5549b51b2cf36e-bic-mens-gym-shorts.2x.rsocial.w600.jpg",
                name:"Shorts"
            },
            {
                link:"https://cdn.thewirecutter.com/wp-content/media/2021/01/whitetshirts-2048px-0297-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
                name:"Relaxed Shirt"
            }
        ]}/>
    </>
}

export default App;
