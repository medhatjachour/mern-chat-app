import express from "express";
import { Upload, login, register } from "../controllers/Register.controller.js";


const router = express.Router();

router.post("/register",Upload.single('image'), register);
router.post("/login", login);

export default router