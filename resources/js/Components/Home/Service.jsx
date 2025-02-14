function Service() {
    return (
        <div>
            <section className="service-area pt-120 pb-120">
                <div className="service__shape wow slideInRight">
                    <img
                        className="sway_Y__animation"
                        src="frontend/assets/images/shape/service-bg-shape.png"
                        alt="shape"
                    />
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                        <div className="section-header">
                            <h5
                                className="wow fadeInLeft"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                            >
                                <img
                                    className="me-1"
                                    src="frontend/assets/images/icon/section-title.png"
                                    alt="icon"
                                />
                                What We OFFER
                            </h5>
                            <h2
                                className="wow fadeInLeft"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                Excellent It Services
                            </h2>
                        </div>
                        <a
                            href="service.html"
                            className="btn-one wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            View All Services{" "}
                            <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-lg-4 col-md-6 wow bounceInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="service__item">
                                <div className="service-shape">
                                    <img
                                        src="frontend/assets/images/shape/service-item-shape.png"
                                        alt="shape"
                                    />
                                </div>
                                <div className="service__icon">
                                    <img
                                        src="frontend/assets/images/icon/service-icon1.png"
                                        alt="icon"
                                    />
                                </div>
                                <h4>
                                    <a href="service-details.html">
                                        IT Management
                                    </a>
                                </h4>
                                <p>
                                    Pellentesque nec the condimentum nec lorem
                                    nulla augue est ultricies ac iaculis ut
                                    euismod quis sapien.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow bounceInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="service__item active">
                                <div className="service-shape">
                                    <img
                                        src="frontend/assets/images/shape/service-item-shape.png"
                                        alt="shape"
                                    />
                                </div>
                                <div className="service__icon">
                                    <img
                                        src="frontend/assets/images/icon/service-icon2.png"
                                        alt="icon"
                                    />
                                </div>
                                <h4>
                                    <a href="service-details.html">
                                        Cyber Security
                                    </a>
                                </h4>
                                <p>
                                    Pellentesque nec the condimentum nec lorem
                                    nulla augue est ultricies ac iaculis ut
                                    euismod quis sapien.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow bounceInUp"
                            data-wow-delay="400ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="service__item">
                                <div className="service-shape">
                                    <img
                                        src="frontend/assets/images/shape/service-item-shape.png"
                                        alt="shape"
                                    />
                                </div>
                                <div className="service__icon">
                                    <img
                                        src="forntend/assets/images/icon/service-icon3.png"
                                        alt="icon"
                                    />
                                </div>
                                <h4>
                                    <a href="service-details.html">
                                        Web Development
                                    </a>
                                </h4>
                                <p>
                                    Pellentesque nec the condimentum nec lorem
                                    nulla augue est ultricies ac iaculis ut
                                    euismod quis sapien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;
