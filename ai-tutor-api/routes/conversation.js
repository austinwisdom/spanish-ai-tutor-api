const express = require("express");
const router = express.Router();
const  axios  =  require('axios');

const conversationController = require("../controllers/conversation-controller")

router.route("/").get(conversationController.hello)

router.route("/es").post(conversationController.spanishConversation)
router.route("/en").post(conversationController.englishConversation)
router.route("/de").post(conversationController.germanConversation)
router.route("/fr").post(conversationController.frenchConversation)
router.route("/jp").post(conversationController.japaneseConversation)
router.route("/pt").post(conversationController.portugueseConversation)

module.exports = router