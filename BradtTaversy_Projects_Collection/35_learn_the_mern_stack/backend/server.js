const express = require("express")

// colored terminal output
const colors = require("colors")

const dotenv = require("dotenv").config()

const { errorHandler } = require("./middleware/errorMiddleware")

// database config
const connectDB = require("./config/db")

const port = process.env.PORT || 5555

// connect database
connectDB()

const app = express()

// JSON parser for express
app.use(express.json())

// Middleware to allow use of req.body data
app.use(express.urlencoded({ extended: false }))

// All paths
app.use("/api/goals", require("./routes/goalRoutes"))

// Overwrite the default error handler
app.use(errorHandler)

// Server starts listening
app.listen(port, () => console.log(`Server started on port ${port}`))
