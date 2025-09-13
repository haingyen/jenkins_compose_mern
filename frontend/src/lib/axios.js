import axios from "axios";
 
const api = axios.create({
  // import.meta.env.MODE = "development" | "production" <=> npm run dev | npm run build & npm run preview
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
});

export default api;
