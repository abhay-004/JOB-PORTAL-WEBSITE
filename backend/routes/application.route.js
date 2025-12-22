import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import {
  applyJob,
  getApplicants,
  getAppliedJob,
  updateStatus,
} from "../controllers/application.controller";

const applicationRouter = express.Router();

//routes

applicationRouter.post("/apply/:id", isAuthenticated, applyJob);
applicationRouter.get("/get", isAuthenticated, getAppliedJob);
applicationRouter.get("/:id/applicants", isAuthenticated, getApplicants);
applicationRouter.post("/status/:id/update", isAuthenticated, updateStatus);

export default applicationRouter;
