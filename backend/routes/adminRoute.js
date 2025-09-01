import express from "express"
import { addDoctorController } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js"

const adminRouter = express.Router()

adminRouter.post("/add-doctor", upload.single("image"), addDoctorController);

export default adminRouter;