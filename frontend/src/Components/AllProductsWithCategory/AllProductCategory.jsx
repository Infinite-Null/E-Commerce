import Filters from "./Filters";
import ProductCard, {ProductLayout} from "../EachProductCard/ProductCard";

export const AllProductCategory = ({data,onRangeChange,products,totalProducts,onApplyPress}) => {

    return (
        <>

                <ProductLayout width="80">
                    {products.map((e,i)=> <ProductCard title={e.name} id={e._id} orignalPrice={parseInt(e.price)+100} link={e.images[0].url} discountPrice={e.price} key={i}/>
                    )}
                </ProductLayout>
        </>
    )
}
