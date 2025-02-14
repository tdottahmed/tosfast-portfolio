import Banner from "../../Components/Home/Banner";
import Service from "../../Components/Home/Service";
import WOW from "wowjs";
import "animate.css";
import { useEffect } from "react";
import About from "../../Components/Home/About";
import Case from "../../Components/Home/Case";
import Offer from "../../Components/Home/Offer";
import Brans from "../../Components/Home/Brans";

function Index() {
    useEffect(() => {
        console.log("Initializing WOW.js"); // Debugging log
        new WOW.WOW({
            live: false,
        }).init();
    }, []);
    return (
        <div>
            <Banner />
            <Service />
            <About />
            <Case />
            <Offer />
            <Brans />
        </div>
    );
}

export default Index;
