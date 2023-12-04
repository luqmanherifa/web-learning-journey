import React from "react";
import CommitmentCard from "../components/CommitmentCard";

function Commitment() {
    const commitmentdata = [
        {
            id: 1,
            commitment: "Layanan 24/7",
            description:
                "Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari melalui Live chat, Call Center, dan Support Ticket.",
        },
        {
            id: 2,
            commitment: "Panduan Manual Lengkap",
            description:
                "Qwords menyediakan halaman knowledge base yang berisi tutorial dan tips seputar pengelolaan website dan hosting, dengan akses mudah dan solutif.",
        },
        {
            id: 3,
            commitment: "Up Time 99.99%",
            description:
                "Uptime Network & Server Qwords mencapai di atas 99,99% dengan konfigurasi server yang tepat, didukung oleh manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering.",
        },
        {
            id: 4,
            commitment: "Jaminan Keamanan",
            description:
                "Keamanan merupakan fokus utama Qwords, dengan tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan sebagai perhatian utama.",
        },
        {
            id: 5,
            commitment: "Clustered DNS",
            description:
                "DNS Server Cloud Hosting Qwords saling terhubung satu sama lain, memastikan akses yang selalu tersedia karena saling membackup antar server.",
        },
        {
            id: 6,
            commitment: "High Enterprise Server",
            description:
                "Server standar Qwords menggunakan hardware kelas terbaik, yaitu server kelas enterprise Dual Xeon Octa Core yang sering digunakan oleh perusahaan terkemuka.",
        },
        {
            id: 7,
            commitment: "Tier 1 Network",
            description:
                "Jaringan di Qwords terhubung dengan Tier 1 Network, yang berarti tidak ada transit network, memberikan kecepatan jaringan yang lebih baik serta jalur routing yang lebih pendek dan backup network yang tersedia.",
        },
        {
            id: 8,
            commitment: "Peering Network",
            description:
                "Jaringan Qwords terhubung langsung ke public peering seperti OpenIXP dan CDIX, menghasilkan latency atau waktu tunggu pengiriman data yang semakin kecil.",
        },
    ];
    return (
        <div className="bg-orensmuda">
            <section className="py-20 max-w-6xl mx-auto">
                <div className="text-center mx-auto w-[50rem] mb-10 ">
                    <p className="mb-4 text-3xl font-extrabold text-black font-lexend">
                        Kami Memiliki Komitmen Terbaik untuk Anda
                    </p>
                    <p className="w-[35rem] mx-auto text-lg text-slate-600">
                        Pelanggan memilih untuk menyewa hosting di Qwords karena
                        berbagai alasan yang menjadikannya pilihan yang tepat.
                    </p>
                </div>
                <div className="flex-wrap justify-center flex gap-5">
                    {commitmentdata.map((data) => (
                        <div key={data.id}>
                            <CommitmentCard
                                key={data.id}
                                commitment={data.commitment}
                                description={data.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Commitment;
