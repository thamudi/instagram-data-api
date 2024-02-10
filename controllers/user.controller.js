'use strict';

require('dotenv').config()
const axios = require("axios");


const config = {
  headers: {
    'X-Ig-App-Id': process.env.APP_ID,
    'Accept': '*/*',
    'User-Agent':'Instagram 126.0.0.25.121 Android (23/6.0.1; 320dpi; 720x1280; samsung; SM-A310F; a3xelte; samsungexynos7580; en_GB; 110937453)'
  },
};


let url = 'https://i.instagram.com/api/v1/users/web_profile_info/'

exports.getUserProfileData = async (request, response) => {
  const username = request.params.name;
  
  await axios.get(url+`?username=${username}`, config).then(res => {
    response.json(res.data)
  }).catch(error=>{
    console.error(error.message);
    response.json(error.message)
  });
}