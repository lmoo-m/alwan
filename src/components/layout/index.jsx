import React, { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import headTitle from "../../utils/title";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        headTitle(pathname.split("/")[1]);
        Aos.init();
    }, []);

    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
