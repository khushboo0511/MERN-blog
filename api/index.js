const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB is connected')
}).catch((err) => {
    console.log(err)
})

const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})