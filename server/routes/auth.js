import express from "express";
import { Upload, login, register ,verify} from "../controllers/auth.controller.js";
import verifyUser from "../middleware/verifyUser.js";
import users from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register",Upload.single('image'), register);
router.post("/login", login);
router.get("/verify", verifyUser, verify);

export default router