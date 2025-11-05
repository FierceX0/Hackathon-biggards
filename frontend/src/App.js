import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DonorDashboard from "./pages/DonorDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/donor"
          element={<ProtectedRoute element={<DonorDashboard />} />}
        />
        <Route
          path="/hospital"
          element={<ProtectedRoute element={<HospitalDashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
