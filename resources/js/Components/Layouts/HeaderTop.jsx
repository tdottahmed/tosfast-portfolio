function HeaderTop() {
    return (
        <div className="header-top d-none d-lg-block">
            <div className="container header__container">
                <div className="header-top-wrp">
                    <ul className="info">
                        <li>
                            <a href="#0" className="ms-1">
                                info@example.com
                            </a>
                        </li>
                    </ul>
                    <ul className="link-info">
                        <li>
                            <a href="#0">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
