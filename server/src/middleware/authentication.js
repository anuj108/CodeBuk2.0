const jwt = require("jsonwebtoken");

const SECRET_KEY = "LIFEISENJOY";

const authenticateJWT = (req, res, next) => {
  console.log(req.headers);
  console.log("req cookies ", req.cookies);
  const token = req.headers.authorization?.split(" ")[1];
  console.log("MERE FRONTEND SE AAYA TOKEN ", token);
  console.log(!token);
  if (token === null) return res.status(404).send("TOKEN NOT FOUND");
  console.log("token",token);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      console.log("verified ", token);
      req.user = user;
      console.log(req.user);
      next();
    }
  });
};

module.exports = authenticateJWT;
