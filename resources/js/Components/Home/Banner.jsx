import BannerSlider from "./BannerSlider";

function Banner() {
    return (
        <div>
            <section className="banner-area">
                <div className="banner__line">
                    <img
                        className="sway__animation"
                        src="frontend/assets/images/banner/banner-line.png"
                        alt="shape"
                    />
                </div>
                <div className="swiper banner__slider">
                    <div className="swiper-wrapper">
                        <BannerSlider />
                    </div>
                </div>
                <div className="banner__dot-wrp">
                    <div className="dot-light banner__dot"></div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
