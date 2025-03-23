import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const SECRET_KEY=process.env.JWT_SECRET;


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
    const token = jwt.sign({ name: user.name, id: user._id }, SECRET_KEY);
    console.log(token);
    res.cookie('token', token, {
      // httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      maxAge: 3600000, // 1 hour in milliseconds
      sameSite: 'strict' // Prevent CSRF attacks
    });
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleUserLogout(req, res) {
  
  res.clearCookie('token', {
    httpOnly: true,
    path: '/',
  });
  res.send("Logged out");
}

export {handleUserLogin,handleUserLogout,handleUserSignUp};
