import express from "express";
import {
  forgotPassword,
  registerUser,
  resetPassword,
} from "../controllers/userController.js";
import { login, logout, verifyOTP } from "../controllers/authController.js";

const router = express.Router();

// registration and login processes
router.post("/login", login);
router.post("/register", registerUser);
router.post("/verifyotp", verifyOTP);
router.post("/logout", logout);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

export default router;
