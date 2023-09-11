import Filters from "./Filters";
import ProductCard, {ProductLayout} from "../EachProductCard/ProductCard";

export const AllProductCategory = ({data,onRangeChange,products,totalProducts}) => {

    return (
        <>
        <Filters title={data.category} onRangeChange={onRangeChange} totalProducts={totalProducts}/>
                <ProductLayout width="80">
                    {products.map((e,i)=> <ProductCard title={e.name} id={e._id} orignalPrice={e.price} link={e.images[0].url} discountPrice={parseInt(e.price)-100} key={i}/>
                    )}
                </ProductLayout>
        </>
    )
}
