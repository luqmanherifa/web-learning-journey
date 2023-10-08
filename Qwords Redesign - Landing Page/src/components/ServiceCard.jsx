import React from "react";
import Button from "./Button";

function ServiceCard(props) {
    const { name, description, price, duration } = props;
    return (
        <div className="w-[250px] p-7 bg-white rounded-lg text-center border-orens border">
            <h5 className="mb-5 font-lexend text-xl font-bold tracking-tight text-white text-center bg-orens py-2 rounded-lg">
                {name}
            </h5>
            <p className="mb-5 font-normal text-sm text-slate-600 line-clamp-4">
                {description}
            </p>
            <p className="text-3xl font-bold black mb-0">
                Rp{price.toLocaleString("id-ID")}
            </p>
            <p className="mb-5 text-base font-medium text-slate-600">
                /{duration}
            </p>
            <Button text="Beli" />
        </div>
    );
}

export default ServiceCard;
