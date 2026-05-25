"use client";

import { Box, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 2,
                gap: 1,
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                مدیریت مالی خود را ساده کنید
            </Typography>

            <Typography variant="body1" color="text.secondary">
                همه تراکنش‌ها و پس‌اندازهای شما، یکجا و قابل دسترسی در هر زمان
            </Typography>

            <Stack direction="row" spacing={2} mt={2}>
                <Button variant="contained" color="primary">
                    شروع رایگان
                </Button>
                <Button variant="outlined" color="primary">
                    ورود به داشبورد
                </Button>
            </Stack>
        </Box>
    );
}
