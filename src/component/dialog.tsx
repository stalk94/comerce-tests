import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const StyleDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function ({ open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <StyleDialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby={'dialog-title'}
        >
            <DialogContent>
                <DialogContentText>
                
                </DialogContentText>
            </DialogContent>
        </StyleDialog>
    );
}