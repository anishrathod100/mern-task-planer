import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "This field is required"],
    },
    taskDone: {
      type: Boolean,
      required: true,
    },
    colors: {
      type: String,
      enum: ["red", "pink", "blue", "green", "yellow", "gray"],
      default: "grey",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Task = new mongoose.model("Task", taskSchema);

export default Task;
