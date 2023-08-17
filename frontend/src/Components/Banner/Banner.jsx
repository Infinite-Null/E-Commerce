import {Link} from "@nextui-org/react";
import "./Banner.css"
const Banner = () => {
    return (
        <>
            <div className="header">
                <div className="sides">
                    <div className="logo"></div>
                </div>
                <div className="info">
                    <h6 className="heading">Welcome To Store of</h6>
                    <h1 className="SubHeading">Elegance weaved in every stitch, tailored to embrace your unique style.</h1>
                    <div className="meta">
                        <Link  href="/" target="_b" className="author"></Link><br/>
                        <h1 style={{fontSize:"1rem"}}>Scroll Down</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  Banner