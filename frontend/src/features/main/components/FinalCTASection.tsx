"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

const FinalCTASection = () => {
    return (
        <Box
            sx={{
                py: 10,
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                <Stack spacing={4} alignItems="center">
                    <Typography variant="h4" fontWeight={700}>
                        همین حالا شروع کن
                    </Typography>

                    <Typography variant="body1">
                        فقط چند دقیقه طول می‌کشد تا کنترل کامل مالی خود را به
                        دست بگیری.
                    </Typography>

                    <Button variant="contained" size="large" className="w-max ">
                        ایجاد حساب کاربری
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default FinalCTASection;
