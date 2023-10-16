import React from "react";
import Button from "../components/Button";

function Hero() {
    return (
        <section className="py-32 bg-white">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-6 font-lexend text-center text-6xl font-extrabold tracking-tight text-black">
                    Optimalkan Websitemu dengan
                    <br />
                    <span className="bg-orens font-lexend bg-clip-text text-transparent">
                        Cloud Hosting Qwords!
                    </span>
                </h1>
                <div className="flex justify-center">
                    <p className="text-center text-lg text-slate-600 w-[550px]">
                        Qwords menawarkan layanan Cloud Hosting yang cepat,
                        aman, dan dukungan 24 jam untuk memenuhi kebutuhan
                        hosting Anda. Kami tersertifikasi ISO 27001 dengan Data
                        Center Tier 3.
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <Button text="Beli Sekarang" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
