import React, { useEffect } from "react";
import Layout from "../components/layout";
import heroImage from "../assets/hero.jpg";
import intro from "../assets/intro.jpg";
import man from "../assets/Man-Top.webp";
import productImage from "../assets/product.jpeg";
import { Link } from "react-router-dom";
import order from "../utils/order";

const PRODUCTS = [
    {
        title: "1 Hari",
        price: "Rp 3.000",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel et optio dolor aperiam voluptatum rem, soluta alias perferendis enim similique ullam fuga, accusamus recusandae? Modi libero magni expedita molestias quisquam ",
    },
    {
        title: "1 Minggu",
        price: "Rp 15.000",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel et optio dolor aperiam voluptatum rem, soluta alias perferendis enim similique ullam fuga, accusamus recusandae? Modi libero magni expedita molestias quisquam ",
    },
    {
        title: "1 Bulan",
        price: "Rp 50.000",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel et optio dolor aperiam voluptatum rem, soluta alias perferendis enim similique ullam fuga, accusamus recusandae? Modi libero magni expedita molestias quisquam ",
    },
];

const Home = () => {
    return (
        <Layout>
            {/* hero */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1
                            className="mb-5 text-5xl font-bold"
                            data-aos="fade-up"
                        >
                            Solusi Layanan Internet Anda
                        </h1>
                        <p className="mb-5" data-aos="fade-up">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary" data-aos="fade-up">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* intro */}
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        data-aos="fade-up"
                        src={intro}
                        className=" rounded-lg shadow-2xl w-[35rem] object-cover"
                    />
                    <div>
                        <p className="py-6" data-aos="fade-up">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cumque pariatur voluptate, ea, consequuntur
                            temporibus incidunt quae aut quasi nisi velit fuga
                            sed accusamus et sint quo aliquid blanditiis fugiat
                            eos? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quis perferendis tempora dolorum
                            aspernatur aliquam temporibus minima pariatur id
                            quia corporis, fugiat laborum? Nobis, deleniti.
                            Praesentium perferendis aliquid vero! Quas, iure.
                        </p>
                    </div>
                </div>
            </div>
            {/* product */}
            <div className="min-h-screen flex justify-center py-5 flex-col gap-5">
                <h1
                    className="text-5xl text-center font-bold "
                    data-aos="fade-up"
                >
                    Paket Internet Kami
                </h1>
                <div className="px-5 flex flex-wrap justify-center mt-5 gap-5">
                    {PRODUCTS.map((product, i) => {
                        return (
                            <div
                                className="card w-[18rem] bg-base-100 shadow-xl "
                                data-aos="fade-up-right"
                                key={i}
                            >
                                <figure>
                                    <img src={productImage} alt="alwan.net" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.title}
                                    </h2>
                                    {/* <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p> */}
                                    <div className="card-actions justify-end">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => order(product.title)}
                                        >
                                            {product.price}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* contact me */}
            <div className="p-5  mt-[5rem]" data-aos="flip-left">
                <div className=" bg-yellow-400 shadow-xl flex flex-col md:flex-row-reverse md:h-[20rem] rounded-md p-4">
                    <div className="md:w-1/2 relative md:-top-[9rem]">
                        <img src={man} alt="Man" className="w-[30rem]" />
                    </div>
                    <div className=" text-white flex flex-col justify-center items-center md:items-start">
                        <h2 className="card-title font-bold text-3xl md:text-5xl text-center md:text-start">
                            Ingin Konsultasi dengan Tim Kami ?
                        </h2>
                        <div className="mt-5">
                            <Link to={"/kontak"} className="btn btn-primary">
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
