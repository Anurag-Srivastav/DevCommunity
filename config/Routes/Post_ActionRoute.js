const express = require("express");
const Post_Actions = require("../../db/Models/Post_actions/Post_Actions");
let router = express.Router()
const Post_ActionsController = require('../../db/Models/Post_actions/Post_ActionsController');

router.post("/post/:type", Post_ActionsController.ActionOnPost)
router.get("/likes", Post_ActionsController.getLikes)

module.exports = router;