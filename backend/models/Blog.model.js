import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
    },
    blogTag: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export const Blog = mongoose.model('Blog' , blogSchema)