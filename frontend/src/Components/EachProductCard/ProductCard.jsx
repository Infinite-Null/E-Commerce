import "./Product.css"
import "./MainCon.css"
import {useNavigate} from "react-router-dom";

export default function ProductCard(props) {
    function GetDiscountedPrice(price, discount) {
        return (price - parseInt((price * discount) / 100))
    }

    const navigate = useNavigate()
    return (
        <div className={"mainProduct"} onClick={() => {
            navigate("/product/" + props.id, {state: props.id})
        }}>
            <div className={"discountProduct"}>
                {props.discount + "% off"}
            </div>
            <div className={"productImage"}>
                <img alt={"h"} className={"imageOfproduct"} src={props.link}/>
            </div>
            <div className={"productDetails"}>
                <h1 className={"productTitle"}>{props.title}</h1>
                <div className={"productPrice"}><span
                    className={"discountpriceproduct"}>{"₹" + props.orignalPrice}</span><span
                    className={"actualpriceproduct"}>{"₹" + GetDiscountedPrice(props.orignalPrice, parseInt(props.discount))}</span>
                </div>
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
