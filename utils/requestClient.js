import axios from "axios";

const requestClient = axios.create({
  baseURL: "https://menuonline.onrender.com",
});

export default requestClient;