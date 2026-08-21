import express from "express";
import { authUser, login, register } from "../controllers/user.controller.js";
import { AuthUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", AuthUser, authUser);

export default router;
