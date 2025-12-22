//apply job

import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { id: jobId } = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    //check user applied or not on this job
    const excitingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (excitingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already applied for this Job",
      });
    }

    //check job exist or not
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    //create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    //push it in application array
    job.applications.push(newApplication);
    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job applied successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//get applied job

const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "No Applications found",
      });
    }

    return res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    console.log(error);
  }
};

//get applicant admin dekhenga kitne logo neh apply kia hai

const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });

    if (!job) {
      return res.status(404).json({
        success: false,
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

//update status

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status is required",
      });
    }

    //find the application by id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    //update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(201).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { applyJob, getAppliedJob, getApplicants, updateStatus };
