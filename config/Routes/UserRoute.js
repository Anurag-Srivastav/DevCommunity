const express = require("express");
let router = express.Router()
const UsersController = require('../../db/Models/Users/UsersController');

router.post("/users/create", UsersController.createNewUser);

module.exports = router;
