import Rating from "react-rating";
import {LiaStarSolid} from "react-icons/lia";

const Review = ({reviews}) => {
    return (
        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-5">
                    {reviews.map((e, i) => <Rev key={i} discription={e.comment} name={e.name} rating={e.rating}/>)}
                </div>
            </div>
        </div>
    );
};

export default Review;


function Rev({discription, rating, name}) {
    return <div className="mb-14">
        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
            <div className="flex flex-col-reverse justify-start items-start space-y-2">
                <Rating
                    initialRating={rating}
                    quiet={true}
                    readonly={true}
                    fullSymbol={<LiaStarSolid style={{
                        color: "black",
                        fontSize: "20px"
                    }}/>}
                    emptySymbol={<LiaStarSolid style={{
                        color: "gray",
                        fontSize: "20px"
                    }}/>}
                />
                <p className="text-base font-medium leading-none text-gray-800">{name}</p>
            </div>
        </div>
        <div className={"md:block"}>
            <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{discription}</p>
        </div>
    </div>
}
