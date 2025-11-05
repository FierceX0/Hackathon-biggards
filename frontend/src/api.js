import axios from "axios";
console.log("Backend URL:", "https://hackathon-backend.up.railway.app/api");
const API = axios.create({
  baseURL: "https://hackathon-backend.up.railway.app/api" 
});

export default API;
