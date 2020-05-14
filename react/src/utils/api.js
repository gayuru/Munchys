// utils/API.js

const axios = require('axios').default;
const HttpsProxyAgent = require('https-proxy-agent');

export default axios.create({
  baseURL: 'https://98vno070t3.execute-api.us-east-1.amazonaws.com/Production',
  proxy: true,
  httpsAgent: new HttpsProxyAgent('https://cloud-computing-270002.appspot.com/'),
  responseType: "json"
});