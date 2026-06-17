"use client";
import Container from "@/components/dash/Container";
import SlideUpAnimation from "@/components/SlideUpAnimation";
import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { useAppSelector } from "@/lib/redux/hooks";
import { ReceiptRounded, StoreRounded } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useGetShopsQuery } from "../api/ApiAccount";

const ShopDetailsPage = ({ id }) => {
    const user = useAppSelector((s) => s.userInfo);
    const {} = useGetShopsQuery();

    return (
        <Container>
            <SlideUpBoxAnimation delay={0}>
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: 5,
                        p: 4,
                        mt: 5,
                    }}
                    className="w-full"
                >
                    <div className="">
                        <Typography variant="body1">مجموع بدهی</Typography>
                        <Typography variant="h4" className="font-bold!">
                            31,240,000
                        </Typography>
                        <Typography variant="body1">تومان</Typography>
                    </div>
                    <Divider
                        sx={{ borderColor: "rgba(255,255,255,0.18)", my: 2.5 }}
                    />
                    <div className="flex gap-4 ">
                        <div className="">
                            <Typography variant="body1">مشتری</Typography>
                            <Typography variant="h6">
                                {user.full_name}
                            </Typography>
                        </div>
                        <div className="">
                            <Typography variant="body1">شماره تماس</Typography>
                            <Typography variant="h6">
                                {user.phone_number}
                            </Typography>
                        </div>
                    </div>
                </Box>
            </SlideUpBoxAnimation>
            <div
                className="flex items-center gap-5 w-full"
                style={{ gap: "10px" }}
            >
                <SlideUpBoxAnimation delay={0.2} className="mx-5!">
                    <Link href={"#"}>
                        <Button variant="outlined">همه</Button>
                    </Link>
                </SlideUpBoxAnimation>
                <SlideUpBoxAnimation delay={0.3}>
                    <Link href={"#"}>
                        <Button variant="outlined" color="error">
                            پرداخت نشده
                        </Button>
                    </Link>
                </SlideUpBoxAnimation>
                <SlideUpBoxAnimation delay={0.4}>
                    <Link href={"#"}>
                        <Button variant="outlined" color="warning">
                            پرداخت جزئی
                        </Button>
                    </Link>
                </SlideUpBoxAnimation>
                <SlideUpBoxAnimation delay={0.5}>
                    <Link href={"#"}>
                        <Button variant="outlined" color="success">
                            پرداخت شده
                        </Button>
                    </Link>
                </SlideUpBoxAnimation>
            </div>
        </Container>
    );
};

export default ShopDetailsPage;
