"use client";
import {
    Button,
    Dialog,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React from "react";
import { Room } from "@mui/icons-material";
import { markets } from "@/data/navbarfakedata";

interface SimpleDialogProps {
    onClose: (value: string) => void;
    open: boolean;
    selectedValue: string;
}

const ChoseMarketDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(markets[0]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div>
            <Button
                variant="outlined"
                endIcon={<Room fontSize="small" />}
                className="rounded-full! lg:w-3xs"
                onClick={handleClickOpen}
            >
                {selectedValue}
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
};

export default ChoseMarketDialog;

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>انتخاب مارکت</DialogTitle>
            <List sx={{ pt: 0 }} className="w-90 lg:w-lg! rounded-xl! overflow-hidden">
                {markets.map((market) => (
                    <ListItem disablePadding key={market}>
                        <ListItemButton
                            onClick={() => handleListItemClick(market)}
                        >
                            <ListItemAvatar>
                                <IconButton size="small" color="primary">
                                    <Room fontSize="small" />
                                </IconButton>
                            </ListItemAvatar>
                            <ListItemText primary={market} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}
