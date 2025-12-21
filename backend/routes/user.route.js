import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/auth.js";

const userRouter = express.Router();

//user routes

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/profile/update", isAuthenticated, updateProfile);
userRouter.get("/logout", logout);

export default userRouter;
