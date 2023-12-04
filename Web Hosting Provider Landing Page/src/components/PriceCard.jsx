import React from "react";
import Button from "./Button";

function PriceCard(props) {
    const {
        border,
        bg,
        name,
        price,
        discount,
        memory,
        bandwith,
        core,
        domain,
    } = props;
    return (
        <div className="max-w-6xl mx-auto flex gap-5 justify-center">
            <div
                className={`w-[250px] p-7 bg-white rounded-lg text-center shadow border ${border}`}
            >
                <h5
                    className={`shadow mb-5 font-lexend text-xl font-bold tracking-tight text-white text-center py-2 rounded-lg ${bg}`}
                >
                    {name}
                </h5>
                <p className="text-3xl font-bold text-black mb-1">
                    Rp{price.toLocaleString("id-ID")}
                </p>
                <p className="mb-5 text-base font-medium text-slate-400 line-through">
                    Rp{discount.toLocaleString("id-ID")}
                </p>
                <p className="mb-1 font-normal text-sm text-black">
                    <span className="font-bold">{memory}</span> Disk
                </p>
                <p className="mb-1 font-normal text-sm text-black">
                    <span className="font-bold">{bandwith}</span> Bandwith
                </p>
                <p className="mb-1 font-normal text-sm text-black">
                    <span className="font-bold">{core}</span> CPU
                </p>
                <p className="mb-6 font-normal text-sm text-black line-clamp-1">
                    <span className="font-bold">{domain}</span> Addon/parked
                    domain
                </p>
                <Button text="Beli" />
            </div>
        </div>
    );
}

export default PriceCard;
