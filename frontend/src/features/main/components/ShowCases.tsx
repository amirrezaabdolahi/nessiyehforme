import { Box, Tooltip } from "@mui/material";
import React from "react";

const ShowCases = () => {
    return (
        <div className="w-full">
            <div className="flex justify-center gap-4 items-center w-full">
                <Tooltip title="عکس از داشبورد" placement="top">
                    <Box className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <h2 className="text-2xl font-bold">عکس</h2>
                    </Box>
                </Tooltip>
                <Tooltip title="عکس از داشبورد" placement="top">
                    <Box className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <h2 className="text-2xl font-bold">عکس</h2>
                    </Box>
                </Tooltip>
                <Tooltip title="عکس از داشبورد" placement="top">
                    <Box className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <h2 className="text-2xl font-bold">عکس</h2>
                    </Box>
                </Tooltip>
            </div>
        </div>
    );
};

export default ShowCases;
