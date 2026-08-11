import express from "express";
import {
  addTask,
  deleteTask,
  getAllTask,
  getOneTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/add", addTask);
router.get("/", getAllTask);
router.get("/:id", getOneTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
