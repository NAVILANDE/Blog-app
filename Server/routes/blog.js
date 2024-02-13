import express from "express";
import AuthControoler from "../controllers/authController.js";
const router=express.Router();

router.post("/user/register",AuthControoler.userRegistration);
router.post("/user/login",AuthControoler.userlogin);
export default router;