import Task from "../models/task.model.js";

// add task in db
const addTask = async (req, res) => {
  const { text, taskDone, colors } = req.body;
  try {
    const task = await Task.create({
      text,
      taskDone,
      colors,
      user: req.user._id,
    });
    res.json(task);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get all task in db
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get one task in db
const getOneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update task in db
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!task) {
      return res.json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete task in db
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete task in db
const deleteAllTask = async (req, res) => {
  try {
    await Task.deleteMany({ user: req.user._id });
    res.json("All task deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
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
