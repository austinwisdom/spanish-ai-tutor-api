const express = require("express");
const router = express.Router();
const  axios  =  require('axios');

const myTutorController = require("../controllers/myTutor-controller")

router.route("/").post(myTutorController.myTutor)
router.route("/german").post(myTutorController.myGermanTutor)

module.exports = router