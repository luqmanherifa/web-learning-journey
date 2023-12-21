import React from "react";

function Footer() {
    return (
        <div className="bg-black">
            <div className="mx-auto flex max-w-[69rem] justify-between pt-10 pb-8">
                <div>
                    <a
                        href="https://www.qwords.com"
                        target="_blank"
                        className="flex"
                    >
                        <img src="/icon.png" alt="icon" className="w-8 mr-3" />
                        <p className="text-2xl font-semibold text-white hover:text-orens">
                            Qwords
                        </p>
                    </a>
                    <div className="my-5 max-w-xs text-sm text-white mb-0">
                        Cloud Web Hosting Indonesia. Dapatkan domain dan hosting
                        terbaik dengan akses cepat, serta didukung oleh layanan
                        support 24/7.
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            Pembayaran
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            Faktur Pajak
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-0">
                            Bantuan 24 Jam
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            Qwords Rewards
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            Knowledge Base
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-0">
                            Blog
                        </p>
                    </div>

                    <div>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            FAQ
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-5">
                            Kontak
                        </p>
                        <p className="cursor-pointer text-xs text-white hover:text-orens mb-0">
                            Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-10">
                <a href="https://github.com/luqmanherifa" target="_blank">
                    <p className="p-3 text-xs text-white hover:text-orens">
                        © 2023 • Built by Luqman Herifa
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Footer;
