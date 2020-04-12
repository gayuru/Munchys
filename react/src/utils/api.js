// utils/API.js

import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3000/",
  responseType: "json"
});