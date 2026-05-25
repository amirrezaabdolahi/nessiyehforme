import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { markets } from "@/data/DashboardMarkets";
import { AddRounded, HomeRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";

const Markets = () => {
    return (
        <Container>
            <DashboardsPageHeader title="مارکت های شما" caption="">
                <Button
                    variant="contained"
                    endIcon={<AddRounded fontSize="small" />}
                >
                    مارکت
                </Button>
            </DashboardsPageHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {markets.map((market, index) => (
                    <SlideUpBoxAnimation key={market.id} delay={index / 10}>
                        <Card className="h-60 flex flex-col justify-between gap-4 p-4 rounded-xl!">
                            <div className="flex items-center justify-between">
                                <HomeRounded color="action" fontSize="large" />
                                {market.status === "active" ? (
                                    <Typography
                                        variant="body2"
                                        color="success"
                                        className="px-4 bg-green-500/20 rounded-full"
                                    >
                                        . فعال
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        color="error"
                                        className="px-4 bg-red-500/20 rounded-full"
                                    >
                                        . غیرفعال
                                    </Typography>
                                )}
                            </div>
                            <Typography
                                variant="subtitle1"
                                className="font-bold!"
                            >
                                {market.name}
                            </Typography>
                            <div className="flex items-center gap-2">
                                <Box className="flex-1 bg-gray-200 p-2 rounded-lg">
                                    <Typography variant="body2">
                                        تعداد مشتری
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        className="font-bold!"
                                    >
                                        {market.customers}
                                    </Typography>
                                </Box>
                                <Box className="flex-1 bg-gray-200 p-2 rounded-lg">
                                    <Typography variant="body2">
                                        دارایی
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        className="font-bold!"
                                    >
                                        {market.outstanding} ریال
                                    </Typography>
                                </Box>
                            </div>
                        </Card>
                    </SlideUpBoxAnimation>
                ))}
            </div>
        </Container>
    );
};

export default Markets;
