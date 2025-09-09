import express from "express"
import { addDoctorController, adminLoginController } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router()

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctorController);
adminRouter.post("/login", adminLoginController)

export default adminRouter;