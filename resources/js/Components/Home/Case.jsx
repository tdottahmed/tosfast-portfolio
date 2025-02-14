import React from "react";

function Case() {
    return (
        <section className="case-area pt-120 pb-120">
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
                                src="/frontend/assets/images/icon/section-title.png"
                                alt="icon"
                            />
                            FROM OUR CASE studies
                        </h5>
                        <h2
                            className="wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            We Delivered Best Solution
                        </h2>
                    </div>
                    <a
                        href="case.html"
                        className="btn-one wow fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    >
                        view All Case{" "}
                        <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
            {/* Rest of your component */}
        </section>
    );
}

export default Case;
