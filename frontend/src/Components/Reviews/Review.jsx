import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import {EffectCoverflow, Pagination} from 'swiper/modules';

export function Review() {
    const Reviews = [
        {
            name: "Ankit Kumar Shah",
            review: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            heading: 'Very Easy Order',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"

        },
        {
            name: "Ankit Kumar Shah",
            review: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            heading: 'Very Easy Order',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"

        },
        {
            name: "Ankit Kumar Shah",
            review: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            heading: 'Very Easy Order',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"

        },
        {
            name: "Ankit Kumar Shah",
            review: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            heading: 'Very Easy Order',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"

        }
    ]
    return (
        <>
            {Reviews ? <Swiper
                style={{
                    width:"90%",
                    paddingTop: "50px",
                    height:"400px",
                }}
                effect={'coverflow'}
                grabCursor={true}
                pagination={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                className="mySwiper"
                modules={[Pagination]}
            >
                {Reviews.map((e,i)=><SwiperSlide style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "80%",
                    height: "300px",
                    borderRadius: "10px",
                    marginRight:"30px"
                }}>
                    <div style={{
                        height: "100%",
                        borderRadius: "10px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginRight:"30px",
                        boxShadow:"0px 0px 40px rgba(47,72,100,0.2)",
                        marginTop:20
                    }}>
                        <h1 style={{
                            fontSize: 25,
                            fontWeight: "600"
                        }}>{e.heading}</h1>
                        <h2 style={{
                            fontSize: 15,
                            fontWeight: "200",
                            padding: 20
                        }}>{e.review}</h2>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img className="rounded-full" style={{
                                height: 24,
                                width: 24,
                                marginRight: 5
                            }} src={e.image}
                                 alt="profile picture"/>
                            <h1 style={{
                                fontSize: 15,
                                fontWeight: "300"
                            }}>{` ${e.name}`}</h1>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper> : <></>}
        </>
    );
}
