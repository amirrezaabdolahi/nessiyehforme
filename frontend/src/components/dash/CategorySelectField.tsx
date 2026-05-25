"use client";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { categories } from "@/utils/filteringData";

interface Props {
    setCategory: any;
}

export default function CategorySelect({ setCategory }: Props) {
    return (
        <Autocomplete
            disablePortal
            id="category-select"
            options={categories}
            getOptionLabel={(option) => option.name}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label="دسته‌بندی محصول"
                    placeholder="انتخاب کنید..."
                />
            )}
            onChange={(event, newValue) => {
                setCategory(newValue ? newValue.value : null);
            }}
            size="small"
            fullWidth
        />
    );
}
