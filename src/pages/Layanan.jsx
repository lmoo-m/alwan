import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

const Layanan = () => {
    return (
        <Layout>
            <Navigation page={"Layanan"}>
                <div className="flex flex-col items-center my-4 gap-3">
                    <h1 className="text-4xl font-semibold">Layanan Kami</h1>
                    <div className="card card-side  flex-col md:flex-row  bg-base-100 shadow-xl w-[70%] mt-10">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                                alt="Movie"
                            />
                        </figure>
                        <div className="card-body">
                            <ul className="menu  w-full text-lg rounded-box">
                                <li>
                                    <h2 className="menu-title">Wifi Area</h2>
                                    <ul>
                                        <li>
                                            <div className="flex">
                                                <p>12 Jam</p>
                                                <p className="text-end">
                                                    Rp. 2.000
                                                </p>
                                            </div>
                                        </li>
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
                                <button className="btn btn-primary">
                                    Hubungi Kami
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side flex-col md:flex-row bg-base-100 shadow-xl w-[70%] ">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                                alt="Movie"
                            />
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
                                <button className="btn btn-primary">
                                    Hubungi Kami
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Navigation>
        </Layout>
    );
};

export default Layanan;
