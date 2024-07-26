import { Portfolio } from "../models/Portfolio.model.js"
import { About } from "../models/About.model.js"
import { Stack } from "../models/Stack.model.js"
import { Project } from "../models/Project.model.js"
import { Blog } from "../models/Blog.model.js"
import dotenv from 'dotenv'
import { imageCloudinary } from "../utils/imageCloudinary.js"
dotenv.config()

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
        // image uploading 
        const portfolioImage = req.files.portfolioImage
        const image = await imageCloudinary(portfolioImage, process.env.FOLDER_NAME)

        console.log(image)
        // create portfolio Intro
        const intro = await Portfolio.create({
            firstName,
            email,
            roles,
            bio,
            portfolioImage: image.secure_url
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
            error: error.message
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

// Stack Post controllers

export const stack = async (req, res) => {
    try {
        // Destructuring from req body
        const { stackName, stackDescription } = req.body;
        // validating field
        if (!stackName || !stackDescription) {
            return res.status(400).json({
                success: false,
                message: 'All Field Required',
            })
        }
        // creating stack section
        const stack = await Stack.create({
            stackName,
            stackDescription
        })
        // returning res
        return res.status(200).json({
            success: true,
            message: "Stack Section Created Successfully",
            data: stack
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


// Project Post Controllers

export const createProject = async (req, res) => {
    try {
        // Destructuring from req body
        const { projectName, projectDescription, projectLink, projectGithubLink, projectTechnologies } = req.body
        // validating field
        if (!projectName || !projectDescription || !projectLink || !projectGithubLink || !projectTechnologies) {
            return res.status(400).json({
                success: false,
                message: 'All Field Required',
            })
        }

        // create project 
        const project = await Project.create({
            projectName,
            projectDescription,
            projectLink,
            projectGithubLink,
            projectTechnologies
        })

        // return res 
        return res.status(200).json({
            success: true,
            message: "Project Section Created Successfully",
            data: project
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}


// Blog post controllers

export const createBlog = async (req, res) => {
    try {
        // destrcure from body
        const { blogTitle, blogDescription, blogTag } = req.body

        // validating field

        if (!blogTitle || !blogDescription || !blogTag) {
            return res.status(400).json({
                success: false,
                message: 'All Field Required'
            })
        }

        // create blog 

        const blog = await Blog.create({
            blogTitle,
            blogDescription,
            blogTag

        })

        return res.status(200).json({
            success: true,
            message: "Blog Section Created Successfully",
            data: blog
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}


// get porfolio details 

export const getPorfolioDetails = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne().sort({ createdAt: -1 })
        const about = await About.findOne().sort({ createdAt: -1 })
        const stack = await Stack.find()
        const projects = await Project.find()
        const blogs = await Blog.find()
        return res.status(200).json({
            success: true,
            message: "Portfolio Details",
            data: {
                portfolio,
                about,
                stack,
                projects,
                blogs
            }

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}