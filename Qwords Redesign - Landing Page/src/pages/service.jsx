import React from "react";
import ServiceCard from "../components/ServiceCard";

function Service() {
    const servicedata = [
        {
            id: 1,
            name: "SSL",
            description:
                "Jadikan website Anda lebih terpercaya dan disukai oleh mesin pencari dengan menggunakan Sertifikat SSL.",
            price: 112000,
            duration: "tahun",
        },
        {
            id: 2,
            name: "Dedicated Server",
            description:
                "Nikmati pengelolaan Dedicated Server sendiri dengan akses jarak jauh dari seluruh dunia tanpa batasan.",
            price: 499000,
            duration: "bulan",
        },
        {
            id: 3,
            name: "Colocation Server",
            description:
                "Nikmati akses cepat dari seluruh dunia dengan fasilitas pemantauan penuh 24x7, sistem pendingin terbaik, dan pemadam kebakaran.",
            price: 500000,
            duration: "bulan",
        },
    ];
    return (
        <section className="py-20 bg-orensmuda">
            <div className="text-center mx-auto w-[50rem] mb-10 ">
                <p className="mb-4 text-3xl font-extrabold text-black font-lexend">
                    Lihat Juga Layanan Lain yang Kami Sediakan
                </p>
                <p className="w-[35rem] mx-auto text-lg text-slate-600">
                    Optimalkan performa website bisnis Anda dengan berbagai
                    layanan berkualitas dari Qwords.
                </p>
            </div>
            <div className="max-w-6xl mx-auto flex gap-5 justify-center">
                {servicedata.map((data) => (
                    <div key={data.id}>
                        <ServiceCard
                            key={data.id}
                            name={data.name}
                            description={data.description}
                            price={data.price}
                            duration={data.duration}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Service;
