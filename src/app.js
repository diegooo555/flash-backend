import express from "express";
import cors from 'cors';
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

const app = express();


config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(userRoutes);
app.use(taskRoutes);

export default app;