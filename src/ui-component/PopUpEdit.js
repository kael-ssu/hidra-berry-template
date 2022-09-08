import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function PopUpEdit() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton aria-label="editar" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>EDITAR</DialogTitle>
                <DialogContent>
                    <DialogContentText>Insira os novos valores e, em seguida, salve as modificações</DialogContentText>
                    <TextField margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
