import express from 'express';
import multer from 'multer';
import authRouter from './router/authRouter.js';
import userRouter from './router/userRouter.js';
import postRouter from './router/postRouter.js';
import mongoose from "mongoose";
import authenticateJWT from './middleware/authentication.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();


dotenv.config();


const PORT = 5001;

const MONGO_URI=process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
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
app.use("/user",authenticateJWT, userRouter);
app.use("/",authenticateJWT, postRouter);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING OF PORT ${PORT}`);
});
