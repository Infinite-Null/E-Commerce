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
            subheading: "Best store around to buy premium and great shoes",
            image: "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            heading: "Stylish",
            subheading: "Best store around to buy premium and great shoes",
            image: "https://images.unsplash.com/photo-1527423139213-e6840ae583bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            heading: "Elegant",
            subheading: "Best store around to buy premium and great shoes",
            image: "https://images.unsplash.com/photo-1511360154485-8bac04fbdf25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
