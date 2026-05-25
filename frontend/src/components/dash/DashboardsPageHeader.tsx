import { formatedTodayDate } from "@/utils/date";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const DashboardsPageHeader = ({
    title,
    caption,
    children,
}: {
    title: string;
    caption: string;
    children: React.ReactNode;
}) => {
    return (
        <Box className="flex items-center flex-wrap gap-4 justify-between">
            <Box className="flex flex-col items-start gap-2">
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">
                   {caption}
                </Typography>
            </Box>
            <Box className="flex items-center gap-2">
                {children}
            </Box>
        </Box>
    );
};

export default DashboardsPageHeader;
