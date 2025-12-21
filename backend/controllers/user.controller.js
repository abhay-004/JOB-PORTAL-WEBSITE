import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register controller for user

const register = async (req, res) => {
  try {
    //get data
    const { fullname, email, password, phoneNumber, role } = req.body;

    if (!fullname || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check already exist or not

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User Already Exist with this email ",
      });
    }

    //create a hash password
    const hashPassword = await bcrypt.hash(password, 10);

    //create user

    await User.create({
      fullname,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    });

    //send response

    return res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//Login controller for user

const login = async (req, res) => {
  try {
    //get data
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check user exist or not

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    //check password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    //check role

    if (role != user.role) {
      return res.status(400).json({
        success: false,
        message: "Account doesn't exist with current role",
      });
    }

    //generate token

    const tokenData = { userId: user._id };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    //user info

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    //store token in cookie
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        success: true,
        message: `Welcome back ${(user, fullname)}`,
      });
  } catch (error) {
    console.log(error);
  }
};

//LogOut controller for user

const logout = async (req, res) => {
  try {
    //delete cookie

    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//updateProfile controller for user

const updateProfile = async (req, res) => {
  try {
    //get data
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //skills in string so convert it into array
    const skillsArray = skills.split(",");

    const userId = req.id; //middleware authentication

    //check user login or not
    let user = await User.findById({ userId });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not Found",
      });
    }

    //update fields

    (user.fullname = fullname),
      (user.email = email),
      (user.phoneNumber = phoneNumber),
      (user.bio = bio),
      (user.skills = skills);

    //save user in database

    await user.save();

    //user info

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export { register, login, logout, updateProfile };
