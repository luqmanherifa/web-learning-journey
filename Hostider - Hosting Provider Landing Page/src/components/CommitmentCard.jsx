import React from "react";
import Button from "./Button";

function CommitmentCard(props) {
    const { commitment, description } = props;
    return (
        <div className="w-[19rem]">
            <div className="block p-6 rounded-lg shadow bg-orens">
                <h5 className="mb-2 font-lexend font-medium text-xl tracking-tight text-black line-clamp-1">
                    {commitment}
                </h5>
                <p className="font-normal text-slate-700 line-clamp-4">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CommitmentCard;
