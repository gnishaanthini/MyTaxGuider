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
// import db from './db/connect.js'

// routes
import authRouter from './routes/authRoute.js'

// middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddeware from './middleware/error-handler.js'

// test
app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddeware)

// server
const PORT = process.env.PORT || 5500
const start = async () => {
    try {
        // const result = await db.query('select * from test')
        // console.table(result[0])
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()