import axios from "axios";

const api = axios.create({
  baseURL: " https://students-detail-5fs5.onrender.com/api",
});

export default api;
