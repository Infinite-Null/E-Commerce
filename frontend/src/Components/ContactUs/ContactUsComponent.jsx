import React from "react";
import Image from "../../Images/myImage.jpg"
import {Button} from "@nextui-org/react";
import {PiPlugsConnectedDuotone} from "react-icons/pi";

const AboutUs = ({About,Social}) => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            {/* eslint-disable-next-line array-callback-return */}
            {About.map((e,i)=>{
                if(i%2===0){
                    if(i===0){
                        return <EachAboutRight title={e.title} discription={e.discription} image={e.image} key={i} margin={""}/>
                    }
                    return <EachAboutRight title={e.title} discription={e.discription} image={e.image} key={i} margin={"mt-40"}/>
                }
                else{
                    return <EachAboutLeft title={e.title} discription={e.discription} image={e.image} key={i}/>
                }
            })}
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 mt-40">Connect With Us</h1>
            <SocialMedia Social={Social}/>
            {/*<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 mt-40 mb-14">Connect With Developer</h1>*/}
            {/*<AboutDeveloper/>*/}
        </div>
    );
};

export default AboutUs;
function EachAboutRight({title,discription,image,margin}) {
    return  <div className={"flex flex-col lg:flex-row justify-between gap-8 " + margin}>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{title}</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">{discription}</p>
        </div>
        <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src={image} alt="A group of People" />
        </div>
    </div>
}
function EachAboutLeft({title,discription,image}) {
    return  <div className="flex flex-col lg:flex-row justify-between gap-8 mt-40">
        <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src={image} alt="A group of People" />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{title}</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">{discription}</p>
        </div>
    </div>
}
function SocialMedia({Social}){
    const style={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"2px solid black",
        borderRadius:"20px",
        textAlign:"center",
        padding:"20px"
    }
    return (
        <div className="2xl:container 2xl:mx-auto" style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            maxWidth:"99vw",
            overflow:"hidden"
        }}>
            <div className=" bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
                {/* Delivery grid Card */}
                {Social.map((e,i)=>
                   <a href={e.Link} target={"_blank"} rel="noreferrer">
                       <div style={style} className="hover:shadow-[0px_0px_30px_5px_#cbd5e0]" key={i}>
                           {e.icon}
                           <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">{e.title}</h3>
                           <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">{e.discription}</p>
                       </div>
                   </a>)}
            </div>
        </div>
    );
}

function AboutDeveloper(){
    const style={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"2px solid black",
        borderRadius:"20px",
        textAlign:"center",
        padding:"20px"
    }
    return <div className={"flex flex-col lg:flex-row justify-between gap-8 "}>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{"About Developer"}</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from"}</p>
        </div>
        <div style={style} className="hover:shadow-[0px_0px_30px_5px_#cbd5e0]">
            <img src={Image} height="200" width="350" style={{
                borderRadius:"10px"
            }} alt="Developer"/>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Ankit Kumar Shah</h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/ankit-kum-shah/" target="_blank" rel="noreferrer" >
                <Button
                    className="bg-gray-800 hover:bg-gray-950 mt-5"
                    style={{
                        borderRadius:"0",
                        width:"300px",
                        height:"60px",color:"white"
                    }}  variant="flat" startContent={<PiPlugsConnectedDuotone style={{color:"white",fontSize:"20px"}}/>}>Connect</Button>
            </a>
        </div>

    </div>

}

