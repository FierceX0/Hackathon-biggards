import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import DonorDashboard from "./pages/DonorDashboard.js";
import HospitalDashboard from "./pages/HospitalDashboard.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import TestRegister from "./TestRegister.js"; // your test snippet

function App() {
  return (
    <Router>
      {/* TEMP: Backend test component */}
      <TestRegister />

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

