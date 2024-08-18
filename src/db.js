import mongoose from "mongoose";
import { config } from "dotenv";

export const connetcDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}