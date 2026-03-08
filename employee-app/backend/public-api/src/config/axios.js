const axios = require("axios");
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.PRIVATE_API_URL,
});

module.exports = api;
