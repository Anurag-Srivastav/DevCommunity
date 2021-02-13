const express = require("express");
let router = express.Router()
const CommentsController = require('../../db/Models/Comments/CommentsController');

router.post("/users/comment", CommentsController.PostComment);

module.exports = router;
