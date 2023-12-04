import React from "react";
import PriceCard from "../components/PriceCard";

function Price() {
    const pricedata = [
        {
            id: 1,
            border: "border-merah",
            bg: "bg-merah",
            name: "VCH1",
            price: 14500,
            discount: 200000,
            memory: "3 GB",
            bandwith: "Unlimited",
            core: "0.5 Core",
            domain: "No",
        },
        {
            id: 2,
            border: "border-biru",
            bg: "bg-biru",
            name: "Signature",
            price: 89900,
            discount: 109000,
            memory: "Unlimited",
            bandwith: "Unlimited",
            core: "1 Core",
            domain: "5/5",
        },
        {
            id: 3,
            border: "border-ungu",
            bg: "bg-ungu",
            name: "HPCH Bisnis 1",
            price: 79000,
            discount: 90000,
            memory: "3 GB",
            bandwith: "Unlimited",
            core: "0.5 Core",
            domain: "-",
        },
        {
            id: 4,
            border: "border-hijau",
            bg: "bg-hijau",
            name: "VPS SC1",
            price: 75000,
            discount: 135000,
            memory: "25 GB",
            bandwith: "Unlimited",
            core: "1 Core",
            domain: "Unlimited",
        },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="text-center mx-auto mb-10">
                <p className="mb-4 text-3xl font-extrabold text-black font-lexend mx-auto">
                    Dapatkan Diskon 50% untuk Cloud Hosting di Indonesia
                </p>
                <p className="w-[35rem] mx-auto text-lg text-slate-600">
                    Nikmati layanan Cloud Hosting terbaik di Indonesia dengan
                    teknologi yang handal untuk website Anda.
                </p>
            </div>
            <div className="max-w-6xl mx-auto flex gap-5 justify-center flex-wrap">
                {pricedata.map((data) => (
                    <div key={data.id}>
                        <PriceCard
                            key={data.id}
                            border={data.border}
                            bg={data.bg}
                            name={data.name}
                            price={data.price}
                            discount={data.discount}
                            memory={data.memory}
                            bandwith={data.bandwith}
                            core={data.core}
                            domain={data.domain}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Price;
