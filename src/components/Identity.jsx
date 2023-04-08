import React, { memo } from "react";
import { ContainerID, FlexCol, FlexRow } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Identity = memo(({ name, team }) => {
    return (
        <ContainerID>
            <FlexRow className="!w-auto !justify-start">
                <img
                    src="/assets/id_asset.png"
                    alt="asset"
                    style={{
                        transform: "translateY(-6px) translateX(-5px)",
                    }}
                />
                <FlexCol className="!w-auto !items-start gap-4">
                    <FlexCol className="!w-auto !items-start">
                        <Typography variant="id_sub">Name :</Typography>
                        <Typography variant="id_title" className="capitalize">
                            {name}
                        </Typography>
                    </FlexCol>
                    <FlexCol className="!w-auto !items-start">
                        <Typography variant="id_sub">Team :</Typography>
                        <Typography variant="id_title">{team}</Typography>
                    </FlexCol>
                </FlexCol>
            </FlexRow>
        </ContainerID>
    );
});

export default Identity;
