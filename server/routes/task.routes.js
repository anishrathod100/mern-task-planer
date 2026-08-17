import express from "express";
import {
  addTask,
  deleteAllTask,
  deleteTask,
  getAllTask,
  getOneTask,
  updateTask,
} from "../controllers/task.controller.js";
import { AuthUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add", addTask);
router.get("/", getAllTask);
router.get("/:id", getOneTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.delete("/", deleteAllTask);

export default router;
