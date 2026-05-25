import { LinkItemType } from "@/data/DashboardMenuData";
import { Typography } from "@mui/material";
import Link from "next/link";

interface DashLinksProps {
    link: LinkItemType;
    pathname: string;
}

const DashLinks = ({ link, pathname }: DashLinksProps) => {
    return (
        <div>
            <Typography variant="body2" className="text-gray-500">
                {link.group}
            </Typography>
            <div className="flex flex-col ">
                {link.items.map((item, idx) => (
                    <Typography
                        key={idx}
                        variant="body1"
                        className={`
                                        hover:bg-gray-100 hover:text-black rounded transition-all duration-100 text-gray-600
                                            ${pathname === item.href ? "bg-blue-100 border-r border-blue-500 text-black! " : ""}
                                        `}
                    >
                        <Link
                            href={item.href}
                            className="flex items-center text-sm gap-2 p-2 "
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    </Typography>
                ))}
            </div>
        </div>
    );
};

export default DashLinks;
