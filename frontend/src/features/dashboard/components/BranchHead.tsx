import { Card, Typography } from "@mui/material";
import React from "react";

const BranchHead = ({ branches }: { branches: Array<string> }) => {
    return (
        <Card
            className={`w-300
                                xl:w-full
                                sticky 
                                top-0 
                                z-50
                                grid 
                                grid-cols-${branches.length}
                                items-center 
                                justify-between
                                p-4
                                border
                                border-gray-400
                                transition-all

                `}
        >
            {branches.map((name, index) => (
                <Typography key={index} variant="body2" className="text-start">
                    {name}
                </Typography>
            ))}
        </Card>
    );
};

export default BranchHead;
