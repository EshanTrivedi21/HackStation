import React, { memo } from "react";
import { ContainerID } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Identity = memo(({ name, team }) => {
    return (
        <ContainerID>
            <div className="flex justify-start items-center w-full ">
                <img
                    src="/assets/id_asset.png"
                    alt="asset"
                    style={{
                        transform: "translateY(-5px) translateX(-5px)",
                    }}
                />
                <div className="flex flex-col items-start justify-center gap-4">
                    <div className="flex flex-col">
                        <Typography variant="id_sub">Name :</Typography>
                        <Typography variant="id_title" className="capitalize">{name}</Typography>
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="id_sub">Team :</Typography>
                        <Typography variant="id_title">{team}</Typography>
                    </div>
                </div>
            </div>
        </ContainerID>
    );
});

export default Identity;
