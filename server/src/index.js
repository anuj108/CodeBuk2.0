const express = require("express");
const multer = require("multer");
const authRouter = require("./router/authRouter.js");
const userRouter = require("./router/userRouter.js");
const postRouter = require("./router/postRouter.js");
const app = express();
const mongoose = require("mongoose");
const authenticateJWT = require("./middleware/authentication.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = 5001;

mongoose
  .connect(
    "mongodb+srv://dbAnuj:dbAnuj@codebookcluster.syvvepq.mongodb.net/?retryWrites=true&w=majority&appName=CodeBookCluster"
  )
  .then(() => {
    console.log("MONGODB CONNECTED!");
  });

app.use(
  cors({
    origin: "http://localhost:1234",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder where uploaded files will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define the filename of the uploaded file
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

//------------------------------------

app.post("/upload", upload.single("file"), (req, res) => {
  // Handle uploaded file here
  res.json({ message: "File uploaded successfully", file: req.file });
});
app.use("/auth", authRouter);
app.use("/user", authenticateJWT, userRouter);
app.use("/", authenticateJWT, postRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING OF PORT ${PORT}`);
});
