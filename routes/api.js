const express = require('express');
const router = express.Router();
const {getUserProfileData} = require("../controllers/user.controller");
/*
----------------------
Proof of life endpoint
----------------------
*/
router.get('/', (req, res, next) => res.json(' API is alive \u{1F35E} \u{1F5A5}'));
router.get('/user/:name', getUserProfileData);

module.exports = router;