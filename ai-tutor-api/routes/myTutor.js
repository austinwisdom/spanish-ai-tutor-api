const express = require("express");
const router = express.Router();
const  axios  =  require('axios');

const myTutorController = require("../controllers/myTutor-controller")

router.route("/es").post(myTutorController.mySpanishTutor)
router.route("/en").post(myTutorController.myEnglishTutor)
router.route("/de").post(myTutorController.myGermanTutor)
router.route("/fr").post(myTutorController.myFrenchTutor)
router.route("/jp").post(myTutorController.myJapaneseTutor)
router.route("/pt").post(myTutorController.myPortugueseTutor)

module.exports = router