import { Box } from "@mui/material";
import React from "react";
const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
};
const ModalContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={style} className="rounded-lg w-[90%] max-w-150 p-4">
            {children}
        </Box>
    );
};

export default ModalContainer;
