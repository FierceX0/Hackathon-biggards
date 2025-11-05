// frontend/src/api.js
import axios from "axios";

// Hardcoded Railway backend URL
const API = axios.create({
  baseURL: "https://hackathon-backend.up.railway.app/api",
});

console.log("Backend URL:", API.defaults.baseURL);

export default API;

