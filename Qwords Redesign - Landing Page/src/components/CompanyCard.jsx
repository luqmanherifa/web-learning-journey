import React from "react";
import Button from "./Button";

function CompanyCard(props) {
    const { bgname, company, description } = props;
    return (
        <div className="w-[19rem]">
            <a href="#" className={`block p-6 rounded-lg shadow ${bgname}`}>
                <h5 className="mb-2 font-lexend font-medium text-xl tracking-tight text-black line-clamp-1">
                    {company}
                </h5>
                <p className="font-normal text-slate-700 line-clamp-4">
                    {description}
                </p>
            </a>
        </div>
    );
}

export default CompanyCard;
