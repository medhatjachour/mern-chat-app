import express from "express";
import Register, { Upload } from "../controllers/Register.controller.js";


const router = express.Router();

router.post("/register",Upload.single('image'), Register);

export default router