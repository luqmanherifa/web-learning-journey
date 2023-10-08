import React from "react";
import CompanyCard from "../components/CompanyCard";

function Company() {
    const companydata = [
        {
            id: 1,
            bgname: "bg-merah hover:bg-merah/70",
            company: "Perusahaan",
            description:
                "Realisasikan website perusahaan yang profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra.",
        },
        {
            id: 2,
            bgname: "bg-hijau hover:bg-hijau/70",
            company: "UMKM dan Toko Online",
            description:
                "Sediakan hosting terbaik untuk memenuhi kebutuhan website pemasaran barang/jasa secara online.",
        },
        {
            id: 3,
            bgname: "bg-pink hover:bg-pink/70",
            company: "Organisasi dan Komunitas",
            description:
                "Buatlah website organisasi atau komunitas Anda dengan paket hosting unggulan yang ramah kantong.",
        },
        {
            id: 4,
            bgname: "bg-kuning hover:bg-kuning/70",
            company: "Sekolah",
            description:
                "Dukung kegiatan e-learning dengan infrastruktur web hosting terbaik. Tersedia platform MOODLE khusus untuk pembelajaran daring.",
        },
        {
            id: 5,
            bgname: "bg-ungu hover:bg-ungu/70",
            company: "Developer",
            description:
                "Tersedia paket hosting Indonesia dengan spesifikasi khusus yang cocok untuk developer. Dilengkapi dengan fitur ekstra NodeJS dan Git Version Control.",
        },
        {
            id: 6,
            bgname: "bg-biru hover:bg-biru/70",
            company: "Blogger dan Personal",
            description:
                "Fasilitasi para blogger dengan infrastruktur hosting Indonesia terbaik dan template website premium agar tampilan lebih profesional.",
        },
    ];
    return (
        <div className="bg-white">
            <section className="py-20 max-w-6xl mx-auto">
                <div className="text-center mx-auto w-[50rem] mb-10 ">
                    <p className="mb-4 text-3xl font-extrabold text-black font-lexend">
                        Temukan Solusi Paket Hosting Terbaik dari Kami
                    </p>
                    <p className="w-[35rem] mx-auto text-lg text-slate-600">
                        Kami menawarkan solusi paket hosting terbaik untuk
                        segala kebutuhan website dan sistem Anda, mulai dari
                        blog hingga website bisnis dan perusahaan.
                    </p>
                </div>
                <div className="flex-wrap justify-center flex gap-5">
                    {companydata.map((data) => (
                        <div key={data.id}>
                            <CompanyCard
                                key={data.id}
                                bgname={data.bgname}
                                company={data.company}
                                description={data.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Company;
