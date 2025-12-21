import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//cors policy

const corsOption = {
  origin: "http//localhost:5173",
  credentials: true,
};

app.use(cors(corsOption));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
