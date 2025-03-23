import express from 'express';
import { handleUserLogin,handleUserSignUp,handleUserLogout } from '../controller/authController.js';

const router = express.Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);
router.get("/logout", handleUserLogout);

export default router;