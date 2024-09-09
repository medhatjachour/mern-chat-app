import multer from "multer";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//
import UserModel from "../model/User.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const Upload = multer({
  storage: storage,
});

async function register(req, res) {
  try {
    const { username, password } = req.body;
    let file = null;
    if (req.file) {
      file = req.file.filename;
    }
    const userExist = await UserModel.findOne({ username: username });
    if (userExist) {
      return res.status(400).json({ msg: "user already exist" });
    }
    console.log("2");

    const hash_password = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username: username,
      password: hash_password,
      image: file,
    });
    await newUser.save();
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const userExist = await UserModel.findOne({ username: username });
    if (!userExist) {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    const match_password = await bcrypt.compare(password, userExist.password);
    if (!match_password) {
      return res.status(400).json({ msg: "password doesn't matched" });
    }
    const token = jwt.sign({ _id:userExist.id}, process.env.JWT_KEY,{
        expiresIn: "20h"
    })
    return res.status(200).json({ msg: "success", token, user:{_id: userExist.id,username:userExist.username} });
  
} catch (error) {
    return res.status(500).json({ msg: error });
  }
}

const verify = (req, res) => {
  return res.status(500).json({msg:"success"})
}

export { login, register , verify};
