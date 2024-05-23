import { Router } from "express";
import usersRouter from "./users.routes.js";
import tasksRouter from "./tasks.routes.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

export default router;