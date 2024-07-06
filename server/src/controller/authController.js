const User = require("../models/user");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "LIFEISENJOY";

//signup

async function handleUserSignUp(req, res) {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.send("INVALID INPUTS");
  user = User.create({ name: name, email: email, password: password });

  return res.send("SUCCESS");
}

//login

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.send("INVALID INPUTS");
  const user = await User.findOne({ email, password });
  if (!user) return res.send("USER NOT FOUND");
  const token = jwt.sign({ name: user.name, email: user.email }, SECRET_KEY);
  res.cookie("jwt", token);
  res.send(user);
}

async function handleUserLogout(req, res) {
  res.clearCookie("jwt");
  res.send("Logged out");
}

module.exports = { handleUserLogin, handleUserSignUp, handleUserLogout };
