import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasks.controller.js';
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/task/:id", getTask);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;