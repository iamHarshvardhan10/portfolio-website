import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
    },
    projectImageUrl: {
        type: [String],

    },
    projectLink: {
        type: String,
    },
    projectGithubLink: {
        type: String,
    },
    projectTechnologies: {
        type: [String]
    },
    projectDate: {
        type: Date,
        default: Date.now()
    }
})

export const Project = mongoose.model('Project', projectSchema)