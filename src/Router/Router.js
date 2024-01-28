const express = require("express");
const router = express.Router();
const adduser = require("../Controller/Controller")



router.post("/adduser",adduser.user);


module.exports = router;