import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAVIGATION = [
    {
        title: "Home",
        path: "/",
    },
    // {
    //     title: "Tentang",
    //     path: "/tentang",
    // },
    {
        title: "Layanan Kami",
        path: "/layanan",
    },
    {
        title: "Kontak",
        path: "/kontak",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const { pathname } = useLocation();

    const handleScroll = () => {
        const getScroll = window.scrollY;
        setIsScroll(getScroll == 0 ? false : true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex justify-around transition  ${
                isScroll || pathname !== "/" || isOpen
                    ? "bg-white shadow-md text-black"
                    : "text-white"
            }  py-4 items-center fixed w-full top-0`}
            style={{ zIndex: 99999 }}
        >
            <h1 className="text-xl font-bold">Alwan.net</h1>

            {/* small device */}
            <div className="block md:hidden">
                {/* hamburger menu */}
                <div
                    className="h-[1.4rem] w-[2rem] flex flex-col justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`h-1 w-full bg-yellow-400 transition origin-left ${
                            isOpen && "rotate-[37deg]"
                        }`}
                    ></div>
                    <div
                        className={`h-1 w-full bg-yellow-400 transition  ${
                            isOpen && "scale-0"
                        }`}
                    ></div>
                    <div
                        className={`h-1 w-full bg-yellow-400 transition origin-left ${
                            isOpen && "-rotate-[37deg]"
                        }`}
                    ></div>
                </div>
                {/* end hamburger menu */}

                {/* menu */}
                <div
                    className={`fixed left-0 top-14 ${
                        isScroll || isOpen ? "bg-white" : ""
                    } w-full flex flex-col gap-4 px-2 shadow-md overflow-hidden transition ${
                        isOpen ? "h-[11rem]" : "h-0"
                    }`}
                    style={{
                        transition: ".75s ease",
                    }}
                >
                    {NAVIGATION.map((nav, i) => {
                        return (
                            <Link
                                to={nav.path}
                                key={i}
                                className={`border-b-[1px] ${
                                    pathname === nav.path &&
                                    "text-yellow-400 border-b-yellow-400"
                                } border-b-black/75 py-2 transition font-semibold hover:text-yellow-400 hover:border-b-yellow-400`}
                            >
                                {nav.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
            {/* end small device */}

            {/* large device */}
            <div className="hidden md:flex gap-5">
                {NAVIGATION.map((nav, i) => (
                    <Link
                        key={i}
                        to={nav.path}
                        className={`font-semibold hover:text-yellow-400 ${
                            pathname === nav.path && "text-yellow-400"
                        }`}
                    >
                        {nav.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
