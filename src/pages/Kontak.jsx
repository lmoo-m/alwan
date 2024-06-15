import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

const Kontak = () => {
    return (
        <Layout>
            <Navigation page={"Kontak"}>
                <section className="bg-white">
                    <div className="container px-6 py-12 mx-auto">
                        <div>
                            <p
                                className="font-medium text-blue-500 dark:text-blue-400"
                                data-aos="fade-right"
                            >
                                Hubungi Kami
                            </p>

                            <h1
                                className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl"
                                data-aos="fade-right"
                            >
                                Get in touch
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                                <div data-aos="fade-right">
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 ">
                                        Email
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Bisa menghubungi email ini jika perlu
                                        bantuan.
                                    </p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                        papppap@gmail.com
                                    </p>
                                </div>

                                <div data-aos="fade-right">
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 ">
                                        Alamat
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Silahkan bisa mendatangi alamat ini.
                                    </p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                        Jl. Wijaya Kusuma, Desa Kabunan, Kec.
                                        Dukuhwaru, Kabupaten Tegal, Jawa Tengah
                                    </p>
                                </div>

                                <div data-aos="fade-right">
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800">
                                        Telepon
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500 ">
                                        Aktif Setiap Hari.
                                    </p>
                                    <p className="mt-2 text-sm text-blue-500 ">
                                        +62 882-0089-37262
                                    </p>
                                </div>
                            </div>

                            <div
                                className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto"
                                data-aos="fade-right"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1345893294063!2d109.1190657111955!3d-6.977533127577448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbeecf0ed3409%3A0x9347d2e437157b7!2sToko%20Alwan!5e0!3m2!1sid!2sid!4v1718191379399!5m2!1sid!2sid"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </Navigation>
        </Layout>
    );
};

export default Kontak;
