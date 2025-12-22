import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany, 
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/auth.js";

const companyRouter = express.Router();

//routes

companyRouter.post("/register", isAuthenticated, registerCompany);
companyRouter.get("/get", isAuthenticated, getCompany);
companyRouter.get("/get/:id", isAuthenticated, getCompanyById);
companyRouter.put("/update/:id", isAuthenticated, updateCompany);

export default companyRouter;
