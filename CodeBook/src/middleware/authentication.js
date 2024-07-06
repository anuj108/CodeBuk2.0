const jwt = require("jsonwebtoken");

const SECRET_KEY = "LIFEISENJOY";

const authenticateJWT = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.jwt;
  if (!token) return res.send("TOKEN NOT FOUND");

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.send("CANNOT VERIFY JWT");
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = authenticateJWT;
