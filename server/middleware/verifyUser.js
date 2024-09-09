import jwt from "jsonwebtoken";
import UserModel from "../model/User.js";

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res.status(401).json({ msg: "invalid token" });
    }
    const user = await UserModel.find({ id: decoded._id }).select(
      "-password"
    );
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default verifyUser;
