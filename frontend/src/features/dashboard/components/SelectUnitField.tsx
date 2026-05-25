"use client";
import { Units } from "@/data/AutoCompletesData";
import { Autocomplete, TextField } from "@mui/material";

const SelectUnitField = () => {
    return (
        <Autocomplete
            disablePortal
            id="category-select"
            options={Units}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="واحد شمارش"
                    placeholder="انتخاب کنید..."
                />
            )}
            size="small"
            fullWidth
        />
    );
};

export default SelectUnitField;
