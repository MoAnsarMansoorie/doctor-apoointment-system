import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"

dotenv.config()

// app config
const app = express()
const PORT = process.env.PORT || 8000

connectDb();
connectCloudinary();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


// api testing
app.get("/", (req, res) => {
    res.send("Hello Server!")
})

// api config endpoints
app.use("/api/v1/admin", adminRouter )

// server listen
app.listen(PORT, () => {
    console.log("Server is running at port http://localhost:8080")
})