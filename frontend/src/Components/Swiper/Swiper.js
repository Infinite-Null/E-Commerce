import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import {Autoplay, Pagination, Navigation, EffectCoverflow} from 'swiper/modules';

export function SwiperComponent() {
    const SliderData = [
        {
            heading: "Premium",
            subheading: "Best store around to buy premium and great clothes",
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            heading: "Stylish",
            subheading: "Your ultimate destination for stylish and trendsetting clothes!",
            image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            heading: "Elegant",
            subheading: "Discover premium fashion that defines elegance.",
            image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            {SliderData ? <Swiper
                effect={"coverflow"}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {SliderData.map((e, i) => <SwiperSlide>
                    <div style={{
                        background: `url(\"${e.image}\")`,
                        height: "100%",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.39)",
                            flexDirection: "column"
                        }}>
                            <h1 className={"sliderHeading"}>{e.heading}</h1>
                            <h2 className={"slidersubHeading"}>{e.subheading}</h2>
                        </div>
                    </div>
                </SwiperSlide>)}
                {/*{SliderData.map(((e,i)=><EachSlider image={e.image} heading={e.heading} subheading={e.subheading} key={i}/>))}*/}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper> : <h1></h1>}
        </>
    );
}
