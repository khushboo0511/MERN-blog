const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const {userRouter} = require('./routes/user.routes.js')
const { authRoutes } = require('./routes/auth.route.js')
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB is connected')
}).catch((err) => {
    console.log(err)
})

const app = express()
const PORT = 3000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

app.use('/api/user', userRouter)

app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});