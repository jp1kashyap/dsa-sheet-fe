import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3010/api/",
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE",
    "Content-Type": "application/json",
  },
});

export default api;
