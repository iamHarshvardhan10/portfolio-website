import mongoose from 'mongoose'

const IntroSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    roles: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    bio: {
        type: String,
        required: true,
        trim: true
    },
    portfolioImage: {
        type: String,
        required: true,
    }

})

export const Intro = mongoose.model('Intro', IntroSchema)