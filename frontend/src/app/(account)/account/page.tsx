"use client";
import Container from "@/components/dash/Container";
import SlideUpAnimation from "@/components/SlideUpAnimation";
import { useGetShopsQuery } from "@/features/account/api/ApiAccount";
import ShopsCard from "@/features/account/components/ShopsCard";
import { useAppSelector } from "@/lib/redux/hooks";
import {
    ChevronLeftRounded,
    ReceiptRounded,
    StoreRounded,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    CircularProgress,
    Divider,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";

const page = () => {
    const user = useAppSelector((s) => s.userInfo);
    const { data, isLoading, error, isSuccess } = useGetShopsQuery();

    if (isLoading) {
        return <CircularProgress />;
    }
    if (error) {
        return <p>something went wrong</p>;
    }

    const my_shops = isSuccess ? data.shops : [];

    return (
        <Container>
            <SlideUpAnimation>
                <Box>
                    <Typography variant="caption">
                        شنبه ، 26 خرداد 1405
                    </Typography>
                    <Typography variant="h4" className="font-bold!">
                        درود ، {user.full_name} 👋
                    </Typography>
                    <Typography variant="caption">
                        خلاصه بدهی‌های شما در فروشگاه‌های مختلف
                    </Typography>
                </Box>
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: 5,
                        p: 5,
                    }}
                    className="w-full"
                >
                    <div className="">
                        <Typography variant="body2">مجموع بدهی کل</Typography>
                        <Typography variant="h4" className="font-bold!">
                            31,240,000
                        </Typography>
                        <Typography variant="body2">تومان</Typography>
                    </div>
                    <Divider
                        sx={{ borderColor: "rgba(255,255,255,0.18)", my: 2.5 }}
                    />
                    <div className="flex gap-4 w-full">
                        <Box
                            sx={{
                                bgcolor: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: 5,
                                py: 5,
                            }}
                            className="w-full p-5 flex flex-col items-center gap-2"
                        >
                            <StoreRounded />
                            <Typography variant="h4" className="font-bold">
                                6
                            </Typography>
                            <Typography variant="body2">
                                فروشگاه بدهکار
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: 5,
                                py: 5,
                            }}
                            className="w-full p-5 flex flex-col items-center gap-2"
                        >
                            <ReceiptRounded />
                            <Typography variant="h4" className="font-bold">
                                23
                            </Typography>
                            <Typography variant="body2">فاکتور باز</Typography>
                        </Box>
                    </div>
                </Box>
                <div className="flex items-center justify-between w-full my-4!">
                    <div className="">
                        <Typography variant="h5" className="font-bold!">
                            فروشگاه های بدهکار
                        </Typography>
                    </div>
                    <Button variant="outlined">5 فروشگاه</Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {my_shops?.map((shop) => (
                        <ShopsCard shop={shop} key={shop.shop_id} />
                    ))}
                </div>
            </SlideUpAnimation>
        </Container>
    );
};

export default page;
