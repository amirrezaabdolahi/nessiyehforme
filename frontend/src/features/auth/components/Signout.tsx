import { SignoutAuth } from "@/utils/auth/CheckAuth";
import { Typography } from "@mui/material";

const Signout = async () => {
    await SignoutAuth();

    return(
        <>
            <Typography variant="body1">
                خروج
            </Typography>
        </>
    )
};

export default Signout;
