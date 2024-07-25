import { Portfolio } from "../models/Portfolio.model.js"
import { About } from "../models/About.model.js"


// Intro Post Controllers
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


// About post cotrollers
export const about = async (req, res) => {
    try {
        // Destructuring from req body
        const { title, aboutContent } = req.body

        // validating field
        if (!title || !aboutContent) {
            return res.status(400).json({
                success: false,
                message: 'All Field Required',
            })
        }

        // creating about section
        const about = await About.create({
            title,
            aboutContent
        })

        // returning res 
        return res.status(200).json({
            success: true,
            message: "About Section Created Successfully",
            data: about
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}