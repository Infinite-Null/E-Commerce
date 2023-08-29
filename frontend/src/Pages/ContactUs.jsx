import AboutUs from "../Components/ContactUs/ContactUsComponent";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";
import {PiWhatsappLogoFill} from "react-icons/pi";

export function ContactUs() {
    const About=[
        {
            title:"About Us",
            discription:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from",
            image:"https://aelaschool.com/wp-content/uploads/2022/09/_capa_54df006e70d0f0409bb4a4bf407a4869_2000-1024x557.png",
        },
        {
            title:"Our Story",
            discription:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from",
            image:"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2020/10/Write-a-Story.jpg",
        },
    ]
    const Social=[
        {
            icon:<AiFillFacebook style={{fontSize:"110px"}}/>,
            title:"Facebook",
            discription:"Pages are places on Facebook where artists, public figures, businesses, brands, organizations and nonprofits can connect with their fans or customers.",
            Link:"https://google.com"
        },
        {
            icon:<AiFillInstagram style={{fontSize:"110px"}}/>,
            title:"Instagram",
            Link:"https://google.com",
            discription:"Pages are places on Facebook where artists, public figures, businesses, brands, organizations and nonprofits can connect with their fans or customers."
        },
        {
            icon:<PiWhatsappLogoFill style={{fontSize:"110px"}}/>,
            title:"Whatsapp",
            Link:"https://google.com",
            discription:"Pages are places on Facebook where artists, public figures, businesses, brands, organizations and nonprofits can connect with their fans or customers."
        },
        {
            icon:<AiFillTwitterCircle style={{fontSize:"110px"}}/>,
            title:"Twitter",
            Link:"https://google.com",
            discription:"Pages are places on Facebook where artists, public figures, businesses, brands, organizations and nonprofits can connect with their fans or customers."
        },
    ]
    return (
        <><AboutUs About={About} Social={Social}/></>
    )
}