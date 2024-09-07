import multer from "multer";
import UserModel from "../model/User.js";
import path from "path";
import bcrypt from "bcrypt";

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

async function Register(req, res) {
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
export default Register;
