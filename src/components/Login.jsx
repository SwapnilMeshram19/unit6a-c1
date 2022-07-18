import { TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const {token,handleLogin}=useContext(AuthContext);

  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        padding: "20px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <TextField
        id="standard-basic"
        sx={{ margin: "5px", width: "80%" }}
        label="Email"
        variant="standard"
        value={email}
        onChange={(event)=>setEmail(event.target.value)}
      />
      <br />
      <TextField
        id="standard-basic"
        sx={{ margin: "5px", width: "80%" }}
        label="Password"
        variant="standard"
        value={password}
        onChange={(event)=>setPassword(event.target.value)}
      />
      <br />
      <Button
        variant="contained"
        sx={{ margin: "15px", marginTop: "30px", width: "80%" }}
        onClick={()=>handleLogin({email:email,password:password})}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
