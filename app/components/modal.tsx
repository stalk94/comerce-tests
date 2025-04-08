import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    open: boolean 
    setOpen: (v: boolean)=> void
    children: React.ReactNode
}


export default function SimpleDialog({ open, setOpen, children }: Props) {

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <Dialog 
            maxWidth={false}
            open={open} 
            onClose={handleClose}
            sx={{
                "& .MuiPaper-root": {
                    background: 'white',
                    backdropFilter: "blur(14px)",
                    borderRadius: 5,
                },
            }}
        >
            <DialogTitle>

                <IconButton
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{ 
                        position: 'absolute', 
                        right: 1, 
                        top: 2 
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                { children }
                { !children && <p>Это содержимое модального окна.</p> }
            </DialogContent>
        </Dialog>
    );
}