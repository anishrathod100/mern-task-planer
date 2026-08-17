import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/task.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

connectDB();

app.use("/api/task", taskRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
