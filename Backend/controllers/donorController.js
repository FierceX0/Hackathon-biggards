export const getDonorDashboard = async (req, res) => {
  // In real app, you’d query donations/requests from DB.
  res.json({
    name: req.user.name,
    bloodType: req.user.bloodType,
    donations: 5,
    requests: [
      { hospital: "City General Hospital", urgency: "Urgent" },
      { hospital: "Sunrise Medical Center", urgency: "Normal" },
    ],
  });
};
