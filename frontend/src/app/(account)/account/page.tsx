import Container from "@/components/dash/Container";
import SlideUpAnimation from "@/components/SlideUpAnimation";
import { Typography } from "@mui/material";
import React from "react";

const page = () => {
    return (
        <Container>
            <SlideUpAnimation>
                <Typography variant="caption">شنبه ، 26 خرداد 1405</Typography>
                <Typography variant="h5">درود ، امیررضا عبدالهی 👋</Typography>
            </SlideUpAnimation>
        </Container>
    );
};

export default page;
