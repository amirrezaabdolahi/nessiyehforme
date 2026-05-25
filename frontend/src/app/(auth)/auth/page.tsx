import Code from "@/features/auth/components/Code";
import Signin from "@/features/auth/components/Signin";
import Signout from "@/features/auth/components/Signout";
import Signup from "@/features/auth/components/Signup";
import { Typography } from "@mui/material";

const Authentication = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { mode } = await searchParams;

    return (
        <div className="flex flex-col items-center shadow p-4 rounded w-full md:w-auto mx-2 md:mx-0">
            <Typography variant="h5" className="mb-6!">
                نسیه
            </Typography>
            <div className="w-full sm:w-full md:w-125">
                {mode === "signup" ? (
                    <Signup />
                ) : mode === "code" ? (
                    <Code />
                ) : mode === "signout" ? (
                    <Signout />
                ) : (
                    <Signin />
                )}
            </div>
        </div>
    );
};

export default Authentication;
