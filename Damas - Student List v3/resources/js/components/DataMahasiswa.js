import React, { useState, useEffect } from "react";
import axios from "axios";
import Insert from "./Insert";

const DataMahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const [updatedData, setUpdatedData] = useState({
        prodi_id: "",
        nim: "",
        nama: "",
        tempat_lahir: "",
        tgl_lahir: "",
        alamat: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        axios
            .get("/api/mahasiswa")
            .then((response) => {
                // console.log(response.data.data);
                setMahasiswa(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [editingId]);

    const handleEdit = (id) => {
        setEditingId(id);
        const selectedMahasiswa = mahasiswa.find(
            (mahasiswa) => mahasiswa.id === id
        );
        setUpdatedData(selectedMahasiswa);
    };

    const handleUpdate = (id, updatedMahasiswa) => {
        axios
            .put(`/api/mahasiswa/${id}`, updatedMahasiswa)
            .then((response) => {
                // console.log(response.data.message);
                setEditingId(null);
            })
            .catch((error) => {
                console.error("Error updating mahasiswa:", error);
            });
    };

    const handleDelete = (id) => {
        const confirmation = window.confirm(
            "Apakah Anda yakin ingin menghapus?"
        );
        if (confirmation) {
            axios
                .delete(`/api/mahasiswa/${id}`)
                .then((response) => {
                    // console.log(response.data.message);
                })
                .catch((error) => {
                    console.error("Error deleting mahasiswa:", error);
                });
        }
    };

    useEffect(() => {
        axios
            .get(`/api/mahasiswa?page=${currentPage}`)
            .then((response) => {
                // console.log(response.data.data);
                setMahasiswa(response.data.data);
                setLastPage(response.data.last_page);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="max-w-5xl">
            <h1 className="mb-5 font-bold text-xl text-gray-700">
                Data Mahasiswa
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
                                Prodi
                            </th>
                            <th scope="col" className="px-6 py-4 w-32">
                                Action
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
                                    {mahasiswa.prodi.nama_prodi}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="mr-3 font-medium text-yellow-500 hover:underline"
                                        onClick={() => handleEdit(mahasiswa.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="mr-3 file:font-medium text-red-500 hover:underline"
                                        onClick={() =>
                                            handleDelete(mahasiswa.id)
                                        }
                                    >
                                        Hapus
                                    </button>
                                    {selectedMahasiswa === mahasiswa ? (
                                        <button
                                            className="font-medium text-green-500 hover:underline"
                                            onClick={() =>
                                                setSelectedMahasiswa(null)
                                            }
                                        >
                                            Tutup
                                        </button>
                                    ) : (
                                        <button
                                            className="font-medium text-blue-500 hover:underline"
                                            onClick={() =>
                                                setSelectedMahasiswa(mahasiswa)
                                            }
                                        >
                                            Show
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex mt-3">
                <button
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="flex items-center justify-center px-3 h-8 ml-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    onClick={handleNextPage}
                    disabled={currentPage === lastPage}
                >
                    Next
                </button>
            </div>

            {selectedMahasiswa && (
                <div className="mt-4 border border-gray-300 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">
                        Informasi Mahasiswa
                    </h2>
                    <p>
                        <strong>NIM:</strong> {selectedMahasiswa.nim}
                    </p>
                    <p>
                        <strong>Nama:</strong> {selectedMahasiswa.nama}
                    </p>
                    {selectedMahasiswa.prodi && (
                        <div>
                            <p>
                                <strong>Program Studi:</strong>{" "}
                                {selectedMahasiswa.prodi.nama_prodi}
                            </p>
                            <ul>
                                {selectedMahasiswa.prodi.matakuliah.map(
                                    (matakuliah) => (
                                        <li key={matakuliah.id}>
                                            <div className="flex gap-2">
                                                {" "}
                                                <p>
                                                    <strong>
                                                        Mata Kuliah:
                                                    </strong>{" "}
                                                    {matakuliah.nama_matkul}
                                                </p>
                                                <p>|</p>
                                                <p>
                                                    <strong>Dosen:</strong>{" "}
                                                    {
                                                        matakuliah.dosen
                                                            .nama_dosen
                                                    }
                                                </p>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <Insert />

            <div>
                <div className="w-52 mt-10 mb-10">
                    <h1 className="mb-5 font-bold text-xl text-gray-700">
                        Form Update
                    </h1>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdate(editingId, updatedData);
                        }}
                    >
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                NIM
                            </label>
                            <input
                                type="number"
                                name="nim"
                                value={updatedData.nim}
                                onChange={handleInputChange}
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
                                value={updatedData.nama}
                                onChange={handleInputChange}
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
                                value={updatedData.tempat_lahir}
                                onChange={handleInputChange}
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
                                value={updatedData.tgl_lahir}
                                onChange={handleInputChange}
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
                                value={updatedData.alamat}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Prodi
                            </label>
                            <select
                                name="prodi_id"
                                value={updatedData.prodi_id}
                                onChange={handleInputChange}
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
                            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataMahasiswa;
