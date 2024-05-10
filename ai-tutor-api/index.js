const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
require("dotenv").config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const homePageRoutes = require("./routes/homePage.js")
const myTutorRoutes = require("./routes/myTutor")

app.use("/", homePageRoutes)
app.use("/my-tutor", myTutorRoutes)
// app.use("/test")

const { PORT } = process.env || 3000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})