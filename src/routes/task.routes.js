import { Router } from "express";
import { getTasks, getTask, createTask, createTasks, updateTask, deleteTask } from '../controllers/tasks.controller.js';
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", authRequired,getTasks);
router.get("/task/:id", authRequired,getTask);
router.post("/tasks", authRequired,createTask);
router.post("/createtasks", authRequired,createTasks);
router.put("/tasks/:id", authRequired,updateTask);
router.delete("/task/:id", authRequired,deleteTask);

export default router;