import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    //check token exist or not

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    //verify token

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.id = decode.userId; //store userid in req

    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
