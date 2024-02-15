import express from "express";
import AuthController from "../controllers/authController.js";
const router=express.Router();

router.post("/user/register",AuthController.userRegistration);
router.post("/user/login",AuthController.userlogin);
export default router;