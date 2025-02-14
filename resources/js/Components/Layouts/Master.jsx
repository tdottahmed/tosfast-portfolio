import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import React, { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

function Master({ children }) {
    useEffect(() => {
        new WOW.WOW({
            live: false, 
        }).init();
    }, []);
    return (
        <>
            <HeaderTop />
            <Header />
            <Search />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Master;
