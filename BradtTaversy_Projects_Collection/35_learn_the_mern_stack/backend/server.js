// Bring in express server
const express = require("express")

// Colored terminal output
const colors = require("colors")

// Have env variables
const dotenv = require("dotenv").config()

// Error handling config
const { errorHandler } = require("./middleware/errorMiddleware")

// Database config
const connectDB = require("./config/db")

// Server port number
const port = process.env.PORT || 5555

// Connect database
connectDB()

// Assigned express
const app = express()

// JSON parser for express
app.use(express.json())

// Middleware to allow use of req.body data
app.use(express.urlencoded({ extended: false }))

// All goal paths
app.use("/api/goals", require("./routes/goalRoutes"))

// All user paths
app.use("/api/users", require("./routes/userRoutes"))

// Overwrite the default error handler
app.use(errorHandler)

// Server starts listening
app.listen(port, () => console.log(`Server started on port ${port}`))
