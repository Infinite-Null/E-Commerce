import ProductDetail from "../Components/ProductDetail/ProductDetail";
import {useContext, useEffect, useState} from "react";
import {Tost} from "../Components/Tost";
import {useLocation, useParams} from "react-router-dom";
import Api from "../ApiInfo/ApiInfo";
import axios from "axios";
import {LoadingProductDetails} from "../Components/ProductDetail/LoadingProductDetails";
import ApiInfo from "../ApiInfo/ApiInfo";
import Context from "../Context/Context";

export function ProductDetails() {
    const {Cart, SetCart} = useContext(Context)
    const [Quantity, SetQuantity] = useState(1)
    const [Review, setReview] = useState("")
    const [Star, setStar] = useState(0)
    const [Loading, setLoading] = useState(false)

    function onQuntityChange(value) {
        SetQuantity(value)
    }

    function onReviewTextChange(value) {
        setReview(value)
    }

    function getReviewStar(value) {
        setStar(value)
    }

    async function onPostReviewPress() {
        setLoading(true)
        if (Review === "") {
            Tost("Please fill review")
            setLoading(false)
            return
        }
        if (Star === 0) {
            Tost("Please select star for product")
            setLoading(false)
            return
        }
        await axios.put(ApiInfo + "/review", {
            "productId": id,
            "comment": Review,
            "rating": Star
        }, {
            withCredentials: true
        })
        setLoading(false)
        Tost("Thank you for your review.")
        await FetchDetails()
    }

    const {id} = useParams()
    const [loading, setloading] = useState(false)
    const [data, setData] = useState({})

    function Pressed(id) {
        const Dummy = [...Cart];
        for (let i = 0; i < Dummy.length; i++) {
            if (Dummy[i].id === id) {
                Tost("Item Already Added To Cart")
                return
            }
        }
        Dummy.push({
            id: data._id,
            name: data.name,
            price: data.price,
            image: data.images[0].url,
            quality: Quantity,
            maxQuantity: data.Stock,
            discount: data.discount
        })
        SetCart(Dummy)
        Tost("Item Added to cart.")
    }

    async function FetchDetails() {
        const result = await axios.get(Api + "/products/" + id)
        console.log(result.data.Product)
        setData(result.data.Product)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setloading(true)
        FetchDetails().then((_) => {
            setloading(false)
        })
        return () => {

        }
    }, [id])

    return (
        <>
            {(loading === false) ? <ProductDetail
                productId={id}
                images={data.images ?? [{url: "https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg"}]}
                title={data.name}
                averageReview={data.ratings}
                discountedPrice={data.price - parseInt((data.price * data.discount) / 100)}
                totalPrice={data.price}
                discription={data.description}
                onReviewTextChange={onReviewTextChange}
                onQuntityChange={onQuntityChange}
                getReviewStar={getReviewStar}
                reviews={data.reviews ?? []}
                onAddToCart={Pressed}
                maxStock={data.Stock ?? 0}
                onPostReviewPress={onPostReviewPress}
                Star={Star}
                Loading={Loading}
                key={data}
            /> : <LoadingProductDetails/>}
        </>
    )
}
