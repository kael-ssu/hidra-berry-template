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
import { useAuth } from '../../../../contexts/AuthContext.js';
import { Alert } from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const matriculaRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value, matriculaRef.current.value);
            navigate('/dashboard/default');
        } catch (error) {
            window.alert(error);
        }

        setLoading(false);
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputRef={matriculaRef}
                                    required
                                    fullWidth
                                    id="matricula"
                                    label="Matrícula"
                                    name="matricula"
                                    autoComplete="matricula"
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    inputRef={passwordRef}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            {/*<Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>*/}
                        </Grid>
                        <Button disabled={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Registrar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
