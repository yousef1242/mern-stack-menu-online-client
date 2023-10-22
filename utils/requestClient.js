import axios from "axios";

const requestClient = axios.create({
  baseURL: "http://localhost:8080",
});

export default requestClient;