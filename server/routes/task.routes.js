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

router.post("/add", AuthUser, addTask);
router.get("/", AuthUser, getAllTask);
router.get("/:id", AuthUser, getOneTask);
router.put("/:id", AuthUser, updateTask);
router.delete("/:id", AuthUser, deleteTask);
router.delete("/", AuthUser, deleteAllTask);

export default router;
