import express from "express";
import cors from 'cors';
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

const app = express();


config();

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigin = process.env.FRONTEND_URL; // Dominio principal
        if (!origin || origin === allowedOrigin || origin.endsWith(`.${allowedOrigin}`)) {
            callback(null, true); // Permitir
        } else {
            callback(new Error('Not allowed by CORS')); // Bloquear
        }
    },
    credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(userRoutes);
app.use(taskRoutes);

export default app;