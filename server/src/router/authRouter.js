const express = require("express");
const router = express.Router();

const {
  handleUserLogin,
  handleUserSignUp,
  handleUserLogout,
} = require("../controller/authController");

router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);
router.get("/logout", handleUserLogout);

module.exports = router;
