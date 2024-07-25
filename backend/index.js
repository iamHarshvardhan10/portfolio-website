import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()




const app = express()


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})



app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDb Connected')
}).catch((error) => {
    console.log('MongoDB Connection failed')
    console.log(error)
    process.exit(1)
})


