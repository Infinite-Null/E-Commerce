import ProductDetail from "../Components/ProductDetail/ProductDetail";
import {useEffect} from "react";

export function ProductDetails() {
    const discription="It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters."
    const images=[
        "https://5.imimg.com/data5/SELLER/Default/2022/11/FS/LN/SB/128607083/haldi-ceremony-bride-and-groom-tshirt.png",
        "https://5.imimg.com/data5/ANDROID/Default/2021/7/KU/YI/VT/44196072/product-jpeg.jpg",
        "https://ph-test-11.slatic.net/p/11b5eb757692f1cbd46b345f199da268.jpg",
    ]
    function onQuntityChange(value){

    }
    function onReviewTextChange(value){

    }
    function getReviewStar(value){

    }
    function Pressed(id){
        console.log(id)
    }
    const reviews=[
        {
            avater:"https://i.ibb.co/QcqyrVG/Mask-Group.png",
            date:"14 July 2021",
            name:"Anna Kendrick",
            rating:3,
            dicription:"When you want to decorate your home, the idea of choosing a decorative theme can seem daunting. Some themes seem to have an endless amount of pieces, while others can feel hard to accomplish"
        },
        {
            avater:"https://i.ibb.co/QcqyrVG/Mask-Group.png",
            date:"14 July 2021",
            rating:4,
            name:"Anna Kendrick",
            dicription:"When you want to decorate your home, the idea of choosing a decorative theme can seem daunting. Some themes seem to have an endless amount of pieces, while others can feel hard to accomplish"
        },
        {
            avater:"https://i.ibb.co/QcqyrVG/Mask-Group.png",
            date:"14 July 2021",
            rating:5,
            name:"Anna Kendrick",
            dicription:"When you want to decorate your home, the idea of choosing a decorative theme can seem daunting. Some themes seem to have an endless amount of pieces, while others can feel hard to accomplish"
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <ProductDetail
            productId={"123456"}
            images={images}
            title="Duhle Ka Bhai"
            averageReview={3.5}
            discountedPrice={230}
            totalPrice={300}
            discription={discription}
            onReviewTextChange={onReviewTextChange}
            onQuntityChange={onQuntityChange}
            getReviewStar={getReviewStar}
            reviews={reviews}
            onAddToCart={Pressed}
        />
    )
}