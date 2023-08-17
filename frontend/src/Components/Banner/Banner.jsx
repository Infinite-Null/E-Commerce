import {Link} from "@nextui-org/react";
import "./Banner.css"
import {motion} from "framer-motion";

const Banner = () => {
    return (
        <>
            <div className="header">
                <div className="sides">
                    <div className="logo"></div>
                </div>
                <motion.div
                    initial={{
                        opacity:0,

                    }}
                    animate={{
                        opacity:1,

                    }}
                    transition={{
                        delay:0.2,
                        duration:1
                    }}
                    className="info">
                    <motion.h6
                        initial={{
                            opacity:0,

                        }}
                        animate={{
                            opacity:1,

                        }}
                        transition={{
                            delay:0.6,
                            duration:1
                        }}
                        className="heading">Welcome To Store of</motion.h6>
                    <motion.h1
                        initial={{
                            opacity:0,

                        }}
                        animate={{
                            opacity:1,

                        }}
                        transition={{
                            delay:1.2,
                            duration:0.5
                        }}
                        className="SubHeading">Elegance weaved in every stitch, tailored to embrace your unique style.</motion.h1>
                    <div className="meta">
                        <Link  href="/" target="_b" className="author"></Link><br/>
                        <h1 style={{fontSize:"1rem"}}>Scroll Down</h1>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default  Banner