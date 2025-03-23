import jwt from 'jsonwebtoken';

const SECRET_KEY=process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
  console.log(req.headers);
  console.log("req cookies ", req.cookies);
  const token = req.cookies.token
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

export default authenticateJWT;
