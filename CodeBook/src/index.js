const express = require("express");
const authRouter = require("./router/authRouter.js");
const userRouter = require("./router/userRouter.js");
const app = express();
const mongoose = require("mongoose");
const authenticateJWT = require("./middleware/authentication.js");
const cookieParser = require("cookie-parser");

const PORT = 5001;

mongoose
  .connect(
    "mongodb+srv://dbAnuj:dbAnuj@codebookcluster.syvvepq.mongodb.net/?retryWrites=true&w=majority&appName=CodeBookCluster"
  )
  .then(() => {
    console.log("MONGODB CONNECTED!");
  });

app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/user", authenticateJWT, userRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING OF PORT ${PORT}`);
});
