import "./Heading.css"
import {Button} from "@nextui-org/react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export default function Heading({title,marginTop,show,value,center}) {
    const navigate = useNavigate()
    console.log(show)
    return (
        <div>
            {center===undefined && <div className="EachHeading" style={{
                marginTop:(marginTop===undefined)?"70px":marginTop,
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }}> {title}
                {show!==undefined && <Button
                    className="text-gray-800"
                    style={{
                        width: "150px",
                        height: "50px",
                        fontWeight: "900",
                        fontSize: "20px",
                        textDecoration:"none"
                    }} variant="flat" endContent={<AiOutlineArrowRight style={{
                    fontSize: "20px"
                }}/>} onPress={() => {
                    navigate("/Trending", value)
                }}>View All</Button>}
            </div>}
            {center!==undefined &&
                <div className="EachHeading" style={{
                    marginTop:(marginTop===undefined)?"70px":marginTop,
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center"
                }}> {title}
                </div>
            }
        </div>
    )
}
