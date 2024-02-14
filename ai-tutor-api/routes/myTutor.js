const express = require("express");
const router = express.Router();
const  axios  =  require('axios');

const myTutorController = require("../controllers/myTutor-controller")

router.route("/").post(myTutorController.myTutor)

module.exports = router