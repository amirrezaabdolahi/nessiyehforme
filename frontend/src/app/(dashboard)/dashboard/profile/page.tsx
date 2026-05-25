"use client"
import Container from "@/components/dash/Container";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";

import default_Profile from "../../../../../public/default-profile.jpg";
import Signout from "@/features/auth/components/Signout";
import { SignoutAuth } from "@/utils/auth/CheckAuth";

const ProfilePage = () => {
    return (
        <Container>
            <Card className="p-4 flex flex-col justify-center gap-8">
                <div className="flex flex-col justify-center md:justify-start md:flex-row items-center gap-4">
                    <div className="">
                        <Avatar
                            className="size-20! md:size-30! lg:size-40!"
                            src={default_Profile.src}
                        >
                            P
                        </Avatar>
                    </div>
                    <div className="text-center md:text-start">
                        <Typography variant="h5">امیررضا عبدالهی</Typography>
                        <Typography variant="body1">
                            09225621256 - فروشگاه نگین
                        </Typography>
                        <Typography variant="body1">
                            amirezaabdolahi752@gmail.com
                        </Typography>
                        <Button variant="outlined">تغییر عکس پروفایل</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Typography variant="h6">اکانت</Typography>
                    <TextField
                        type="text"
                        size="small"
                        placeholder="نام کاربری"
                        label="نام کاربری"
                    />
                    <TextField
                        type="email"
                        size="small"
                        placeholder="ایمیل"
                        label="ایمیل"
                    />
                    <TextField
                        type="tel"
                        size="small"
                        placeholder="شماره تلفن"
                        label="شماره تلفن"
                    />
                    <TextField
                        type="tel"
                        size="small"
                        placeholder="نام فروشگاه"
                        label="نام فروشگاه"
                    />
                </div>
                <div className=" flex gap-4 ">
                    <Button variant="contained" color="primary">
                        ویرایش
                    </Button>
                    <Button variant="contained" color="error" 
                      onClick={SignoutAuth}
                    >
                        خروج از اکانت
                    </Button>
                </div>
            </Card>
        </Container>
    );
};

export default ProfilePage;
