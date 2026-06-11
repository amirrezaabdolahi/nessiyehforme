import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const PagesFilterLinks = ({page} : {page : string}) => {
    return (
        <Box className="flex gap-2 mb-4">
            <Link href={`/dashboard/${page}`}>
                <Button variant="outlined">همه</Button>
            </Link>
            <Link href={`/dashboard/${page}?q=debts`}>
                <Button variant="outlined">نسیه ها</Button>
            </Link>
        </Box>
    );
};

export default PagesFilterLinks;
