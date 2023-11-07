import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/Auth/AuthSlice';
import { RootState } from '../../app/Store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, FormikProps } from 'formik';
import { LoginFormValues, LoginSchema } from '../../Utilities/FormSchema';
import CircularProgress from '@mui/material/CircularProgress';
import { Copyright } from '../../Components/others/CopyRight';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../Utilities/ThemeProvider';
import "./LoginScreen.scss"
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginScreen() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    const onSubmit = async (values: LoginFormValues) => {

        const data = {
            email: values.email,
            password: values.password,
        }
        dispatch(login(data) as any).then((res: any) => {
            if (res.payload != null && res.payload != "Network Error") {
                if (res.payload.success == true) {
                    navigate("dashboard/home")
                    toast.success(res.payload.message )
                }
                else {
                    toast.error(res.payload ?? "Login Error");
                }
            } else {
                toast.error("Network Error")
            }
        })
    }
    return (
        <>
            {userLogin.user ? <Navigate to="/dashboard/home" /> :
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mt: 14
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Log in
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Formik
                                        initialValues={{
                                            email: "",
                                            password: ""
                                        }}
                                        validationSchema={LoginSchema}
                                        onSubmit={onSubmit}>
                                        {(formikProps: FormikProps<LoginFormValues>) => (
                                            <Form noValidate autoComplete="off">
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    autoFocus
                                                    variant="outlined"
                                                    error={formikProps.errors.email ? Boolean(formikProps.touched.email && formikProps.errors.email) : false}
                                                    helperText={formikProps.errors.email && formikProps.touched.email ? formikProps.errors.email : null}
                                                    value={formikProps.values.email}
                                                    onChange={formikProps.handleChange}
                                                    onBlur={formikProps.handleBlur}
                                                />
                                                <TextField
                                                    margin="normal"
                                                    autoFocus
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                    variant="outlined"
                                                    error={formikProps.errors.password ? Boolean(formikProps.touched.password && formikProps.errors.password) : false}
                                                    helperText={formikProps.errors.password && formikProps.touched.password ? formikProps.errors.password : null}
                                                    value={formikProps.values.password}
                                                    onChange={formikProps.handleChange}
                                                    onBlur={formikProps.handleBlur}

                                                />
                                                <FormControlLabel
                                                    control={<Checkbox value="remember" color="primary" />}
                                                    label="Remember me"
                                                />
                                                <Button
                                                    disabled={!formikProps.isValid || !formikProps.dirty || userLogin.isLoading}

                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2, ":hover": { backgroundColor: "#717C7D" } }}
                                                >
                                                    {userLogin.isLoading ? <CircularProgress size={24} color='inherit' /> : "Sign In"}
                                                </Button>

                                            </Form>
                                        )}</Formik>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>

                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid >
                </ThemeProvider>
            }
        </>
    );
}