"use client";
import Container from "@/components/dash/Container";
import SlideUpAnimation from "@/components/SlideUpAnimation";
import { useAppSelector } from "@/lib/redux/hooks";
import {
    ChevronLeft,
    ChevronLeftRounded,
    ReceiptRounded,
    StoreRounded,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    Divider,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";

const page = () => {
    const user = useAppSelector((s) => s.userInfo);

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
                    <Card className="rounded-xl! p-4! flex flex-col gap-8">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex  gap-2 items-center">
                                <Avatar variant="rounded" />
                                <div className="">
                                    <Typography variant="body1">
                                        سوپرمارکت نگین
                                    </Typography>
                                    <Typography variant="caption">
                                        دانشکده کوچه 7
                                    </Typography>
                                </div>
                            </div>
                            <ChevronLeftRounded color="disabled" />
                        </div>
                        <div className="bg-blue-500/50! p-4 border border-blue-500 rounded-xl!">
                            <Typography variant="body2">
                                بدهی باقی‌مانده
                            </Typography>
                            <Typography
                                variant="h5"
                                color="primary"
                                className="font-bold!"
                            >
                                3,230,000 تومان
                            </Typography>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <Button variant="outlined">3 فاکتور باز</Button>
                            <Typography variant="caption">
                                1405/03/29
                            </Typography>
                        </div>
                        <Button variant="contained" fullWidth>
                            مشاهده جزئیات
                        </Button>
                    </Card>
                </div>
            </SlideUpAnimation>
        </Container>
    );
};

export default page;
