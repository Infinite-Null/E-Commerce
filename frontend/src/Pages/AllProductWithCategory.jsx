import {AllProductCategory} from "../Components/AllProductsWithCategory/AllProductCategory";
import {useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import ApiInfo from "../ApiInfo/ApiInfo";
import axios from "axios";
import Filters from "../Components/AllProductsWithCategory/Filters";
import Context from "../Context/Context";
import {ProductLayout} from "../Components/EachProductCard/ProductCard";
import LodingSkeletion from "../Components/LodingSkeletion/LodingSkeletion";
import {Pagination} from "@nextui-org/react";

export function AllProductWithCategory() {
    const {searchValue, setSearchValue} = useContext(Context)
    const [page, setPage] = useState(1)
    const [minMaxx, setminMAxx] = useState([[0, 100000]])
    let {state} = useLocation();
    if (state === null) {
        state = {
            category: "All Products"
        }
        setSearchValue("")
    } else {
        setSearchValue(state.category.toLowerCase())
    }
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function FetchData(min, max, pageNo) {
        let url = state.category.toLowerCase()
        if (url === "all products") {
            url = ""
        }
        const result = await axios.get(ApiInfo + "/products?price[gte]=" + min + "&page=" + pageNo.toString() + "&price[lte]=" + max + "&category=" + url.split(" ").join(""))
        setData(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        setLoading(true)
        FetchData(0, 1000000, page).then(() => {
            setLoading(false)
        })
        return () => {

        }
    }, [searchValue])

    function onRangeChange(range) {

    }

    function onApplyPress(minMax) {
        setminMAxx(minMax)
    }

    useEffect(() => {
        setLoading(true)
        FetchData(minMaxx[0][0], minMaxx[0][1], page).then(() => {
            setLoading(false)
        })
    }, [minMaxx, page])
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (<>
            <Filters title={state.category} onRangeChange={onRangeChange}
                     totalProducts={loading === false ? data.TotalReaturened : 0}
                     onApplyPress={onApplyPress}/>
            {(loading === false) ? <>
                <AllProductCategory data={state} products={data.Products ?? []} key={Math.random()}/>
            </> : <ProductLayout>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) =>
                    <LodingSkeletion key={e}/>
                )}
            </ProductLayout>}
            {!loading && <div
                className={"flex justify-center items-center mb-5 mt-14"}>{(Math.ceil(data.TotalReaturened / data.ResultPerPage) > 1) &&
                <Pagination showControls
                            total={Math.ceil(data.TotalReaturened / data.ResultPerPage)}
                            initialPage={page}
                            size={"lg"}
                            onChange={(no) => {
                                setPage(no)
                            }}/>}</div>}
        </>
    )
}
