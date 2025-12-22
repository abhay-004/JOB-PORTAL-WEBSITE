import express from "express"
import isAuthenticated from "../middlewares/auth.js"
import { getAdminJobs, getAllJobs, jobById, postJob } from "../controllers/job.controller.js"

const jobRouter = express.Router()



//routes

jobRouter.post("/post",isAuthenticated,postJob)
jobRouter.get("/get",getAllJobs)
jobRouter.get("/get/:id",isAuthenticated,jobById)
jobRouter.get("/getadminjobs",isAuthenticated,getAdminJobs)


export default jobRouter