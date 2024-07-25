import mongoose from 'mongoose'

const aboutSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    aboutImage: {
        type: String,
    },
    aboutContent: {
        type: String,
        required: true
    }
})

export const About = mongoose.model('About', aboutSchema)