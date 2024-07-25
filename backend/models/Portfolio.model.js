import mongoose from 'mongoose'

const PortfolioSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    roles:
    {
        type: [String],
        required: true,
        trim: true
    }
    ,
    bio: {
        type: String,
        required: true,
        trim: true
    },
    portfolioImage: {
        type: String,
    }

})

export const Portfolio = mongoose.model('Portfolio', PortfolioSchema)