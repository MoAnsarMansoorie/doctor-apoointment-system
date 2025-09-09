import jwt from "jsonwebtoken"

const authAdmin = async (req, res, next) => {
    try {
        const {atoken} = req.headers

        if (!atoken) {
            return res.status(400).json({
                success: false,
                message: "Not token, Authorization failed"
            })
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials, Authorization failed"
            })
        }

        next();
        
    } catch (error) {
        console.log("Error during admin login", error)
        return res.status(201).json({
            success: false,
            message: "Error to admin login",
            error
        })
    }
}

export default authAdmin;