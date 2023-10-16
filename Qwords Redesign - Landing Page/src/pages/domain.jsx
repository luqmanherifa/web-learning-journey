import React from "react";

function Domain() {
    return (
        <div className="bg-orensmuda">
            <section className="py-20 max-w-6xl mx-auto">
                <div className="flex-wrap justify-center flex gap-5">
                    <div className="w-[60rem] bg-biru rounded-[3rem] shadow p-12">
                        <div className="flex justify-center gap-8 items-center">
                            <div className="text-center">
                                <h5 className="mb-5 font-lexend font-bold text-3xl tracking-tight text-black">
                                    Temukan Nama Domain Anda
                                </h5>
                                <p className="font-normal text-lg text-slate-700 w-[50rem] mx-auto">
                                    Nama Domain digunakan untuk mempermudah
                                    pengunjung menuju situs Anda. Pilihlah nama
                                    domain yang paling mencerminkan bisnis,
                                    produk, atau layanan Anda.
                                </p>
                                <div className="mt-8">
                                    <form>
                                        <label
                                            htmlFor="default-search"
                                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                        >
                                            Cari
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="search"
                                                id="default-search"
                                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                                                placeholder="Cari nama domain Anda..."
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                                            >
                                                Cari Domain
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Domain;
