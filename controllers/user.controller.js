'use strict';

require('dotenv').config()
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3030",
  headers: {
    'X-Ig-App-Id': process.env.APP_ID,
    'Accept': '*/*',
    'User-Agent':'Instagram 126.0.0.25.121 Android (23/6.0.1; 320dpi; 720x1280; samsung; SM-A310F; a3xelte; samsungexynos7580; en_GB; 110937453)'
  }
});

let url = 'https://i.instagram.com/api/v1/users/web_profile_info/'

exports.getUserProfileData = async (request, response) => {
  const username = request.params.name;
  
  await api.get(url+`?username=${username}`).then(res => {
    response.json(res.data)
  }).catch(error=>{
    console.error(error.message);
    response.json(error.message)
  });
}