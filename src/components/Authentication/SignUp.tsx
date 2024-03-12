import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        BuyMe Online🛒
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [resMssg, setResMssg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isSeller: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.target.elements.Name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const isSeller = e.target.isSeller.checked;
    console.log(name, email, password, isSeller);

    const newUser = {
      name: name,
      email: email,
      password: password,
      isSeller: isSeller,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      crossDomain: true,
      body: JSON.stringify(newUser),
    };

    const response = await fetch(
      "http://localhost:3000/api/v1/user/signup",
      options
    );

    const responseData = await response.json();
    console.log(responseData);
    if (responseData.status === "ok") {
      setShowAlert(true);
      setIsSignedUp(true);
      setUser(responseData.createdUser);
    } else {
      setIsSignedUp(false);
      setShowAlert(true);
      setResMssg(responseData.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {showAlert
          ? isSignedUp
            ? (() => {
                return (
                  <Alert
                    iconMapping={{
                      success: <CheckCircleOutlineIcon fontSize="inherit" />,
                    }}
                  >
                    Welcome {user.name} ! Signup Successfull. Please Signin to
                    your account.
                  </Alert>
                );
              })()
            : (() => {
                return <Alert severity="error">{resMssg}</Alert>;
              })()
          : ""}

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up Page
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="isSeller" id="isSeller" color="primary" />
                  }
                  label="Are you a Seller ?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
