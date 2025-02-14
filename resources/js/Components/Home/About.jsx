import React from "react";

function About() {
    return (
        <section className="about-area sub-bg pt-120">
            <div
                className="about__shape wow slideInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
            >
                <img
                    src="frontend/assets/images/shape/about-line.png"
                    alt="shape"
                />
            </div>
            <div className="container">
                <div className="row g-4">
                    <div
                        className="col-xl-6 wow fadeInRight"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="about__left-item">
                            <div className="image big-image">
                                <img
                                    src="frontend/assets/images/about/about-image1.jpg"
                                    alt="image"
                                />
                            </div>
                            <div className="image sm-image">
                                <div className="video__btn-wrp">
                                    <div className="video-btn video-pulse">
                                        <a
                                            className="video-popup"
                                            href="https://www.youtube.com/watch?v=iVqz_4M5mA0"
                                        >
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    src="frontend/assets/images/about/about-image2.png"
                                    alt="image"
                                />
                            </div>
                            <div className="circle-shape">
                                <img
                                    src="frontend/assets/images/shape/about-circle.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="section-header mb-40">
                            <h5
                                className="wow fadeInUp"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                            >
                                <img
                                    className="me-1"
                                    src="frontend/assets/images/icon/section-title.png"
                                    alt="icon"
                                />
                                ABOUT Gratech
                            </h5>
                            <h2
                                className="wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                We Strive to Offer Intelligent Business
                                Solutions
                            </h2>
                            <p
                                className="wow fadeInUp"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                Aonsectetur adipiscing elit aenean scelerisque
                                augue vitae consequat aisque eget congue velit
                                in cursus sodales the turpis euismod quis sapien
                                euismod quis sapien the condimentum nec lorem
                                nulla augue.
                            </p>
                        </div>
                        <div
                            className="row g-4 wow fadeInDown"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="col-md-6">
                                <div className="about__right-item">
                                    <div className="icon">
                                        <img
                                            src="frontend/assets/images/icon/about-icon1.png"
                                            alt="icon"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-1">Best Services</h4>
                                        <p>
                                            Scelerisque augue the consequat
                                            sodales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about__right-item">
                                    <div className="icon">
                                        <img
                                            src="frontend/assets/images/icon/about-icon2.png"
                                            alt="icon"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="mb-1">
                                            24/7 Call Support
                                        </h4>
                                        <p>
                                            Scelerisque augue the consequat
                                            sodales
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="about__info mt-50 wow fadeInDown"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <a href="about.html" className="btn-one">
                                Explore More{" "}
                                <i className="fa-regular fa-arrow-right-long"></i>
                            </a>
                            <div className="d-flex gap-2 align-items-center">
                                <img
                                    src="frontend/assets/images/about/about-info.png"
                                    alt="image"
                                />
                                <div className="info">
                                    <h5>Ronald Richards</h5>
                                    <span className="sm-font">Co, Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
