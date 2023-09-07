import {ReviewsComponent} from "../../../Components/AdminComponents/ReviewsComponent/ReviewsComponent";
import {Tost} from "../../../Components/Tost";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";

export function ReviewsPage() {
    const List=[
        {
            ReviewId:"123",
            User:"Ankit Kumar",
            Comment:"Great Product",
            Rating:5
        },
        {
            ReviewId:"1235",
            User:"Esha Mishra",
            Comment:"Nice Product",
            Rating:3
        }
    ]
    function OnYesPress(ProductId){
            Tost("Successfully Deleted")
    }
    function OnSearchPress(valueInput){

    }
    return (
        <>
            <SideBar/>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className={"text-5xl underline"}>Reviews</h1>
                <ReviewsComponent OnYesPress={OnYesPress} OnSearchPress={OnSearchPress} List={List}/>
            </div>
        </>
    )
}