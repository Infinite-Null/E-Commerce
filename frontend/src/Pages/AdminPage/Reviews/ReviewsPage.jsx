import {ReviewsComponent} from "../../../Components/AdminComponents/ReviewsComponent/ReviewsComponent";
import {Tost} from "../../../Components/Tost";
import SideBar from "../../../Components/AdminComponents/SideBar/SideBar";
import axios from "axios";
import ApiInfo from "../../../ApiInfo/ApiInfo";
import {useState} from "react";
import {Spinner} from "@nextui-org/react";

export function ReviewsPage() {
    const [productId, setProductId] = useState("")
    const [List, setList] = useState([])
    const [Loading, setLoading] = useState(false)

    async function OnSearchPress(valueInput) {
        setProductId(valueInput)
        setLoading(true)
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            const response = await axios.get(ApiInfo + "/reviews/?id=" + valueInput, config)
            const Listt = []
            response.data.reviews.reviews.forEach((e) => {
                const EachData = {
                    ReviewId: e._id,
                    User: e.name,
                    Comment: e.comment,
                    Rating: e.rating
                }
                Listt.push(EachData)
            })
            setList(Listt)
        } catch (e) {
            Tost("Wrong Product Id")
        }
        setLoading(false)
    }

    async function OnYesPress(ReviewId) {
        const config = {headers: {"Content-Type": "multipart/form-data"}, withCredentials: true}
        try {
            await axios.delete(ApiInfo + `/reviews/?id=${ReviewId}&productId=${productId}`, config)
            await OnSearchPress(productId)
            Tost("Successfully Deleted")
        } catch (e) {
            Tost("Wrong Product Id")
        }
    }

    return (
        <>
            <SideBar/>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className={"text-5xl underline"}>Reviews</h1>
                {!Loading && <ReviewsComponent OnYesPress={OnYesPress} OnSearchPress={OnSearchPress} List={List}/>}
                {Loading && <div style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Spinner/>
                </div>}
            </div>
        </>
    )
}
