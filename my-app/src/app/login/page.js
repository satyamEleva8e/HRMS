"use client";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl,
    FormControlLabel,
    Grid,
    TextField,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"copyright "}
            <Link color="inherit" href="#">
                Satyam Kumar
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function login() {
    const defaultTheme = createTheme();
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1 }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <FormControl
                            fullWidth
                            component="form"
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="User ID"
                                name="email"
                                autoCapitalize="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                                autoCapitalize="current-password"
                            />
                            <FormControlLabel
                                control={<CheckBox color="red" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid2 container>
                                <Grid2 item xs>
                                    <Link href="#" variant="body2">
                                        Forgot Password
                                    </Link>
                                </Grid2>
                            </Grid2>
                        </FormControl>
                    </Box>
                    <Grid>
                        <Copyright sx={{ mt: 8, mb: 4 }}></Copyright>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
