import ProductCard, {ProductLayout} from "../EachProductCard/ProductCard";

export const AllProductCategory = ({data, onRangeChange, products, totalProducts, onApplyPress}) => {

    return (
        <>

            <ProductLayout>
                {products.map((e, i) => <ProductCard title={e.name} id={e._id} orignalPrice={parseInt(e.price)}
                                                     link={e.images[0].url} discountPrice={e.price} key={i} discount={e.discount}/>
                )}
            </ProductLayout>
        </>
    )
}
