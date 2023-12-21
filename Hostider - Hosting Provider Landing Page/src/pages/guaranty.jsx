import React from "react";
import Button from "../components/Button";

function Guaranty() {
    return (
        <div className="bg-white">
            <section className="pt-5 pb-20 max-w-6xl mx-auto">
                <div className="flex-wrap justify-center flex gap-5">
                    <div className="w-[60rem] bg-ungu rounded-[3rem] shadow p-12">
                        <div className="flex justify-center gap-8 items-center">
                            <div className="w-96">
                                <h5 className="mb-5 font-lexend font-bold text-3xl tracking-tight text-black line-clamp-2">
                                    Dapatkan Garansi Uang Kembali 30 Hari
                                </h5>
                                <p className="font-normal text-lg text-slate-700 line-clamp-3 mb-8">
                                    Demi menjaga kepuasan pelanggan, kami
                                    menyediakan garansi uang kembali yang
                                    berlaku selama 30 hari setelah hosting
                                    aktif.
                                </p>
                                <Button text="Jaminan 30 Hari Uang Kembali!" />
                            </div>
                            <img src="/guaranty.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Guaranty;
