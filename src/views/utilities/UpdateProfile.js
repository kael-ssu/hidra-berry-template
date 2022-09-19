import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from 'contexts/AuthContext.js';
import { Alert } from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'firebase/auth';

const theme = createTheme();

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const { currentUser, editPassword, editEmail } = useAuth();
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const promises = [];
        setLoading(true);
        setError('');

        if (emailRef.current.value !== currentUser.email) {
            promises.push(editEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(editPassword(passwordRef.current.value));
        }

        Promise.all(promises)
            .then(() => {
                navigate.push('/');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputRef={nameRef}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nome"
                                    defaultValue={''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    inputRef={emailRef}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    defaultValue={currentUser.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={passwordRef}
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    placeholder="Deixe em branco para manter a mesma senha"
                                />
                            </Grid>
                        </Grid>
                        <Button disabled={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Editar
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Button disabled={loading} onClick={() => deleteUser(currentUser)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Deletar conta
            </Button>
        </ThemeProvider>
    );
}
