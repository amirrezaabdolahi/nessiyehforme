import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, IScannerControls } from "@zxing/browser";
import { toast } from "react-toastify";

type ScannerDialogProps = {
    open: boolean;
    onClose: () => void;
    onScan: (barcode: string) => void;
};

const AddProductsScannerDilog = ({
    open,
    onClose,
    onScan,
}: ScannerDialogProps) => {
    const fakeScan = () => {
        onScan("6269334116182");
    };

    const videoRef = useRef<HTMLVideoElement>(null);

    const [barcode, setBarcode] = useState("");

    useEffect(() => {
        if (!open) return;

        const codeReader = new BrowserMultiFormatReader();

        let controls: IScannerControls | undefined;

        const startScanner = async () => {
            try {
                const devices =
                    await BrowserMultiFormatReader.listVideoInputDevices();

                if (!devices.length) {
                    toast.error("خروجی دوربین یافت نشد");
                    return;
                }

                const camera =
                    devices.find((d) =>
                        d.label.toLowerCase().includes("back"),
                    ) ||
                    devices.find((d) =>
                        d.label.toLowerCase().includes("rear"),
                    ) ||
                    devices[devices.length - 1];

                if (!videoRef.current) return;

                controls = await codeReader.decodeFromVideoDevice(
                    camera.deviceId,
                    videoRef.current,
                    (result) => {
                        if (result) {
                            const value = result.getText();
                            setBarcode(value);
                            onScan(value);
                        }
                    },
                );
            } catch (error) {
                toast.error(
                    error instanceof Error ? error.message : String(error),
                );
            }
        };

        startScanner();

        return () => {
            controls?.stop();
        };
    }, [open , onScan]);

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    بارکد را اسکن کنید
                </DialogTitle>
                <DialogContent>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        style={{
                            width: "100%",
                            maxWidth: 500,
                            borderRadius: 12,
                            border: "1px solid #ddd",
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={onClose}>
                        انصراف
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default AddProductsScannerDilog;
