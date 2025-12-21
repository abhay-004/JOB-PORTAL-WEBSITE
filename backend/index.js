import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.route.js";
dotenv.config({}); //setup dotenv
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//cors policy

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOption));

const port = process.env.PORT || 3000;

//api endpoints

app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  //db call
  connectDB();
  console.log(`Server running at port : ${port}`);
});
