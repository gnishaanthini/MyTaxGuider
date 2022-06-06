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

//
//import { Server } from "socket.io";  

// production
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, './client/build')))

// routes
import authRouter from './routes/authRoute.js'
import adminRouter from './routes/adminRoutes.js'
import employeeRouter from './routes/employeeRoutes.js'
import faqRouter from './routes/faqRoutes.js'

// middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddeware from './middleware/error-handler.js'

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/emp', employeeRouter)
app.use('/api/v1/faq', faqRouter)

// only when production
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddeware)

//const io = new Server(PORT);

// io.on("connection", (socket) => {
//     // send a message to the client
//     //socket.emit("receive_message", data);  
//     // receive a message from the client

//     socket.on("send_message", (data) => {
//         socket.emit("receive_message", data);  
//     });
//   });

// server
const PORT = process.env.PORT || 5500
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()