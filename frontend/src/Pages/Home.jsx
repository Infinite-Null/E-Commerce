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
import {Button} from "@nextui-org/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Swiper, SwiperComponent} from "../Components/Swiper/Swiper";

export function Home() {
    const navigate = useNavigate()
    const x = [1, 2, 3, 4, 5, 6]
    //featured state
    const [Featured, setFeatured] = useState([])
    const [FeaturedLoding, setFeaturedLoding] = useState(false)
    //Trending state
    const [Trending, setTrending] = useState([])
    const [TrendingLoading, setTrendingLoading] = useState(false)
    //New Arrival
    const [Arrival, setArrival] = useState([])
    const [ArrivalLoading, setArrivalLoading] = useState(false)
    //BestSeller
    const [Best, setBest] = useState([])
    const [BestLoading, setBestLoading] = useState(false)

    //Functions:
    //Get Featured
    async function GetFeaturedItems() {
        const result = await axios.get(Api + "/products?category=featuredshow")
        setFeatured(result.data)
    }

    //Get Trending
    async function GetTrendingItems() {
        const result = await axios.get(Api + "/products?category=trendingshow")
        setTrending(result.data)
    }

    //Get Arrival
    async function GetArrivalItems() {
        const result = await axios.get(Api + "/products?category=newarrivalsshow")
        setArrival(result.data)
    }

    //Get Best
    async function GetBestItems() {
        const result = await axios.get(Api + "/products?category=bestsellershow")
        setBest(result.data)
    }

    //Loading:
    //Featured Loading
    function IsLodingFeatured() {
        if (FeaturedLoding === true) {
            return x.map((e) => <LodingSkeletion key={e}/>)
        } else {
            // eslint-disable-next-line array-callback-return
            return Featured && Featured.Products ? Featured.Products.map((e, i) => {
                    if (i < 5) {
                        return <ProductCard title={e.name}
                                            orignalPrice={e.price }
                                            link={e.images[0].url}
                                            discountPrice={e.price}
                                            key={i} id={e._id} discount={e.discount}/>
                    } else {
                        return <></>
                    }
                }
            ) : undefined
        }
    }

    //Trending Loading
    function IsLodingTrending() {
        if (TrendingLoading === true) {
            return x.map((e) => <LodingSkeletion key={e}/>)
        } else {
            // eslint-disable-next-line array-callback-return
            return Trending && Trending.Products ? Trending.Products.map((e, i) => {
                    if (i < 5) {
                        return <ProductCard title={e.name}
                                            orignalPrice={e.price }
                                            link={e.images[0].url}
                                            discountPrice={e.price}
                                            key={i} id={e._id} discount={e.discount}/>
                    } else {
                        return <></>
                    }
                }
            ) : undefined
        }
    }

    //Arrival Loading
    function IsLodingArrival() {
        if (ArrivalLoading === true) {
            return x.map((e) => <LodingSkeletion key={e}/>)
        } else {
            // eslint-disable-next-line array-callback-return
            return Arrival && Arrival.Products ? Arrival.Products.map((e, i) => {
                    if (i < 5) {
                        return <ProductCard title={e.name}
                                            orignalPrice={e.price }
                                            link={e.images[0].url}
                                            discountPrice={e.price}
                                            key={i} id={e._id} discount={e.discount}/>
                    } else {
                        return <></>
                    }
                }
            ) : undefined
        }
    }

    //Best Loading
    function IsLodingBest() {
        if (BestLoading === true) {
            return x.map((e) => <LodingSkeletion key={e}/>)
        } else {
            // eslint-disable-next-line array-callback-return
            return Best && Best.Products ? Best.Products.map((e, i) => {
                    if (i < 5) {
                        return <ProductCard title={e.name}
                                            orignalPrice={e.price }
                                            link={e.images[0].url}
                                            discountPrice={e.price}
                                            key={i} id={e._id} discount={e.discount}/>
                    } else {
                        return <></>
                    }
                }
            ) : undefined
        }
    }

    const categories = [
        {
            link: oversized,
            name: "Oversized",
            onPressed: () => {
                console.log("Hello")
                navigate('/Oversized', {state: {category: "Oversized"}})
            }
        },
        {
            link: windcheater,
            name: "Windcheater",
            onPressed: () => {
                navigate('/Windcheater', {state: {category: "Windcheater"}})
            }
        },
        {
            link: cargo,
            name: "Cargo-pants",
            onPressed: () => {
                navigate('/Cargo-pants', {state: {category: "Cargo-pants"}})
            }
        },
        {
            link: socks,
            name: "Socks",
            onPressed: () => {
                navigate('/Socks', {state: {category: "Socks"}})
            }
        },
        {
            link: shorts,
            name: "Shorts",
            onPressed: () => {
                navigate('/Shorts', {state: {category: "Shorts"}})
            }
        },
        {
            link: tshirt,
            name: "Relaxed Shirt",
            onPressed: () => {
                navigate('/Relaxed-Shirt', {state: {category: "Relaxed-Shirt"}})
            }
        }
    ]
    const contact = [
        {
            link: "https://mail.google.com/",
            text: "xyz@gmail.com"
        },
        {
            link: "/",
            text: "+91 1234567890"
        },
    ]
    const follow = [
        {
            link: "https://instagram.com",
            text: "Instagram"
        },
        {
            link: "https://facebook.com",
            text: "Facebook"
        },
        {
            link: "https://twitter.com",
            text: "Twitter"
        },
    ]
    const social = [
        {
            link: "https://facebook.com",
            page: "Facebook",
            icon: <TfiFacebook/>
        },
        {
            link: "https://instagram.com",
            page: "Instagram",
            icon: <SiInstagram/>
        },
        {
            link: "https://twitter.com",
            page: "Twitter",
            icon: <FaTwitter/>
        },
    ]

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setFeaturedLoding(true)
        setTrendingLoading(true)
        setArrivalLoading(true)
        setBestLoading(true)
        GetFeaturedItems().then(() => {
            setFeaturedLoding(false)
        })
        GetTrendingItems().then(() => {
            setTrendingLoading(false)
        })
        GetArrivalItems().then(() => {
            setArrivalLoading(false)
        })
        GetBestItems().then(() => {
            setBestLoading(false)
        })
        return () => {

        }
    }, [])
    return <>

        {/*<Banner/>*/}
        <SwiperComponent/>
        <Heading title={"Featured"} show={true} value={{state: {category: "featured"}}}/>
        <ProductLayout>
            {IsLodingFeatured()}
        </ProductLayout>
        <Heading title={"Categories"} center={true}/>
        <Categories cat={categories}/>
        <Heading title={"Trending"} show={true} value={{state: {category: "trending"}}}/>
        <ProductLayout width="99">
            {IsLodingTrending()}
        </ProductLayout>
        <Heading title={"Top Reviews"} center={true}/>
        <Review/>
        <Heading title={"New Arrivals"} show={true} value={{state: {category: "new"}}}/>
        <ProductLayout width="99">
            {IsLodingArrival()}
        </ProductLayout>
        <Heading title={"Reliability"} center={true}/>
        <Highlight1/>
        <Heading title={"Best Sellers"} show={true} value={{state: {category: "Best"}}}/>
        <ProductLayout width="99">
            {IsLodingBest()}
        </ProductLayout>
        <Footer Contact={contact} Follow={follow} Social={social}/>
    </>
}
