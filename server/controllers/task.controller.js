import Task from "../models/task.model.js";

// add task in db
const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all task in db
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one task in db
const getOneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update task in db
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete task in db
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete task in db
const deleteAllTask = async (req, res) => {
  try {
    await Task.deleteMany({});
    res.status(200).json("All task deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export {
  addTask,
  getAllTask,
  getOneTask,
  updateTask,
  deleteTask,
  deleteAllTask,
};
