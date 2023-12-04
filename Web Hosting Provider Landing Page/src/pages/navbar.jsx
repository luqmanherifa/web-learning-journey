import React from "react";
import Button from "../components/Button";

function Navbar() {
    return (
        <div className="bg-white">
            <section className="border-b border-slate-200">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between text-slate-50">
                    <div className="ml-5">
                        <a
                            href="https://www.qwords.com"
                            target="_blank"
                            className="flex items-center gap-3"
                        >
                            <img src="/icon.png" alt="icon" className="w-8" />
                            <p className="text-black font-bold text-lg hover:text-orens">
                                Qwords
                            </p>
                        </a>
                    </div>
                    <nav className="flex gap-8 text-sm font-semibold text-black items-center">
                        <div className="hover:text-orens">
                            <a href="#">Cloud Hosting</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Server</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Domain</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Email Suite</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Services</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Internet Access</a>
                        </div>
                        <div className="hover:text-orens">
                            <a href="#">Promo</a>
                        </div>
                    </nav>
                    <div className="mr-10">
                        <Button text="Masuk" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Navbar;
