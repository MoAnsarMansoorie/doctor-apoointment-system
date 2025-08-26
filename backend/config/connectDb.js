import mongoose from "mongoose"

const connectDb = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully...")
        })

        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
        
    } catch (error) {
        console.log("Database connection failed!!!", error)
    }
}

export default connectDb;