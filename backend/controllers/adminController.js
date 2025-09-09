import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from "jsonwebtoken"

export const addDoctorController = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const image = req.file

        // console.log({ name, email, password, speciality, degree, experience, about, fees, address }, image)

        // checking add details to doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(401).json({
                success: false,
                message: "Details is missing"
            })
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.status(401).json({
                success: false,
                message: "Please enter a valid email."
            })
        }

        // validating strong password
        if (password.length < 8) {
            return res.status(401).json({
                success: false,
                message: "Password should be greter then 8 digit or equal."
            })
        }

        // hasing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality, 
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            image: imageUrl,
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        return res.status(201).json({
            success: true,
            message: "New doctor added successfully",
            newDoctor
        })

    } catch (error) {
        console.log("Error during add doctor", error)
        return res.status(201).json({
            success: false,
            message: "Error to add doctor",
            error
        })

    }
}

// login for admin login
export const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)

            res.status(200).json({
                success: true,
                message: "Admin has logged in successfully",
                token
            })
            
        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        
    } catch (error) {
        console.log("Error during admin login", error)
        return res.status(201).json({
            success: false,
            message: "Error to admin login",
            error
        })
    }
}