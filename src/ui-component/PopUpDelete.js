import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function PopUpDelete() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton aria-label="apagar" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{'DELETAR'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Tem certeza que deseja deletar?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose}>Deletar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
