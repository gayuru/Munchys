// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://98vno070t3.execute-api.us-east-1.amazonaws.com",
  responseType: "json"
});