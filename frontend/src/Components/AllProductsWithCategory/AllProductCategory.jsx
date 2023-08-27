import Filters from "./Filters";
import ProductCard, {ProductLayout} from "../EachProductCard/ProductCard";

export const AllProductCategory = ({data,onRangeChange,products,totalProducts}) => {

    return (
        <>
        <Filters title={data.category} onRangeChange={onRangeChange} totalProducts={totalProducts}/>
                <ProductLayout width="80">
                    {products.map((_,i)=> <ProductCard title="Classic Peace Lily" orignalPrice={"300"} link={"https://hips.hearstapps.com/hmg-prod/images/best-athletic-socks-1677091465.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"} discountPrice={"230"} key={i}/>
                    )}
                </ProductLayout>
        </>
    )
}
