import React, { useState, useEffect } from "react";
import axios from "axios";

const DataMataKuliah = () => {
    const [matakuliah, setMataKuliah] = useState([]);

    useEffect(() => {
        axios
            .get("/api/matakuliah")
            .then((response) => {
                setMataKuliah(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="max-w-5xl">
            <h1 className="mb-5 font-bold text-xl text-gray-700">
                Tabel Mata Kuliah
            </h1>
            <div className="relative overflow-x-auto border border-blue-600 sm:rounded-lg">
                <table className="w-full text-sm text-left text-slate-500 table-fixed">
                    <thead className="text-xs text-white uppercase bg-blue-600">
                        <tr>
                            <th scope="col" className="px-6 py-4 w-32">
                                Kode Mata Kuliah
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Nama Mata Kuliah
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Semester
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                SKS
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Dosen
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {matakuliah.map((matakuliah) => (
                            <tr
                                key={matakuliah.id}
                                className="bg-white border-b"
                            >
                                <td className="px-6 py-4">
                                    {matakuliah.kode_matkul}
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {matakuliah.nama_matkul}
                                </th>
                                <td className="px-6 py-4">
                                    {matakuliah.semester}
                                </td>
                                <td className="px-6 py-4">{matakuliah.sks}</td>
                                <td className="px-6 py-4">
                                    {matakuliah.dosen.nama_dosen}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataMataKuliah;
