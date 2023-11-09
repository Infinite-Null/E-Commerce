export function Billing({Total, discount, shipping}) {
    return (
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">Total</p>
                    <p className="text-base leading-4 text-gray-600">{"₹" + Total}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                        Discount
                    </p>
                    <p className="text-base leading-4 text-gray-600">{"-₹" + discount}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                    <p className="text-base leading-4 text-gray-600">{"₹" + shipping}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-2xl font-semibold leading-4 text-gray-800">Final</p>
                <p className="text-2xl font-[500] leading-4 text-green-500">{`₹ ${Total - discount + shipping}`}</p>
            </div>
        </div>
    )
}
