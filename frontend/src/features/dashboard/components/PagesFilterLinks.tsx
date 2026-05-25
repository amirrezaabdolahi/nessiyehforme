import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const PagesFilterLinks = ({page} : {page : string}) => {
    return (
        <Box className="flex gap-2 mb-4">
            <Link href={`/dashboard/${page}`}>
                <Button variant="outlined">همه</Button>
            </Link>
            <Link href={"?filter=active"}>
                <Button variant="outlined">باز</Button>
            </Link>
            <Link href={"?filter=overdue"}>
                <Button variant="outlined">پرداخت نشده</Button>
            </Link>
            <Link href={"?filter=settled"}>
                <Button variant="outlined">پرداخت شده</Button>
            </Link>
        </Box>
    );
};

export default PagesFilterLinks;
