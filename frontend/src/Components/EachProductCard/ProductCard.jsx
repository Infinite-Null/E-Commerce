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
                src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}
                alt={`$`}/>
            <div className="product-card-details">
                <span className="name">{"Shoe"}</span>
                <span className="price">₹{"500"}</span>
            </div>
        </div>
    )
}

export function ProductLayout(props) {
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
