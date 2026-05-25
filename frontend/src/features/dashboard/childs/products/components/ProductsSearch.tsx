"use client";
import BranchSelect from "@/components/dash/BranchSelectField";
import CategorySelect from "@/components/dash/CategorySelectField";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react"; 

const ProductsSearch = () => {
    const [search, setSearch] = useState<string>(""); 
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");
    const [category, setCategory] = useState<string | null>(null);

    const router = useRouter();

    const params = useMemo(() => {
        const currentParams = new URLSearchParams();

        if (category) {
            currentParams.append("category", category);
        }
        if (debouncedSearch) {
            currentParams.append("search", debouncedSearch);
        }
        return currentParams;
    }, [category, debouncedSearch]);

    // Debounce effect
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); // 500ms debounce time

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        const urlWithParams = `?${params.toString()}`;

        if (debouncedSearch || category) {
            router.push(urlWithParams);
        }
    }, [debouncedSearch, category, params]);

    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="flex flex-col md:flex-row col-span-full lg:col-span-1 items-center w-full gap-4 ">
                <TextField
                    size="small"
                    label="جستوجو"
                    placeholder="نام محصول ، بارکد ، شناسه و ..."
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex  w-full gap-2">
                    <CategorySelect setCategory={setCategory} />
                    {/* <BranchSelect setBranch={setBranch} /> */}
                </div>
            </div>
        </div>
    );
};

export default ProductsSearch;
