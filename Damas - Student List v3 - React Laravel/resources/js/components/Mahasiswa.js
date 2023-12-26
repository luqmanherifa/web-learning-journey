import React, { useState, useEffect } from "react";
import axios from "axios";

const Mahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        axios
            .get("/api/mahasiswa")
            .then((response) => {
                setMahasiswa(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="max-w-5xl">
            <h1 className="mb-5 font-bold text-xl text-gray-700">
                Tabel Mahasiswa
            </h1>
            <div className="relative overflow-x-auto border border-blue-600 sm:rounded-lg">
                <table className="w-full text-sm text-left text-slate-500 table-fixed">
                    <thead className="text-xs text-white uppercase bg-blue-600">
                        <tr>
                            <th scope="col" className="px-6 py-4 w-32">
                                NIM
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Nama Mahasiswa
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Tempat Lahir
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Tanggal Lahir
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Alamat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map((mahasiswa) => (
                            <tr
                                key={mahasiswa.id}
                                className="bg-white border-b"
                            >
                                <td className="px-6 py-4">{mahasiswa.nim}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {mahasiswa.nama}
                                </th>
                                <td className="px-6 py-4">
                                    {mahasiswa.tempat_lahir}
                                </td>
                                <td className="px-6 py-4">
                                    {mahasiswa.tgl_lahir}
                                </td>
                                <td className="px-6 py-4">
                                    {mahasiswa.alamat}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mahasiswa;
