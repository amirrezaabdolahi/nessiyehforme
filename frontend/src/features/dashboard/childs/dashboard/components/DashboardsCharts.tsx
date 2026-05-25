import { Box, Card, Typography } from "@mui/material";
import React from "react";

const DashboardsCharts = () => {
    return (
        <>
            <Card className="col-span-full lg:col-span-4 bg-gray-100! rounded-lg ">
                <Box className="border-b border-gray-300 p-2">
                    <Typography variant="body2">
                        نمودار دریافتی ها سی روز
                    </Typography>
                </Box>
            </Card>
            <Card className="col-span-full lg:col-span-2 bg-gray-100! rounded-lg ">
                <Box className="border-b border-gray-300 p-2">
                    <Typography variant="body2">
                        نمودار دریافتی ها سی روز
                    </Typography>
                </Box>
            </Card>
        </>
    );
};

export default DashboardsCharts;
