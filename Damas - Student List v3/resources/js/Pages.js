import React, { useState } from "react";
import Mahasiswa from "./components/Mahasiswa";
import MataKuliah from "./components/MataKuliah";
import Dosen from "./components/Dosen";
import Prodi from "./components/Prodi";
import DataMahasiswa from "./components/DataMahasiswa";
import Insert from "./components/Insert";

function Pages() {
    const [activeComponent, setActiveComponent] = useState("DataMahasiswa");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "DataMahasiswa":
                return <DataMahasiswa />;
            case "Mahasiswa":
                return <Mahasiswa />;
            case "MataKuliah":
                return <MataKuliah />;
            case "Dosen":
                return <Dosen />;
            case "Prodi":
                return <Prodi />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto flex mt-5 justify-center">
            <div className="max-w-[10rem]">
                <div className="flex flex-col mt-12 mr-5">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleComponentChange("DataMahasiswa")}
                    >
                        Data
                    </button>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleComponentChange("Mahasiswa")}
                    >
                        Mahasiswa
                    </button>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleComponentChange("MataKuliah")}
                    >
                        Mata Kuliah
                    </button>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleComponentChange("Dosen")}
                    >
                        Dosen
                    </button>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleComponentChange("Prodi")}
                    >
                        Prodi
                    </button>
                </div>
            </div>
            {renderComponent()}
        </div>
    );
}

export default Pages;
