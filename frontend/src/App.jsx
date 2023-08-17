import './App.css';
import NavBar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import ProductCard from "./Components/EachProductCard/ProductCard";
import Heading from "./Components/Heading/Heading";

function App() {
    return <>
        <NavBar/>
        <Banner/>
        <Heading/>
        <ProductCard title="Classic Peace Lily" orignalPrice={"300"} link={"https://www.yourdesignstore.in/admin/uploads/654321/productImages/full/1632490432614dd3c096612Kid_OR.jpg"} discountPrice={"230"}/>
    </>
}

export default App;
