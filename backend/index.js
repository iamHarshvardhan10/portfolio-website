import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// importing routes
import portfolioRoute from './routes/Portfolio.route.js'


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})


// Defining routes
app.use('/api/portfolio', portfolioRoute)


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


