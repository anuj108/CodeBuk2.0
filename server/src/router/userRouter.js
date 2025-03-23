import express from 'express';
import User from '../models/user.js';
const router = express.Router();

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  console.log("abc");
  try {
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(user,"abc");
    res.status(200).json(user);
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
