import React from "react";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    return (
        <div
            id="targetElement"
            className={`sidebar-area ${
                isSidebarOpen ? "sidebar__show" : "sidebar__hide"
            }`}
        >
            <div className="sidebar__overlay" onClick={toggleSidebar}></div>
            <a href="index.html" className="logo mb-40">
                <img src="frontend/assets/images/logo/logo.svg" alt="logo" />
            </a>
            <div className="sidebar__search mb-30">
                <input type="text" placeholder="Search..." />
                <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <div className="mobile-menu overflow-hidden"></div>
            <ul className="info pt-40">
                <li>
                    <i className="fa-solid primary-color fa-location-dot"></i>{" "}
                    <a href="#0">example@example.com</a>
                </li>
                <li className="py-2">
                    <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
                    <a href="tel:+208-6666-0112">+208-6666-0112</a>
                </li>
                <li>
                    <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
                    <a href="#0">info@example.com</a>
                </li>
            </ul>
            <div className="social-icon mt-20">
                <a href="#0">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#0">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#0">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#0">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
            <button
                id="closeButton"
                className="text-white"
                onClick={toggleSidebar}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}

export default Sidebar;
