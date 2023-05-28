import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { login } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log(response)
      if (response.token) {
        navigate("./chat");
      }
      else if(response.message)
      {
        return <p className='color-red '>{response.message}</p>
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="flex justify-center">
      <Box className="border-2 p-2 m-0 w-96 ">
        <TextField
          className="mb-2 "
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <TextField
          className="mb-2"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          className=""
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Link to="/register" className="">
          Register here if you don't have an account.
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
