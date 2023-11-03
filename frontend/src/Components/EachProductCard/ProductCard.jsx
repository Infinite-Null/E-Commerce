import "./Product.css"
import "./MainCon.css"
import {Button} from "@nextui-org/react";
import {TbListDetails} from "react-icons/tb";
import {useNavigate} from "react-router-dom";

export default function ProductCard(props) {
    const navigate = useNavigate()
    return (
        <div className="product-card-container">
            <img
                src={props.link}
                alt={`$`}/>
            <div className="product-card-details">
                <div className="name">{props.title}</div>
                <div className={"priceConatiner"}><div className="actualprice">₹{props.orignalPrice}</div>
                    <div className="price">₹{props.discountPrice}</div></div>
            </div>
        </div>
    )
}

export function ProductLayout(props) {
    console.log(props)
    return <div id="MainConatiner">
        {props.children}
    </div>


}

// export const ProductsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
//
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//     column-gap: 10px;
//     row-gap: 40px;
//   }
//
//   @media (max-width: 576px) {
//     grid-template-columns: repeat(2, 1fr);
//     row-gap: 30px;
//   }
// `;
