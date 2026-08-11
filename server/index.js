import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/task.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

//  MONGODB_URL="mongodb+srv://anish-mern-task:mern-task-planer@cluster0.mbwce5v.mongodb.net/mern-task?appName=Cluster0"
