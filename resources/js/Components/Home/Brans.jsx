import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
import "swiper/swiper-bundle.css"; // Import Swiper styles

function Brans() {
    return (
        <div>
            <div className="brand-area">
                <div className="container">
                    <div className="brand__wrp">
                        <div className="brand__shape">
                            <img
                                src="frontend/assets/images/shape/brand-shape.png"
                                alt="brand shape"
                            />
                        </div>
                        <Swiper
                            className="brand__slider"
                            spaceBetween={30} // Space between slides
                            slidesPerView={5} // Number of slides per view
                            loop={true} // Enable infinite loop
                            autoplay={{
                                delay: 3000, // Autoplay delay in milliseconds
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            modules={[Autoplay]} // Add Autoplay module
                            breakpoints={{
                                // Responsive breakpoints
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand__image image">
                                    <img
                                        src="frontend/assets/images/brand/brand-image1.png"
                                        alt="brand 1"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand__image image">
                                    <img
                                        src="frontend/assets/images/brand/brand-image2.png"
                                        alt="brand 2"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand__image image">
                                    <img
                                        src="frontend/assets/images/brand/brand-image3.png"
                                        alt="brand 3"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand__image image">
                                    <img
                                        src="frontend/assets/images/brand/brand-image4.png"
                                        alt="brand 4"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand__image image">
                                    <img
                                        src="frontend/assets/images/brand/brand-image5.png"
                                        alt="brand 5"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brans;
