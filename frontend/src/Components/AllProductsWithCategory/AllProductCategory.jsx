import Filters from "./Filters";
import ProductCard, {ProductLayout} from "../EachProductCard/ProductCard";

export const AllProductCategory = ({data}) => {
    const x=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
    return (
        <>
        <Filters title={data.category}/>
                <ProductLayout width="80">
                    {x.map((_,i)=> <ProductCard title="Classic Peace Lily" orignalPrice={"300"} link={"https://www.yourdesignstore.in/admin/uploads/654321/productImages/full/1632490432614dd3c096612Kid_OR.jpg"} discountPrice={"230"} key={i}/>
                    )}
                </ProductLayout>
        </>
    )
}
