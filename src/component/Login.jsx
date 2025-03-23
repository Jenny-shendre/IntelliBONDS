import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Box,
  Link,
  Paper,
  Snackbar,
  Alert,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { loginUser, fetchUser } from "../services/authService";
import { setToken } from "../utils/auth"; // adjust path based on your structure

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginUser(username, password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token); // on successful login
        setSuccess(true);

        const userResponse = await fetchUser(response.data.token);
        localStorage.setItem("user", JSON.stringify(userResponse.data));

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/path-to-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2", width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="https://dashboard.intellibonds.com/assets/Img/logos/newlogo1.png"
            alt="Logo"
            style={{ height: 40 }}
          />
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginTop: "64px",
        }}
      >
        <Paper 
          elevation={3}
          sx={{
            padding: 4,
            width: 350,
            textAlign: "center",
            borderTop: "4px solid #00aaff",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <KeyIcon fontSize="large" sx={{ transform: "rotate(20deg)", marginRight: 1 }} /> Login
          </Typography>

          {error && (
            <Typography color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2, backgroundColor: "#00aaff" }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <Link href="#" sx={{ display: "block", marginTop: 2, fontSize: "0.9rem" }}>
            Forgot Password?
          </Link>
          <Link
            href="#"
            sx={{
              display: "block",
              marginTop: 1,
              fontSize: "0.9rem",
              color: "#00aaff",
            }}
          >
            New to Intellibonds? Request For a Demo
          </Link>
        </Paper>
      </Container>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Login Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;