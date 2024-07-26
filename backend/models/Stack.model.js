import mongoose from 'mongoose'

const stackScheam = new mongoose.Schema({
    stackName: {
        type: String,
        required: true,
        unique: true
    },
    stackDescription: {
        type: String,

    },
    stackLogo: {
        type: String,
    }
},{timestamps:true})

export const Stack = mongoose.model('Stack' , stackScheam)