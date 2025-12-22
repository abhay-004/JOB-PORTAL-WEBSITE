//Register Controller for  Company

import { Company } from "../models/company.model.js";

const registerCompany = async (req, res) => {
  try {
    //get data
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Company name is required ",
      });
    }
    // check company name exist or not
    let company = await Company.findOne({ name });

    if (company) {
      return res.status(400).json({
        success: false,
        message: "You can't register same company",
      });
    }

    //register company
    company = await Company.create({ name, userId: req.id });

    //response

    return res.status(201).json({
      success: true,
      message: "Company register successfully",
      company,
    });
  } catch (error) {
    error;
  }
};

//get company data

const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user

    //get company by user id
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    console.log(error);
  }
};

// get company by id

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
  }
};

//update company

const updateCompany = async (req, res) => {
  try {
    //get data
    const { name, description, website, location } = req.body;
    const file = req.file;
    //cloudinary

    //update data

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      company,
      message: "Company information updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerCompany, getCompany, getCompanyById, updateCompany };
