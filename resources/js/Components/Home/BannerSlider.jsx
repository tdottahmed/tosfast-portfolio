import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules
import "swiper/swiper-bundle.css"; // Import Swiper styles

const BannerSlider = () => {
    // Define the slides data
    const slides = [
        {
            background: "frontend/assets/images/banner/banner-image.jpg",
            shapes: [
                {
                    src: "frontend/assets/images/banner/banner-regular-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left2",
                },
                {
                    src: "frontend/assets/images/banner/banner-solid-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__shape-left1",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-left.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left3 wow slideInLeft",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right-line.png",
                    animation: "slideInRight",
                    duration: "3s",
                    delay: ".3s",
                    className: "banner__shape-right2",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-right1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line1.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__right-line1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line2.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".7s",
                    className: "banner__right-line2",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line3.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".5s",
                    className: "banner__right-line3",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line4.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__right-line4",
                },
            ],
            content: {
                title: "Best it SOLUTION Provider",
                heading: "Excellent It Services for Your Success",
                description:
                    "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
                link: "about.html",
            },
        },
        {
            background: "frontend/assets/images/banner/banner-image2.jpg",
            shapes: [
                {
                    src: "frontend/assets/images/banner/banner-regular-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left2",
                },
                {
                    src: "frontend/assets/images/banner/banner-solid-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__shape-left1",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-left.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left3 wow slideInLeft",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right-line.png",
                    animation: "slideInRight",
                    duration: "3s",
                    delay: ".3s",
                    className: "banner__shape-right2",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-right1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line1.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__right-line1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line2.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".7s",
                    className: "banner__right-line2",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line3.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".5s",
                    className: "banner__right-line3",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line4.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__right-line4",
                },
            ],
            content: {
                title: "Best it SOLUTION Provider",
                heading: "Excellent It Services for Your Success",
                description:
                    "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
                link: "about.html",
            },
        },
        {
            background: "frontend/assets/images/banner/banner-image3.jpg",
            shapes: [
                {
                    src: "frontend/assets/images/banner/banner-regular-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left2",
                },
                {
                    src: "frontend/assets/images/banner/banner-solid-left-shape.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__shape-left1",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-left.png",
                    animation: "slideInLeft",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-left3 wow slideInLeft",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right-line.png",
                    animation: "slideInRight",
                    duration: "3s",
                    delay: ".3s",
                    className: "banner__shape-right2",
                },
                {
                    src: "frontend/assets/images/banner/banner-shape-right.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__shape-right1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line1.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".9s",
                    className: "banner__right-line1",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line2.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".7s",
                    className: "banner__right-line2",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line3.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".5s",
                    className: "banner__right-line3",
                },
                {
                    src: "frontend/assets/images/banner/banner-right-line4.png",
                    animation: "slideInRight",
                    duration: "2s",
                    delay: ".3s",
                    className: "banner__right-line4",
                },
            ],
            content: {
                title: "Best it SOLUTION Provider",
                heading: "Excellent It Services for Your Success",
                description:
                    "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
                link: "about.html",
            },
        },
    ];

    return (
        <div className="swiper banner__slider">
            <Swiper
                modules={[Autoplay, Pagination]} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                pagination={{
                    clickable: true, 
                }}
                loop={true} 
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide.shapes.map((shape, i) => (
                            <div
                                key={i}
                                data-animation={shape.animation}
                                data-duration={shape.duration}
                                data-delay={shape.delay}
                                className={shape.className}
                            >
                                <img src={shape.src} alt="shape" />
                            </div>
                        ))}

                        {/* Background image */}
                        <div
                            className="slide-bg"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                            }}
                        ></div>

                        {/* Content */}
                        <div className="container">
                            <div className="banner__content">
                                <h4
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".3s"
                                    className="text-white mb-20"
                                >
                                    <svg
                                        className="me-1"
                                        width="40"
                                        height="16"
                                        viewBox="0 0 40 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.500183"
                                            width="25.6667"
                                            height="15"
                                            rx="7.5"
                                            stroke="white"
                                        />
                                        <rect
                                            x="13.3334"
                                            y="0.000183105"
                                            width="26.6667"
                                            height="16"
                                            rx="8"
                                            fill="white"
                                        />
                                    </svg>
                                    {slide.content.title}
                                </h4>
                                <h1
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".5s"
                                    className="text-white"
                                >
                                    {slide.content.heading}
                                </h1>
                                <p
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".7s"
                                    className="mt-20"
                                >
                                    {slide.content.description}
                                </p>
                                <a
                                    data-animation="slideInRight"
                                    data-duration="2s"
                                    data-delay=".9s"
                                    href={slide.content.link}
                                    className="btn-one mt-60"
                                >
                                    Explore More{" "}
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
