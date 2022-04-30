// env setup
import dotenv from 'dotenv'
dotenv.config()

// express
import express from 'express'
import 'express-async-errors'
const app = express()
app.use(express.json())

// morgan setup
import morgan from 'morgan'
if (process.env.NODE_ENV !== 'Production') {
    app.use(morgan('dev'))
}

// production

// db

// routes

// middlewares

// test
app.get('/', (req, res) => {
    res.send('Welcome!')
})

// server
const PORT = process.env.PORT || 5500
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()