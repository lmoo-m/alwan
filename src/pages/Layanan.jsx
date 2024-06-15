import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Layanan = () => {
    return (
        <Layout>
            <Navigation page={"Layanan"}>
                <div className="flex flex-col items-center my-4 gap-3">
                    <h1 className="text-4xl font-semibold" data-aos="fade-up">
                        Layanan Kami
                    </h1>

                    <div
                        data-aos="fade-up-right"
                        className="card card-side  flex-col md:flex-row  bg-base-100 shadow-xl w-[70%] mt-10"
                    >
                        <figure>
                            <img src={logo} alt="logo" className="w-[20rem]" />
                        </figure>
                        <div className="card-body">
                            <ul className="menu w-full text-lg rounded-box">
                                <li>
                                    <h2 className="menu-title">Wifi Area</h2>
                                    <ul>
                                        <li>
                                            <div className="flex">
                                                <p>1 Hari</p>
                                                <p className="text-end">
                                                    Rp. 3.000
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex">
                                                <p>1 Minggu</p>
                                                <p className="text-end">
                                                    Rp. 15.000
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex">
                                                <p>1 Bulan</p>
                                                <p className="text-end">
                                                    Rp. 50.000
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="card-actions justify-end">
                                <Link
                                    to={"/kontak"}
                                    className="btn btn-primary"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div
                        data-aos="fade-up-right"
                        className="card card-side  flex-col md:flex-row  bg-base-100 shadow-xl w-[70%] mt-10"
                    >
                        <figure>
                            <img src={logo} alt="logo" className="w-[20rem]" />
                        </figure>
                        <div className="card-body">
                            <ul className="menu w-full text-lg rounded-box">
                                <li>
                                    <h2 className="menu-title">
                                        Setting Mikrotik
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className="flex">
                                                <p>Management Bandwidth</p>
                                            </div>
                                            <div className="flex">
                                                <p>Pisah Traffic Gaming</p>
                                            </div>
                                            <div className="flex">
                                                <p>Load Balance</p>
                                            </div>
                                            <div className="flex">
                                                <p>Wifi Voucheran</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="card-actions justify-end">
                                <Link
                                    to={"/kontak"}
                                    className="btn btn-primary"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Navigation>
        </Layout>
    );
};

export default Layanan;
