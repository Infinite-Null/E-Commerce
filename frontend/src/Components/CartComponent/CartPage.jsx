import {Billing} from "./Billing";
import {EachOrderItem} from "./EachOrderItem";
import Heading from "../Heading/Heading";
import './CartPage.css'
import {useContext,} from "react";
import Context from "../../Context/Context";

export function CartPage({change}) {
    const {Cart, SetCart} = useContext(Context)

    function CalculateTotal() {
        let sum = 0
        Cart.forEach((e) => {
            sum += (e.quality * e.price)
        })
        return sum
    }

    function OnDeletePress(id, index) {
        const Dummy = [...Cart]
        Dummy.splice(index, 1)
        SetCart(Dummy)
    }

    function addPress(id, index) {
        const Dummy = [...Cart]
        const quantity = Dummy[index].quality
        Dummy[index].quality = quantity + 1
        SetCart(Dummy)
    }

    function minusPress(id, index) {
        const Dummy = [...Cart]
        const quantity = Dummy[index].quality
        Dummy[index].quality = quantity - 1
        SetCart(Dummy)
    }

    function CalculateDiscount() {
        let discount = 0
        Cart.forEach((e) => {
            const discountedPrice = e.quality * parseInt(((e.price * e.discount) / 100))
            discount += discountedPrice
        })
        return discount
    }

    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <Heading title="Your Cart" marginTop="0px"/>
            <div
                className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    {Cart.length !== 0 && <div
                        className="h-[450px] flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full overflow-y-scroll scroll">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Scroll to
                            view items</p>
                        {Cart.map((e, i) => <EachOrderItem price={e.price - parseInt((e.price * e.discount) / 100)}
                                                           name={e.name} id={e.id} index={i}
                                                           quantity={e.quality} image={e.image}
                                                           OnDeletePress={OnDeletePress} maximumQuantity={e.maxQuantity}
                                                           minusPress={minusPress} addPress={addPress} key={i} discount={e.discount} orignalPrice={e.price}/>)}
                    </div>}
                    {Cart.length === 0 &&
                        <h1 className={"flex justify-center items-center w-full"}>No item added to cart</h1>}
                    {Cart.length !== 0 && <div
                        className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <Billing Total={CalculateTotal()} discount={CalculateDiscount()} shipping={0}/>
                        <div
                            className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6"
                            onClick={() => {
                                change(1)
                            }}>
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Order Now</h3>
                            <div className="w-full flex justify-center items-center">
                                <button
                                    className="rounded-[10px] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Place
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}
