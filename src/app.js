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
            // Permitir el origen si es igual al dominio principal o un subdominio
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
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