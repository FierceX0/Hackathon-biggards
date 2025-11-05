import React, { useEffect, useState } from "react";
import API from "../api.js";

const HospitalDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/hospital/dashboard")
      .then((res) => setData(res.data))
      .catch(() => alert("Error loading hospital dashboard"));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="hospital-dashboard">
      <h2>Hospital Dashboard</h2>
      <p>Total Donors: {data.totalDonors}</p>
      <p>Available Donors: {data.availableDonors}</p>
      <p>Blood Types: {data.bloodTypes}</p>
    </div>
  );
};

export default HospitalDashboard;
