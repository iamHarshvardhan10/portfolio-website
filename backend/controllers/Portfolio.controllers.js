import { Portfolio } from "../models/Portfolio.model.js"



// Intro Controllers
export const Intro = async (req, res) => {
    try {
        // Destructuring from req body
        const { firstName, email, roles, bio } = req.body

        // validating user from body
        if (!firstName || !email || !roles || !bio) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        // create portfolio Intro
        const intro = await Portfolio.create({
            firstName,
            email,
            roles,
            bio
        })

        // return res
        return res.status(200).json({
            success: true,
            message: "Portfolio Intro Created Successfully",
            data: intro
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}