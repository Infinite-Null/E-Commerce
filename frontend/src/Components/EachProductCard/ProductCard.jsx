import "./Product.css"
import {Button} from "@nextui-org/react";
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
    )
}

export function ProductLayout(props){
    const width=(props.width!=null)?`${props.width}vw`:"99vw"
    return<div className={`w-[100vw] flex items-center justify-center`}>
        <div className={`category w-[100vw] md:w-[${width}]`}>
            {props.children}
        </div>
    </div>

}