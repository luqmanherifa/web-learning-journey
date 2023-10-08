import React from "react";

function Help() {
    return (
        <div className="bg-orensmuda">
            <section className="py-20 max-w-6xl mx-auto">
                <div className="text-center mx-auto w-[50rem] mb-10 ">
                    <p className="mb-4 text-3xl font-extrabold text-black font-lexend">
                        Butuh Bantuan?
                    </p>
                    <p className="w-[30rem] mx-auto text-lg text-slate-600">
                        Kami siap membantu Anda 24 jam.
                    </p>
                </div>
                <div className="flex-wrap justify-center flex gap-5">
                    <div className="w-[12rem] text-center ">
                        <a
                            href="#"
                            className="block p-4 rounded-lg shadow bg-orens hover:bg-orens/70"
                        >
                            <h5 className="mb-2 font-lexend font-medium tracking-tight text-slate-700 line-clamp-1">
                                Telepon
                            </h5>
                            <p className="font-normal text-black text-lg line-clamp-4">
                                0804-1-808-888
                            </p>
                        </a>
                    </div>
                    <div className="w-[12rem] text-center">
                        <a
                            href="#"
                            className="block p-4 rounded-lg shadow bg-orens hover:bg-orens/70"
                        >
                            <h5 className="mb-2 font-lexend font-medium tracking-tight text-slate-700 line-clamp-1">
                                Telepon
                            </h5>
                            <p className="font-normal text-black text-lg line-clamp-4">
                                02139708800
                            </p>
                        </a>
                    </div>
                    <div className="w-[12rem] text-center">
                        <a
                            href="#"
                            className="block p-4 rounded-lg shadow bg-orens hover:bg-orens/70"
                        >
                            <h5 className="mb-2 font-lexend font-medium tracking-tight text-slate-700 line-clamp-1">
                                WhatsApp
                            </h5>
                            <p className="font-normal text-black text-lg line-clamp-4">
                                +62817437111
                            </p>
                        </a>
                    </div>
                    <div className="w-[12rem] text-center">
                        <a
                            href="#"
                            className="block p-4 rounded-lg shadow bg-orens hover:bg-orens/70"
                        >
                            <h5 className="mb-2 font-lexend font-medium tracking-tight text-slate-700 line-clamp-1">
                                Email
                            </h5>
                            <p className="font-normal black text-lg line-clamp-4">
                                info@qwords.com
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Help;
