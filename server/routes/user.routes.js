import express from "express";
import { authUser, login, register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", authUser);

export default router;
