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
    const tasks = await Task.find({});
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one task

export { addTask, getAllTask };
