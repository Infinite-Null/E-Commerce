import {Billing} from "./Billing";
import {EachOrderItem} from "./EachOrderItem";
import Heading from "../Heading/Heading";
import './CartPage.css'

export function CartPage() {
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <Heading title="Your Cart" marginTop="0px"/>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="h-[450px] flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full overflow-y-scroll scroll">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Scroll to view items</p>
                            <EachOrderItem/>
                            <EachOrderItem/>
                            <EachOrderItem/>
                            <EachOrderItem/>
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                       <Billing/>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Order Now</h3>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}