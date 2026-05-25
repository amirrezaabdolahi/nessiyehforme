"use client";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const CopyButtonSku = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);

            // Reset the "Copied!" status back to false after 2 seconds
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Typography
            variant={isCopied ? "body1" : "h6"}
            className="cursor-pointer select-none"
            color={isCopied ? "success" : "primary"}
            onClick={handleCopy}
        >
            {isCopied ? "کپی شد" : `${text}#`}
        </Typography>
    );
};

export default CopyButtonSku;
