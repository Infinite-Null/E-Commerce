import "./Product.css"
import {Button} from "@nextui-org/react";
import {FaCartPlus} from "react-icons/fa6";
import {TbListDetails} from "react-icons/tb";
import {useNavigate} from "react-router-dom";
export default function ProductCard(props) {
    const navigate = useNavigate()
    return (
            <div className="card">
                <div className="photo">
                    <img className="Imageproduct" src={props.link} alt="Not Found"/>
                </div>
                <div className="description">
                    <h2 className="ProductTitle">{props.title}</h2>
                    <h1 className="ProductPrice"><sapn className="ProductDupliPrice">{"₹"+props.orignalPrice}</sapn>{"₹"+props.discountPrice}</h1>
                    <div style={{
                        display:"flex",
                        alignItems:"stretch",
                        justifyContent:"space-around",
                        padding:"5px"
                    }}>
                        <Button className="m-2 font-bold"  variant="ghost" startContent={<FaCartPlus/>}>Cart</Button>
                        <Button className="m-2 font-bold"  variant="ghost" startContent={<TbListDetails/>} onPress={()=>{
                            navigate("/product/1234")
                        }}>Details</Button>
                    </div>
                </div>
            </div>
    )
}

export function ProductLayout(props){
    return<div className="w-[99vw] flex items-center justify-center">
        <div className={`category xl:w-[${props.width}vw]`}>
            {props.children}
        </div>
    </div>

}