import MainNavbar from "@/features/main/components/MainNavbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <MainNavbar />
            {children}
        </div>
    );
}
