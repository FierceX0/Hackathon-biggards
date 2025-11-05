import React, { useEffect, useState } from "react";
import API from "../api.js";

const DonorDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/donor/dashboard")
      .then((res) => setData(res.data))
      .catch(() => alert("Error loading donor dashboard"));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="donor-dashboard">
      <h2>Welcome, {data.name}</h2>
      <p>Blood Type: {data.bloodType}</p>
      <p>Donations: {data.donations}</p>

      <h3>Active Requests</h3>
      {data.requests.map((req, i) => (
        <div key={i}>
          <strong>{req.hospital}</strong> - {req.urgency}
        </div>
      ))}
    </div>
  );
};

export default DonorDashboard;
