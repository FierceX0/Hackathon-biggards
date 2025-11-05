import axios from "axios";

// If on localhost, use local backend; otherwise, use Railway backend
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api" // only for local dev
    : "https://hackathon-backend.up.railway.app/api"; // Railway backend

console.log("Backend URL:", BASE_URL);

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
