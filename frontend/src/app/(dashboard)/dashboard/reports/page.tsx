import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { ReportCardsData } from "@/data/ReportsData";
import { InstallDesktopRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Container from "@/components/dash/Container";

const Report = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="گزارش ماهیانه"
                caption="اردیبهشت 1404 ، فروشگاه نگین"
            >
                <Button variant="outlined" endIcon={<InstallDesktopRounded />}>
                    پرینت PDF
                </Button>
            </DashboardsPageHeader>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                {ReportCardsData.map((card, index) => (
                    <SlideUpBoxAnimation key={card.id} delay={index / 15}>
                        <Card
                            sx={{
                                flex: "1 1 0",
                                minWidth: 0,
                                p: 2,
                                borderTop: 2,
                                borderColor: `${card.color}.main`,
                            }}
                        >
                            <Typography variant="caption">
                                {card.title}
                            </Typography>
                            <Typography variant="h4" className="text-lg!">
                                {card.value}
                            </Typography>
                        </Card>
                    </SlideUpBoxAnimation>
                ))}
            </Box>
        </Container>
    );
};

export default Report;
