import app from "./app.js";
import { connetcDB } from "./db.js";

await connetcDB();
app.listen(process.env.PORT);
console.log("Server on Port", process.env.PORT);