// utils/API.js

const axios = require('axios').default;

export default axios.create({
  baseURL: "https://98vno070t3.execute-api.us-east-1.amazonaws.com/Production",
  proxy: {
    host: 'https://98vno070t3.execute-api.us-east-1.amazonaws.com/Production',
  },
  responseType: "json"
});