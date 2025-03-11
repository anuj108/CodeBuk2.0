const User = require("../models/user");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "LIFEISENJOY";

//signup

async function handleUserSignUp(req, res) {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.send("INVALID INPUTS");
  const user = User.create({ name: name, email: email, password: password });

  res.status(200).json(user);
}

//login

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.send("INVALID INPUTS");
    const user = await User.findOne({ email, password });
    if (!user) return res.send("USER NOT FOUND");
    const token = jwt.sign({ name: user.name, email: user.email }, SECRET_KEY);
    console.log(token);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleUserLogout(req, res) {
  res.clearCookie("jwt");
  res.send("Logged out");
}

module.exports = { handleUserLogin, handleUserSignUp, handleUserLogout };
