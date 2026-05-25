import { ArrowDownwardRounded } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";

const DashboardsRecents = () => {
    return (
        <>
            <Card className="col-span-full lg:col-span-4 bg-gray-100! rounded-lg ">
                <Box className="border-b border-gray-300 p-2">
                    <Typography variant="body2">تراکنش های اخیر</Typography>
                </Box>
                <Box className="flex flex-col px-4">
                    <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                        <Box className="flex items-center gap-2">
                            <IconButton color="success">
                                <ArrowDownwardRounded
                                    fontSize="small"
                                    color="success"
                                />
                            </IconButton>
                            <span className="flex flex-col">
                                <Typography variant="body2">
                                    علی رضایی
                                </Typography>
                                <Typography variant="caption">
                                    پرداخت شناسه c00134
                                </Typography>
                            </span>
                        </Box>
                        <Box className="flex flex-col items-end">
                            <Typography variant="body1" color="success">
                                12000000 ريال
                            </Typography>
                            <Typography variant="caption">
                                2 ساعت پیش
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                        <Box className="flex items-center gap-2">
                            <IconButton color="success">
                                <ArrowDownwardRounded
                                    fontSize="small"
                                    color="success"
                                />
                            </IconButton>
                            <span className="flex flex-col">
                                <Typography variant="body2">
                                    علی رضایی
                                </Typography>
                                <Typography variant="caption">
                                    پرداخت شناسه c00134
                                </Typography>
                            </span>
                        </Box>
                        <Box className="flex flex-col items-end">
                            <Typography variant="body1" color="success">
                                12000000 ريال
                            </Typography>
                            <Typography variant="caption">
                                2 ساعت پیش
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                        <Box className="flex items-center gap-2">
                            <IconButton color="success">
                                <ArrowDownwardRounded
                                    fontSize="small"
                                    color="success"
                                />
                            </IconButton>
                            <span className="flex flex-col">
                                <Typography variant="body2">
                                    علی رضایی
                                </Typography>
                                <Typography variant="caption">
                                    پرداخت شناسه c00134
                                </Typography>
                            </span>
                        </Box>
                        <Box className="flex flex-col items-end">
                            <Typography variant="body1" color="success">
                                12000000 ريال
                            </Typography>
                            <Typography variant="caption">
                                2 ساعت پیش
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex items-center justify-between py-2 border-b border-gray-300">
                        <Box className="flex items-center gap-2">
                            <IconButton color="success">
                                <ArrowDownwardRounded
                                    fontSize="small"
                                    color="success"
                                />
                            </IconButton>
                            <span className="flex flex-col">
                                <Typography variant="body2">
                                    علی رضایی
                                </Typography>
                                <Typography variant="caption">
                                    پرداخت شناسه c00134
                                </Typography>
                            </span>
                        </Box>
                        <Box className="flex flex-col items-end">
                            <Typography variant="body1" color="success">
                                12000000 ريال
                            </Typography>
                            <Typography variant="caption">
                                2 ساعت پیش
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
            <Card className="col-span-full lg:col-span-2 bg-gray-100! rounded-lg ">
                <Box className="border-b border-gray-300 p-2">
                    <Typography variant="body2">نسیه های اخیر</Typography>
                </Box>
            </Card>
        </>
    );
};

export default DashboardsRecents;
