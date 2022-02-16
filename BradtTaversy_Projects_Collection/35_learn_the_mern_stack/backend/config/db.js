const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    // if error: log-it out and exit the process
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
