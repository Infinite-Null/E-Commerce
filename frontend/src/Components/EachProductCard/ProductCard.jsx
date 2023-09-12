import "./Product.css"
import {Button} from "@nextui-org/react";
import {TbListDetails} from "react-icons/tb";
import {useNavigate} from "react-router-dom";
export default function ProductCard(props) {
    const navigate = useNavigate()
    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 flex justify-center items-center m-10">
            <div className="card">
                <div className="photo">
                    <img className="Imageproduct" src={props.link} alt="Not Found"/>
                </div>
                <div className="description">
                    <h2 className="ProductTitle">{props.title}</h2>
                    <h1 className="ProductPrice"><sapn className="ProductDupliPrice">{"₹"+props.orignalPrice}</sapn>{"₹"+props.discountPrice}</h1>
                    <Button
                        className="bg-gray-800 hover:bg-gray-950"
                        style={{
                            borderRadius:"0",
                            width:"300px",
                            height:"60px",color:"white"
                        }}  variant="flat" startContent={<TbListDetails/>} onPress={()=>{
                        navigate("/product/"+props.id,{state:props.id})
                    }}>Details</Button>
                </div>
            </div>
        </div>
    )
}

export function ProductLayout(props){
    const width=(props.width!=null)?`${props.width}vw`:"99vw"
    return<div className="mx-auto container">
        <div className="flex flex-col">
            <div className="mt-10 grid lg:grid-cols-3 items-center">
                {props.children}
            </div>
        </div>
    </div>

}
