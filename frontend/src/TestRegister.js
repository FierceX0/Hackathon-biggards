import React, { useState } from "react";
import API from "./api.js";

const TestRegister = () => {
  const [response, setResponse] = useState("");

  const handleTest = async () => {
    try {
      const res = await API.post("/auth/register", {
        name: "Test User",
        email: `test${Date.now()}@example.com`, // unique email each time
        password: "123456",
        role: "donor",
        bloodType: "A+",
      });
      console.log(res.data);
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.error(err.response?.data || err.message);
      setResponse(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  return (
    <div>
      <h2>Test Backend Registration</h2>
      <button onClick={handleTest}>Test Register</button>
      <pre>{response}</pre>
    </div>
  );
};

export default TestRegister;
