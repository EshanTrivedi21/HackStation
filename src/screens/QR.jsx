import React, { memo } from "react";
import { FlexDiv, BackIcon, Card } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { Theme } from "../utils/Theme";

const QR = memo(({ title }) => {  
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-20 py-10 overflow-hidden">
                    <FlexDiv className="!justify-start ml-6 gap-6">
                        <BackIcon to=""/>
                        <Typography variant="modal_title">QR Code</Typography>
                    </FlexDiv>
                    <div className="flex justify-center items-center">
                        <img src="/assets/qr-test.svg" loading="lazy" alt="qr"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Typography variant="modal_title">
                            Identity Card
                        </Typography>
                        <Typography variant="modal_subtitle">
                            Get the QR scanned to continue
                        </Typography>
                    </div>
                    <div className="flex justify-center items-center pt-28">
                        <img src="/assets/sponsors.svg" alt="sponsors" className="w-[85vw]" loading="lazy"/>
                    </div>
                </div>
            </Theme>
        </>
    );
});

export default QR;
