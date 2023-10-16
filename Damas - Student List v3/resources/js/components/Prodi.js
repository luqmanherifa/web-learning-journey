import React, { useState, useEffect } from "react";
import axios from "axios";

const DataProdi = () => {
    const [prodi, setProdi] = useState([]);

    useEffect(() => {
        axios
            .get("/api/prodi")
            .then((response) => {
                setProdi(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="max-w-5xl">
            <h1 className="mb-5 font-bold text-xl text-gray-700">
                Tabel Prodi
            </h1>
            <div className="relative overflow-x-auto border border-blue-600 sm:rounded-lg">
                <table className="w-full text-sm text-left text-slate-500 table-fixed">
                    <thead className="text-xs text-white uppercase bg-blue-600">
                        <tr>
                            <th scope="col" className="px-6 py-4 w-32">
                                Kode Prodi
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Nama Prodi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodi.map((prodi) => (
                            <tr key={prodi.id} className="bg-white border-b">
                                <td className="px-6 py-4">
                                    {prodi.kode_prodi}
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {prodi.nama_prodi}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataProdi;
