import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller";
import isAuthenticated from "../middlewares/auth";

const companyRouter = express.Router();

//routes

companyRouter.post("/register", isAuthenticated, registerCompany);
companyRouter.get("/get", isAuthenticated, getCompany);
companyRouter.get("/get/:id", isAuthenticated, getCompanyById);
companyRouter.post("/update/:id", isAuthenticated, updateCompany);

export default companyRouter;
