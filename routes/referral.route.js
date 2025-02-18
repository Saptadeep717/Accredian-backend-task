const express = require("express");
const { referFriendHandler } = require("../controllers/referral.controller.js");

const router = express.Router();

router.post("/earnprogram", referFriendHandler);

module.exports = router;
