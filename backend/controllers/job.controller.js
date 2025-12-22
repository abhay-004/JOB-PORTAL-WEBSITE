//Post Job for admin

import { Job } from "../models/job.model";

const postJob = async (req, res) => {
  try {
    //get data
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //create job

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      companyId,
      created_by: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all jobs for students

const getAllJobs = async (req, res) => {
  try {
    //filter

    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    //find jobs
    const jobs = await Job.find(query);

    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found",
      });
    }

    return res.status(201).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};

//get job by id by students

const jobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: true,
        message: "Job not found",
      });
    }

    return res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
  }
};

//get job created by admin for admin

const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        success: true,
        message: "Job not found",
      });
    }

    return res.status(201).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
  }
};

export { postJob, getAllJobs,jobById,getAdminJobs };
