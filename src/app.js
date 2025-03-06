import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// Routes import

import userRouter from "./routes/user.routes.js";
import quizRouter from "./routes/quiz.routes.js"

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/quizzes",quizRouter);

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

export { app };
