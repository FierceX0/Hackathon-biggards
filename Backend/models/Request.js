import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bloodType: String,
  urgency: { type: String, enum: ["Normal", "Urgent"], default: "Normal" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Request", requestSchema);
