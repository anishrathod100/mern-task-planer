import express from "express";
import { addTask, getAllTask } from "../controllers/task.controller";

const router = express.Router();

router.post("/add", addTask);
router.get("/", getAllTask);

export default router;
