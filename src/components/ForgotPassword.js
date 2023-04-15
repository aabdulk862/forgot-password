import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length >= 8;
    if (isEmailValid && isPasswordValid) {
      setShowSuccessPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    navigate("/");
  };

  return (
    <Container>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2em", md: "2rem", lg: "2rem" },
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          Forgot Password
        </Typography>
      </Box>
      {showSuccessPopup ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "2rem",
          }}
        >
          <CheckCircleIcon
            sx={{
              color: "success.main",
              fontSize: { xs: 72, md: 96 },
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5em", md: "1.75rem", lg: "1.75rem" },
              paddingTop: "1rem",
              textAlign: "center",
            }}
          >
            Password was changed!!
          </Typography>
          <Button
            variant="contained"
            size="medium"
            sx={{
              margin: "1rem",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                lg: "1.5rem",
              },
              bgcolor: "#757A79",
              "&:hover": {
                bgcolor: "#9BA6A5",
              },
              width: "20%",
              textTransform: "none",
            }}
            onClick={handleClosePopup}
          >
            Close
          </Button>
        </Box>
      ) : (
        <Box
          component="form"
          sx={{
            mt: "2rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            label="Email"
            name="email"
            type="email"
            margin="normal"
            sx={{
              width: { xs: "75%", md: "50%", lg: "60%" },
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            inputProps={{
              pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
              title: "Please enter a valid email address",
            }}
          />
          <TextField
            required
            label="Password"
            name="password"
            type="password"
            margin="normal"
            sx={{
              width: { xs: "75%", md: "50%", lg: "60%" },
            }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{
              pattern: ".{8,}",
              title: "Password must be at least 8 characters",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              margin: "1rem",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                lg: "1.5rem",
              },
              bgcolor: "#757A79",
              "&:hover": {
                bgcolor: "#9BA6A5",
              },
              width: { xs: "75%", md: "50%", lg: "30%" },
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ForgotPassword;
