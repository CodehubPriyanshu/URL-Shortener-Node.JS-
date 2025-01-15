const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserSignup); // Route for signup
router.post("/login", handleUserLogin); // Route for login

module.exports = router;
