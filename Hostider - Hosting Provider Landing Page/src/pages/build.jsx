import React from "react";
import Button from "../components/Button";

function Build() {
    return (
        <div className="bg-white">
            <section className="pt-20 pb-5 max-w-6xl mx-auto">
                <div className="flex-wrap justify-center flex gap-5">
                    <div className="w-[60rem] bg-hijau rounded-[3rem] shadow p-12">
                        <div className="flex justify-center gap-12 items-center">
                            <div>
                                <img src="/build.png" alt="" />
                            </div>
                            <div className="w-96">
                                <h5 className="mb-5 font-lexend font-bold text-3xl tracking-tight text-black line-clamp-2">
                                    Membuat Website Impian dengan Mudah di Sini
                                </h5>
                                <p className="font-normal text-lg text-slate-700 line-clamp-3 mb-8">
                                    Kami menyediakan jasa pembuatan website
                                    profesional untuk perusahaan, bisnis, dan
                                    UKM dengan paket hosting Indonesia terbaik,
                                    hanya dengan biaya 1 jutaan. Buat website
                                    impian Anda dengan mudah di sini, dengan
                                    desain website elegan dan kemudahan dalam
                                    pengelolaannya.
                                </p>
                                <Button text="Buat Website Impianmu Sekarang!" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Build;
