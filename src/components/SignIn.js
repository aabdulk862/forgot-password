import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    // Check if user ID or password is blank
    if (!userId || !password) {
      alert("User ID and/or Password cannot be blank");
    }
    // Check if user ID and password match the mocked values
    else if (userId !== "mockUserId" || password !== "mockPassword") {
      alert("Invalid User ID and/or Password");
    }
    // If user ID and password match, show confirmation message
    else {
      alert("Login is authenticated");
    }
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
          Sign In
        </Typography>
      </Box>
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
          label="User ID"
          name="userId"
          type="text"
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          sx={{
            width: { xs: "75%", md: "50%", lg: "60%" },
          }}
        />
        <TextField
          required
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: { xs: "75%", md: "50%", lg: "60%" },
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
          Login
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/reset"
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
          Forgot Password
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
