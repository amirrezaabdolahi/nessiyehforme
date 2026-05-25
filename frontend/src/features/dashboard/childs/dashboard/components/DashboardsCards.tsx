import SlideUpBoxAnimation from "@/components/SlideUpBoxAnimation";
import { dashboardCards } from "@/data/DashboardDatas";
import { Box, Card, Typography } from "@mui/material";

const DashboardsCards = () => {
    return (
        <Box className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
            {dashboardCards.map((card, index) => (
                <SlideUpBoxAnimation key={card.id} delay={index / 15 + 0.1}>
                    <Card
                        sx={{
                            minWidth: 0,
                            p: 2,
                            borderTop: 2,
                            borderColor: `${card.color}.main`,
                        }}
                    >
                        <Typography variant="h6" className="text-lg!">
                            {card.title}
                        </Typography>
                        <Typography variant="h4" className="text-lg!">
                            {card.value} {card.unit}
                        </Typography>
                        <Typography variant="body2">
                            تغییر: {card.change}٪ ({card.changeType})
                        </Typography>
                        <Typography variant="body2">
                            دوره: {card.period}
                        </Typography>
                    </Card>
                </SlideUpBoxAnimation>
            ))}
        </Box>
    );
};

export default DashboardsCards;
