import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [formData, setFormData] = useState({
        prodi_id: "",
        nim: "",
        nama: "",
        tempat_lahir: "",
        tgl_lahir: "",
        alamat: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/mahasiswa", formData)
            .then((response) => {
                // console.log(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    };

    return (
        <div>
            <div className="w-52 mt-10">
                <h1 className="mb-4 font-bold text-xl text-gray-700">
                    Form Insert
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            NIM
                        </label>
                        <input
                            type="text"
                            name="nim"
                            value={formData.nim}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nama
                        </label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Tempat Lahir
                        </label>
                        <input
                            type="text"
                            name="tempat_lahir"
                            value={formData.tempat_lahir}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            name="tgl_lahir"
                            value={formData.tgl_lahir}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Alamat
                        </label>
                        <input
                            type="text"
                            name="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Prodi
                        </label>
                        <select
                            name="prodi_id"
                            value={formData.prodi_id}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="" disabled>
                                Pilih Prodi
                            </option>
                            <option value="1">Teknik Informatika</option>
                            <option value="2">Manajemen</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                    >
                        Insert
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Insert;
