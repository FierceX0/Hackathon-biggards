import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("donor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      navigate(data.role === "donor" ? "/donor" : "/hospital");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <h2>NSS BLOODLINE CONNECT</h2>
      <h3>Login</h3>
      <div>
        <button onClick={() => setRole("donor")} disabled={role === "donor"}>
          Donor
        </button>
        <button
          onClick={() => setRole("hospital")}
          disabled={role === "hospital"}
        >
          Hospital
        </button>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
